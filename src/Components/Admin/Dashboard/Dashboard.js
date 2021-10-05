import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.sass'
function Dashboard() {
	return (
		<div>
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb border-bottom pb-1">
					<li className="breadcrumb-item">
						<Link to="/admin" className="link-dark text-decoration-none">داشبورد</Link>
					</li>
				</ol>
			</nav>
            <div className="d-flex flex-wrap justify-content-around">
                <div className="dashboard-card bg-success text-white">
                    <FontAwesomeIcon className="icon" icon={faUsers}/>
                    <div className="body">
                        <p>عنوان</p>
                        <span>12</span>
                    </div>
                </div>
                <div className="dashboard-card bg-danger text-white">
                    <FontAwesomeIcon className="icon" icon={faUsers}/>
                    <div className="body">
                        <p>عنوان</p>
                        <span>12</span>
                    </div>
                </div>
                <div className="dashboard-card bg-secondary  text-white">
                    <FontAwesomeIcon className="icon" icon={faUsers}/>
                    <div className="body">
                        <p>عنوان</p>
                        <span>12</span>
                    </div>
                </div>
                <div className="dashboard-card bg-primary text-white">
                    <FontAwesomeIcon className="icon" icon={faUsers}/>
                    <div className="body">
                        <p>عنوان</p>
                        <span>12</span>
                    </div>
                </div>
            </div>
		</div>
	);
}

export default Dashboard;
