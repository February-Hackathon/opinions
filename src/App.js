import { React, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navigation from '../src/components/navigation/Navigation';
import Home from '../src/components/home/Home';
import SignUp from '../src/components/signup/SignUp';
import SignIn from '../src/components/signin/SignIn';
import Doctors from '../src/components/doctors/Doctors';
import { Navbar, Nav } from 'react-bootstrap';
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
			<Navbar bg='light' expand='md'>
				<Navbar.Brand href='#home'>2nd Opinion</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link href='#home'>Home</Nav.Link>
						<Nav.Link href='#signup'>Sign up</Nav.Link>
						<Nav.Link href='#SignIn'>Sign in</Nav.Link>
						<Nav.Link href='#doctors'>Doctors</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>

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
