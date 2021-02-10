import { React, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navigation from '../src/components/navigation/Navigation';
import Home from '../src/components/home/Home';
import SignUp from '../src/components/signup/SignUp';
import SignIn from '../src/components/signin/SignIn';
import Doctors from '../src/components/doctors/Doctors';
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
