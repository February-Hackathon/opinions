import React, { useState } from 'react';

const Doctors = ({ loggedIn }) => {
	return <div style={{ display: loggedIn ? 'block' : 'none' }}>Doctors</div>;
};

export default Doctors;
