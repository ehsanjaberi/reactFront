import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import AuthContext from '../../../Context/AuthContext';

function Header(props) {
	let context = useContext(AuthContext);
	let location = useLocation();
	return  !location.pathname.includes('admin')  ? (
		<nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					سامانه صحت کد ملی
				</Link>
				<button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
					<FontAwesomeIcon className="navbar-toggler-icon" icon={faBars} />
				</button>
				<div className="navbar-collapse collapse" id="navbar">
					<ul className="navbar-nav w-100">
						<li className="nav-item">
							<Link to="/" className="nav-link">
								خانه
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-link">
								درباره ما
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-link">
								تماس با ما
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/admin" className="nav-link">
								پنل مدیریت
							</Link>
						</li>
					</ul>
					{
						context.authenticated
						? <button className="btn btn-sm btn-danger">خروج</button>
						: (
							<Link to="/admin" className="btn btn-sm btn-success">
								ورود
							</Link>
						)
					}
				</div>
			</div>
		</nav>
	
	) : <></>
	
}

export default Header;
