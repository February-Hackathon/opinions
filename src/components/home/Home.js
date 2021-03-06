import React from 'react';
import mainImg from './home main img.png';
import MainDoc from './imgMainDoc.png';
import imgCigna from './imgCigna.png';
import imgTestimonials from './imgTestimonials.png';
import imgHomeFooter from './imgHomeFooter.png';
import './home.css';

const Home = () => {
	return (
		<div>
			<div className='mainImg'>
				<img className='mainImg' src={mainImg} alt='main' />
			</div>
			<div className='buttonDiv'>
				<input className='homeButton1' type='button' value='Sign In'></input>
				<input className='homeButton2' type='button' value='Sign Up'></input>
			</div>
			<div className='homeBody'>
				<img className='mainDoc' src={MainDoc} alt='MainDoc' />

				<h1>What we offer</h1>
				<h2>We care about your privacy (HIPAA Security)</h2>
				<p>
					All the information you share with us will remain completely
					confidential
				</p>
				<h2>Fast access to international specialists </h2>
				<p>
					Thanks to our partnership with Cigna you can have access to
					specialists in different countries
				</p>
				<img className='imgCigna' src={imgCigna} alt='MainDoc' />
				<h2>Easy medical history sharing</h2>
				<p>Upload your documents and send them to our staff to be reviewed </p>
				<h2>Psychological Support</h2>
				<p>
					We are here for you and understand that you are going through a
					stressful time
				</p>
				<p>
					Talk to one of our therapists while you wait for your second opinion
				</p>
				<h1>Testimonials</h1>
				<div className='testimonials'>
					<div>
						<img
							className='imgTestimonials'
							src={imgTestimonials}
							alt='Patient'
						/>
					</div>
					<h3>
						“The specialist was a perfect fit for me! Very compassionate and
						thorough in his explanations. She took extra time to assure I went
						away more confident in a plan ”
					</h3>
				</div>
				<div className='footer'>
					<div className='footerText'>
						<h4>Contact</h4>
						<h3>
							1216 2nd Street Southwest, <br />
							Rochester, MN 55902 <br />
							Phone: +1(507)255-5123
							<br />
							Email: info@2ndopinion.com
						</h3>
					</div>
					<div className='footerImg'>
						<img className='imgHomeFooter' src={imgHomeFooter} alt='footer' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
