cube(`Container`, {
	sql: `SELECT * FROM public.container`,

	joins: {
		ContainerTemperature: {
			relationship: `hasMany`,
			sql: `${CUBE}.id = ${ContainerTemperature}.container_id`,
		},
	},

	measures: {
		count: {
			type: `count`,
			drillMembers: [id, name],
		},
	},

	dimensions: {
		id: {
			sql: `id`,
			type: `number`,
			primaryKey: true,
		},

		name: {
			sql: `name`,
			type: `string`,
		},
	},
});
