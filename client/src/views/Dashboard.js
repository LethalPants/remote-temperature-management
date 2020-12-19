/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import axios from 'axios';
import React from 'react';
// react plugin used to create charts
import { Line } from 'react-chartjs-2';
import { useQuery } from 'react-query';
// reactstrap components
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'reactstrap';
import createCharts from 'utils/createCharts';

function Dashboard(props) {
	const [bigChartData] = React.useState('data');
	const [charts, setCharts] = React.useState([]);
	const { status, data } = useQuery('temperatures', () =>
		axios.get('/temperature').then((res) => res.data),
	);

	React.useEffect(() => {
		if (status === 'success' && data) {
			setCharts(data.map((item, index) => createCharts(item, index)));
		}
	}, [data, status]);
	console.log(charts);

	return (
		<>
			<div className='content'>
				<Row>
					{data &&
						data.map((itm) => (
							<Col lg='3'>
								<Card className='card-chart'>
									<CardHeader>
										<h5 className='card-category'>{itm.name}</h5>
										<CardTitle tag='h3'>
											Current temprature{' '}
											{itm.temps[itm.temps.length - 1].temperature} °C
										</CardTitle>
									</CardHeader>
								</Card>
							</Col>
						))}
				</Row>
				<Row>
					{charts &&
						charts.map((chart, index) => (
							<Col lg='12' key={index}>
								<Card className='card-chart'>
									<CardHeader>
										<Row>
											<Col className='text-left' sm='6'>
												<CardTitle tag='h2'>Temperatures</CardTitle>
											</Col>
										</Row>
									</CardHeader>
									<CardBody>
										<div className='chart-area'>
											<Line
												data={chart[bigChartData]}
												options={chart.options}
											/>
										</div>
									</CardBody>
								</Card>
							</Col>
						))}
				</Row>
			</div>
		</>
	);
}

export default Dashboard;
