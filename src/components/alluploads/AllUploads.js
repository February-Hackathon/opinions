import React from 'react';
import './alluploads.css'
import FileImg from './95.png'
import FooterImg from '../fileupload/Screen Shot 2021-02-10 at 12.59 1.jpg'

const AllUploads = () => {
    return (
			<div>
				<div className='body5'>
					<div className='allUploadsTitle'>Upload Your Medical History</div>
					<div className='audbContainer'>
						<div className='allUploadsDropBox'>
							<img src={FileImg} alt='fileImg' className='fileImg1' id='fileImg1'/>
							<img src={FileImg} alt='fileImg' className='fileImg2' id='fileImg2' />
							<img src={FileImg} alt='fileImg' className='fileImg3' id='fileImg3' />
						</div>
					</div>
					<button className='allUploadsNextBtn'>Next</button>
				</div>
				<img src={FooterImg} alt='footerImg' className='allUploadsFooter' />
			</div>
		);
};

export default AllUploads;