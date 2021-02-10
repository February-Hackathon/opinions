import { React, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navigation from '../src/components/navigation/Navigation';
import Home from '../src/components/home/Home';
import SignUp from '../src/components/signup/SignUp';
import SignIn from '../src/components/signin/SignIn';
import Doctors from '../src/components/doctors/Doctors';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
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
				<LinkContainer to='/home' component={Home}>
					<Navbar.Brand>2nd Opinion</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<LinkContainer to='/home' component={Home}>
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/signup' component={SignUp}>
							<Nav.Link>Sign up</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/signin' component={SignIn}>
							<Nav.Link>Sign in</Nav.Link>
						</LinkContainer>
						<LinkContainer to='doctors' component={Doctors}>
							<Nav.Link>Doctors</Nav.Link>
						</LinkContainer>
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
