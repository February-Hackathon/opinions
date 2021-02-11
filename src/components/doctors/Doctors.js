import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './doctor.css';
import doc1 from './doc1.png';
import doc2 from './doc2.png';
import doc3 from './doc3.png';
import doc4 from './doc4.png';
import doc5 from './doc5.png';



const Doctors = ({ loggedIn }) => {
<<<<<<< Updated upstream
	// return <div style={{ display: loggedIn ? 'block' : 'none' }}>Doctors</div>;
	return  <div>
				<div className='body3'>
					<div className='doctorTitle'>
						Choose Your Specialist
					</div>
					<div className='doctorImages'>
						<div id='doc1'>
							<img src={doc1} width='150px' height='150px' alt='doc1'/>
							<p>DR. LENNART
								<br/>
								Joined: 2020
								<br/>
								Chief Resident at California 
								<br/>
								Pacific Medical Center
							</p>
						</div>
						<div id='doc2'>
							<img src={doc2} width='150px' height='150px' alt='doc2'/>
							<p>DR. DEAN
								<br/>
								Joined: 2020
								<br/>
								Chief Resident at California 
								<br/>
								Pacific Medical Center
							</p>
						</div>
						<div id='doc3'>
							<img src={doc3} width='150px' height='150px' alt='doc3'/>
							<p>DR. CHAU
								<br/>
								Joined: 2020
								<br/>
								Chief Resident at California 
								<br/>
								Pacific Medical Center
							</p>
						</div>
						<div id='doc4'>
							<img src={doc4} width='150px' height='150px' alt='doc4'/>
							<p>DR. FELDMAN
								<br/>
								Joined: 2020
								<br/>
								Chief Resident at California 
								<br/>
								Pacific Medical Center
							</p>
						</div>
						<button type='submit' className='doctorSubmit'>
							Submit
						</button>
					</div>
				</div>
				<div id='doc5'>
					<img src={doc5} alt='do5'/>
				</div>
			</div>;
=======
	return <div style={{ display: loggedIn ? 'block' : 'none' }}>Doctors
	</div>;
>>>>>>> Stashed changes
};

export default Doctors;
