cube(`ContainerTemperature`, {
	sql: `SELECT * FROM public.container_temperature`,

	joins: {
		Container: {
			sql: `${CUBE}.container_id = ${Container}.id`,
			relationship: `belongsTo`,
		},
	},

	measures: {
		count: {
			type: `count`,
			drillMembers: [id, createdAt],
		},
		temperatureMeasure: {
			type: `number`,
			sql: `temperature`,
		},
	},

	dimensions: {
		id: {
			sql: `id`,
			type: `number`,
			primaryKey: true,
		},

		createdAt: {
			sql: `created_at`,
			type: `time`,
		},

		temperature: {
			sql: `temperature`,
			type: `number`,
		},
	},
});
