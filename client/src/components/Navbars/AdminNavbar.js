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
// nodejs library that concatenates classes
import classNames from 'classnames';
import React from 'react';
// reactstrap components
import { Container, Navbar, NavbarBrand } from 'reactstrap';

function AdminNavbar(props) {
	const [color] = React.useState('navbar-transparent');

	return (
		<>
			<Navbar className={classNames('navbar-absolute mt-2', color)} expand='lg'>
				<Container fluid>
					<div className='navbar-wrapper '>
						<NavbarBrand href='#pablo' onClick={(e) => e.preventDefault()}>
							{props.brandText}
						</NavbarBrand>
					</div>
				</Container>
			</Navbar>
		</>
	);
}

export default AdminNavbar;
