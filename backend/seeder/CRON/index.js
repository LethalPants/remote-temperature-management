const CronJob = require('cron').CronJob;
const knex = require('knex');
const knexConfig = require('../../knexfile');
const environment = process.env.NODE_ENV || 'development';

const connectionConfig = knexConfig[environment];
const connection = knex(connectionConfig);

let counter = [1, 1, 1, 1];

const formula = [
	(c) => -90 + (1 / 6) * c,
	(c) => -90 + (1 / 15) * c,
	(c) => -90 + (1 / 10) * c,
	(c) => -90 + (1 / 8) * c,
];

let job = new CronJob(
	'* * * * * *',
	async () => {
		const data = await connection('container').select('*');
		try {
			data.forEach(async (item, index) => {
				f = formula[index];
				let temp = f(counter[index]);
				counter[index] += 1;

				if (temp > -56.6942) {
					console.log("OKAY THERE'S A PROBLEM\t ", temp, '\t TEMP');
					const randNum = Math.random() * (90 - 80) + 80;
					counter[index] = Math.floor((-randNum + 90) * 6);
					temp = -randNum;
				}

				console.log({
					container_id: item.id,
					temperature: temp,
					created_at: new Date(Date.now()),
				});

				await connection('container_temperature').insert({
					container_id: item.id,
					temperature: temp,
					created_at: new Date(Date.now()),
				});
			});
		} catch (error) {
			console.log('ERROR', error);
		}

		console.log('INSERTED');
	},
	null,
	true,
	'America/Los_Angeles',
);
job.start();
