import React, { useState } from 'react';
import Axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import './signin.css';
import signInImg from './signin_pic.png';

const SignIn = ({ loggedIn, setLoggedIn }) => {
    const initialState = {
		email: '',
		password: '',
	};
	const [formState, setFormState] = useState(initialState);
	const handleSubmit = (event) => {
		event.preventDefault();
		Axios({
			url: 'https://storytime-drf.herokuapp.com/token/login/',
			method: 'POST',
			data: formState,
		}).then((res) => {
			localStorage.setItem('token', res.data.auth_token);
			setLoggedIn(true);
		});
		setFormState(initialState);
	};
	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};
	if (loggedIn) {
		return <Redirect to='/' />;
	}
	return (
		<div>
			<div className='body'>
				<div className='signinTitle'>Log In</div>
				<form onSubmit={handleSubmit}>
					<label htmlFor='email' className='emailLabel'>
						{' '}
					</label>
					<input
						id='email'
						onChange={handleChange}
						value={formState.email}
						placeholder='Email'
						className='emailInput'
					/>{' '}
					<br />
					<label htmlFor='password' className='passwordLabel'>
						{' '}
					</label>
					<input
						id='password'
						onChange={handleChange}
						value={formState.password}
						placeholder='Password'
						className='passwordInput'
					/>
					<button type='submit' className='signinSubmit'>
						Submit
					</button>
				</form>
				<div className='register'>
				<div className='registrationTitle'>Not Signed up? Register Below:</div>
				<br />
				<Link to='/signup' className='registration'>
					Sign Up
				</Link>
				</div>
			</div>
			<div id='signIn-img'>
				<img src={signInImg} alt='signInImg'/>
			</div>
		</div>
	);
};

export default SignIn;