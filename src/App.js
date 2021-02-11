import { React, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
// import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import SignUp from './components/signup/SignUp';
import SignIn from './components/signin/SignIn';
import Doctors from './components/doctors/Doctors';
import AllUploads from './components/alluploads/AllUploads';
import FileUpload from '../src/components/fileupload/FileUpload';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './imgLogo.png';
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
					<Navbar.Brand id='navText'>
						<img className='logo' src={logo} alt='logo' /> 2nd Opinion
					</Navbar.Brand>
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
						{!loggedIn && (
							<LinkContainer to='/signin' component={SignIn}>
								<Nav.Link>Log in</Nav.Link>
							</LinkContainer>
						)}{' '}
						{loggedIn && <Nav.Link onClick={handleLogout}>Log out</Nav.Link>}
						<LinkContainer to='doctors' component={Doctors}>
							<Nav.Link>Doctors</Nav.Link>
						</LinkContainer>
						<LinkContainer to='fileupload' component={FileUpload}>
							<Nav.Link>File Upload</Nav.Link>
						</LinkContainer>
						<LinkContainer to='alluploads' component={AllUploads}>
							<Nav.Link>All Upload</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Navbar>

			{/* <Navigation
				loggedIn={loggedIn}
				setLoggedIn={setLoggedIn}
				handleLogout={handleLogout}
			/> */}
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
				<Route
					path='/fileupload'
					exact
					render={() => {
						return <FileUpload loggedIn={loggedIn} />;
					}}
				/>
				<Route
					path='/alluploads'
					exact
					render={() => {
						return <AllUploads loggedIn={loggedIn} />;
					}}
				/>
			</main>
		</div>
	);
}

export default App;
