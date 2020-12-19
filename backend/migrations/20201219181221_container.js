/**
 * @param {import('knex')} knex
 * */
exports.up = async (knex) => {
	await knex.schema.hasTable('container').then((exists) => {
		if (!exists) {
			return knex.schema.createTable('container', (table) => {
				table.increments().notNullable();
				table.string('name').notNullable();
			});
		}
	});
};

exports.down = async (knex) => {
	await knex.schema.hasTable('container').then((exists) => {
		if (exists) {
			return knex.schema.dropTable('container');
		}
	});
};
