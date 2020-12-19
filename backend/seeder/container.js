/**
 * @param {import('knex')} knex
 * */

exports.seed = async function(knex) {
	let insertedData;
	if ((await knex('container').count())[0].count === '0') {
		insertedData = await knex('container')
			.insert([
				{ name: 'Alpha' },
				{ name: 'Beta' },
				{ name: 'Charlie' },
				{ name: 'Delta' },
			])
			.returning('*')
			.returning('*');
	} else {
		insertedData = await knex('container').select('*');
	}

	/* y=80-\frac{1}{6}x */

	const data = (await knex('container_temperature').count())[0].count;
	console.log(new Date(Date.now()));
	if (data === '0') {
		await Promise.all(
			insertedData.map(
				async (itm) =>
					await knex('container_temperature')
						.insert({
							container_id: itm.id,
							temperature: -90,
							created_at: new Date(Date.now()),
						})
						.returning('*'),
			),
		);
	}
};
