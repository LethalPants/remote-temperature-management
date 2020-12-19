const express = require('express');
const app = express();
const knex = require('./db');
const { Model } = require('objection');
Model.knex(knex);

class Container extends Model {
	static get tableName() {
		return 'container';
	}

	static get relationMappings() {
		return {
			temps: {
				relation: Model.HasManyRelation,
				modelClass: ContainerTemperature,
				join: {
					from: 'container.id',
					to: 'container_temperature.container_id',
				},
			},
		};
	}
}
class ContainerTemperature extends Model {
	static get tableName() {
		return 'container_temperature';
	}

	static get relationMappings() {
		return {
			temps: {
				relation: Model.BelongsToOneRelation,
				modelClass: Container,
				join: {
					from: 'container.id',
					to: 'container_temperature.container_id',
				},
			},
		};
	}
}

app.get('/api/v1/temperature', async (req, res) => {
	const data = await Container.query().withGraphFetched('temps');

	res.json(data);
});

app.listen(5000, () => console.log('Listening on 5000'));
