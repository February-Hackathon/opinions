import React from 'react';
import Axios from 'axios';
import { useDropzone } from 'react-dropzone';
import './fileupload.css';

const FileUpload = ({ loggedIn }) => {
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

	const files = acceptedFiles.map((file) => (
		<li key={file.path}>
			{file.path} - {file.size} bytes
		</li>
	));
	const handleClick = (event) => {
		event.preventDefault();
		const url = 'http://localhost:8000/pdocs/';
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
			<div {...getRootProps({ className: 'dropzone' })}>
				<input {...getInputProps()} />
				<p>Drag 'n' drop some files here, or click to select files</p>
			</div>
			<aside>
				<h4>Files</h4>
				<ul>{files}</ul>
			</aside>
			<button onClick={handleClick}>Send</button>
		</section>
	);
};

export default FileUpload;
