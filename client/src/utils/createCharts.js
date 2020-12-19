import { format } from 'date-fns';

const colors = [
	{
		main: '#d048b6',
		secondary: 'rgba(225,78,202,0.1)',
	},
	{
		main: '#1f8ef1',
		secondary: 'rgba(29,140,248,0.2)',
	},
	{
		main: '#00d6b4',
		secondary: 'rgba(0,242,195,0.1)',
	},
	{
		main: '#00d65d',
		secondary: 'rgba(0,242,73,0.1)',
	},
];

const createCharts = (data, index) => ({
	data: (canvas) => {
		let ctx = canvas.getContext('2d');

		let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

		gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
		gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
		gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors

		return {
			labels: data.temps.map((item) =>
				format(new Date(item.created_at), 'k:m:s'),
			),
			datasets: [
				{
					label: data.name,
					fill: false,
					backgroundColor: gradientStroke,
					hoverBackgroundColor: gradientStroke,
					borderColor: colors[index].main,
					borderWidth: 1,
					borderDash: [],
					borderDashOffset: 0.0,
					data: data.temps.map((item) => item.temperature),
				},
			],
		};
	},
	options: {
		maintainAspectRatio: false,
		legend: {
			display: false,
		},
		tooltips: {
			backgroundColor: '#f5f5f5',
			titleFontColor: '#333',
			bodyFontColor: '#666',
			bodySpacing: 4,
			xPadding: 12,
			mode: 'nearest',
			intersect: 0,
			position: 'nearest',
		},
		responsive: true,
		scales: {
			yAxes: [
				{
					gridLines: {
						drawBorder: false,
						color: colors[index].secondary,
						zeroLineColor: 'transparent',
					},
					ticks: {
						suggestedMin: -90,
						suggestedMax: -50,
						padding: 40,
						fontColor: '#9e9e9e',
					},
				},
			],
			xAxes: [
				{
					gridLines: {
						drawBorder: false,
						color: colors[index].secondary,
						zeroLineColor: 'transparent',
					},
					ticks: {
						padding: 20,
						fontColor: '#9e9e9e',
					},
				},
			],
		},
	},
});

export default createCharts;
