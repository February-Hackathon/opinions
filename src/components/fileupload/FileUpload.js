import React from 'react';
import Axios from 'axios';
import { useDropzone } from 'react-dropzone';
import './FileUpload.css';
import FUImage from './Screen Shot 2021-02-10 at 12.59 1.jpg'
import ImgOne from './96.png'
import ImgTwo from './98.png'

const FileUpload = ({ loggedIn }) => {
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

	const files = acceptedFiles.map((file) => (
		<li key={file.path}>
			{file.path} - {file.size} bytes
		</li>
	));
	const handleClickSend = (event) => {
		event.preventDefault();
		const url = 'https://second-opinion-drf.herokuapp.com/pdocs/';
		const headers = { Authorization: `token ${localStorage.token}` };
		console.log(localStorage.token);
		Axios({
			url: url,
			method: 'POST',
			headers: headers,
			data: acceptedFiles,
		});
	};
	return (
		<section className='container'>
			<div className='body4'>
			<div className='uploadsTitle'>Upload Files Below</div>
			<div className='dropBoxContainer'>
				<div {...getRootProps({ className: 'dropzone' })} className='dropBox'>
					<input {...getInputProps()} />
					<img src={ImgOne} alt='imgOne' className='imgOne'/>
					<img src={ImgTwo} alt='imgTwo' className='imgTwo'/>
				</div>
			</div>
			<aside>
				<ul>{files}</ul>
			</aside>
			<button onClick={handleClickSend} className='uploadsBtn'>Upload</button><br/>
			</div>
			<img src={FUImage} alt='fileUploadBackground' className='uploadsFooter'/>
		</section>
	);
};

export default FileUpload;
