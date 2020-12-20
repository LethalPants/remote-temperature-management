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
import Footer from 'components/Footer/Footer.js';
// core components
import AdminNavbar from 'components/Navbars/AdminNavbar.js';
import { BackgroundColorContext } from 'contexts/BackgroundColorContext';
// javascript plugin used to create scrollbars on windows
import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import routes from 'routes.js';

function Admin(props) {
	const location = useLocation();

	const getRoutes = (routes) => {
		return routes.map((prop, key) => {
			if (prop.layout === '/admin') {
				return (
					<Route
						path={prop.layout + prop.path}
						component={prop.component}
						key={key}
					/>
				);
			} else {
				return null;
			}
		});
	};

	return (
		<BackgroundColorContext.Consumer>
			{({ color, changeColor }) => (
				<React.Fragment>
					<div className='wrapper'>
						<div className='main-panel' data={color}>
							<AdminNavbar brandText={'Remote Temperature Management'} />
							<Switch>
								{getRoutes(routes)}
								<Redirect from='*' to='/admin/dashboard' />
							</Switch>
						</div>
					</div>
				</React.Fragment>
			)}
		</BackgroundColorContext.Consumer>
	);
}

export default Admin;
