import { React, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navigation from '../src/components/navigation/Navigation';
import Home from '../src/components/home/Home';
import SignUp from '../src/components/signup/SignUp';
import SignIn from '../src/components/signin/SignIn';
import Doctors from '../src/components/doctors/Doctors';
import * as ReactBootstrap from 'react-bootstrap';
import './App.css';

function App() {
	const [loggedIn, setLoggedIn] = useState(
		localStorage.getItem('token') ? true : false
	);
	const handleLogout = () => {
		localStorage.clear();
		setLoggedIn(false);
	};
	return (
		<div className='App'>
			<ReactBootstrap.Navbar bg='light' expand='lg'>
				<ReactBootstrap.Navbar.Brand href='#home'>
					2nd Opinion
				</ReactBootstrap.Navbar.Brand>
				<ReactBootstrap.Navbar.Toggle aria-controls='basic-navbar-nav' />
				<ReactBootstrap.Navbar.Collapse id='basic-navbar-nav'>
					<ReactBootstrap.Nav className='mr-auto'>
						<ReactBootstrap.Nav.Link href='#home'>Home</ReactBootstrap.Nav.Link>
						<ReactBootstrap.Nav.Link href='#signup'>
							Sign up
						</ReactBootstrap.Nav.Link>
						<ReactBootstrap.Nav.Link href='#SignIn'>
							Sign in
						</ReactBootstrap.Nav.Link>
						<ReactBootstrap.Nav.Link href='#doctors'>
							Doctors
						</ReactBootstrap.Nav.Link>
					</ReactBootstrap.Nav>
				</ReactBootstrap.Navbar.Collapse>
			</ReactBootstrap.Navbar>

			<Navigation
				loggedIn={loggedIn}
				setLoggedIn={setLoggedIn}
				handleLogout={handleLogout}
			/>
			<main>
				<Route path='/home' component={Home} />
				<Route path='/' exact render={() => <Redirect to='/home' />} />
				<Route path='/signup' component={SignUp} />
				<Route
					path='/signin'
					exact
					render={() => (
						<SignIn loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
					)}
				/>
				<Route
					path='/doctors'
					exact
					render={() => {
						return <Doctors loggedIn={loggedIn} />;
					}}
				/>
			</main>
		</div>
	);
}

export default App;
