/**
 * @param {import('knex')} knex
 * */
exports.up = async (knex) => {
	await knex.schema.hasTable('container_temperature').then((exists) => {
		if (!exists) {
			return knex.schema.createTable('container_temperature', (table) => {
				table.increments().notNullable();
				table
					.integer('container_id')
					.notNullable()
					.references('id')
					.inTable('container')
					.onDelete('cascade');
				table.decimal('temperature', 6, 3).notNullable();
				table.timestamp('created_at').notNullable();
			});
		}
	});
};

exports.down = async (knex) => {
	await knex.schema.hasTable('container_temperature').then((exists) => {
		if (exists) {
			return knex.schema.dropTable('container_temperature');
		}
	});
};
