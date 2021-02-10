import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BurgerLinks from './BurgerLinks'


const Navigation = ({ loggedIn, handleLogout }) => {
    const [menuDisplay, setMenuDisplay] = useState(false);
	const menuClick = () => {
		setMenuDisplay(!menuDisplay);
	};
	return (
		<div>
			<div>Second Opinion</div>
			<div>
				<div>
					<Link to='/home'>Home</Link>
				</div>
				<div>
					<Link to='/doctors'>Doctors</Link>
				</div>
				<div>
					{!loggedIn && <Link to='/signin'>Login</Link>}{' '}
					{loggedIn && <button onClick={handleLogout}>Logout</button>}
				</div>
				<div className='hamburgerNavigation' onClick={menuClick}>
					<span className='burger'></span>
					<span className='burger'></span>
					<span className='burger'></span>
				</div>
			</div>
			<div>{menuDisplay ? <BurgerLinks /> : null}</div>
		</div>
	);
};

export default Navigation;