import React from 'react';
import mainImg from './home main img.png';
import './home.css';

const Home = () => {
	return (
		<div>
			<div className='mainImg'>
				<img src={mainImg} alt='main' />
			</div>
			<div className='buttonDiv'>
				<input className='homeButtons' type='button' value='Sign In'></input>
				<input className='homeButtons' type='button' value='Sign Up'></input>
			</div>
			<div>
				<h1>What we offer</h1>
				<h2>We care about your privacy (HIPAA Security)</h2>
				<p>
					All the information you share with us will remain completely
					confidential
				</p>
				<h2>Fast access to international specialists </h2>
				<p>
					Thanks to our partership with Cigna you can have access to specialists
					in different countries
				</p>
				<h2>Easy medical history sharing</h2>
				<p>Upload your documents and send them to our staff to be reviewed </p>
				<h2>Psychological Support</h2>
				<p>
					We are here for you and understand that you are going through a
					stressful time Talk to one of our therapists while you wait for your
					second opinion
				</p>
			</div>
		</div>
	);
};

export default Home;
