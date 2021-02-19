import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import './signup.css';
import signUpImg from './signup_pic.png';

const SignUp = () => {
	const initialState = {
		username: '',
		email: '',
		password: '',
		re_password: '',
	};
	const history = useHistory();
	const [formState, setFormState] = useState(initialState);
	const handleSubmit = (event) => {
		event.preventDefault();
		Axios({
			url: 'https://storytime-drf.herokuapp.com/users/',
			method: 'POST',
			data: formState,
		}).then(() => {
			history.push('/signin');
		});
		setFormState(initialState);
	};
	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};

	return (
		<div>
			<div className='body2'>
				<div className='signupTitle'>Sign Up</div>
				<form className='form' onSubmit={handleSubmit}>
					<input
						id='username'
						onChange={handleChange}
						value={formState.username}
						placeholder='Create Username'
						className='usernameInput'
					/>

					<input
						id='email'
						onChange={handleChange}
						value={formState.email}
						placeholder='Enter Email'
						className='registrationEmailInput'
					/>

					<input
						id='password'
						onChange={handleChange}
						value={formState.password}
						placeholder='Create Password'
						className='registrationPasswordInput'
					/>

					<input
						id='re_password'
						onChange={handleChange}
						value={formState.re_password}
						placeholder='Confirm Password'
						className='re_passwordInput'
					/>
					<div className='qualification'>
						*Password must be combination of at least 8 letters and numbers
					</div>
					<button type='submit' className='registrationFormSubmit'>
						Join us &hearts;
					</button>
				</form>
			</div>
			<div id='signUp-img'>
				<img src={signUpImg} alt='signUpImg' />
			</div>
		</div>
	);
};

export default SignUp;
