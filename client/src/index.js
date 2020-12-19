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
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'assets/css/nucleo-icons.css';
import 'assets/demo/demo.css';
import 'assets/scss/black-dashboard-react.scss';
import AdminLayout from 'layouts/Admin/Admin.js';
import RTLLayout from 'layouts/RTL/RTL.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import ThemeContextWrapper from './components/ThemeWrapper/ThemeWrapper';

const queryClient = new QueryClient();

ReactDOM.render(
	<ThemeContextWrapper>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Switch>
					<Route path='/admin' render={(props) => <AdminLayout {...props} />} />
					<Route path='/rtl' render={(props) => <RTLLayout {...props} />} />
					<Redirect from='/' to='/admin/dashboard' />
				</Switch>
			</BrowserRouter>
		</QueryClientProvider>
	</ThemeContextWrapper>,
	document.getElementById('root'),
);
