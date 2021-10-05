import React, { useContext } from 'react';
import RouterOutlet from '../../Router/RouterOutlet';
import AuthContext from '../../Context/AuthContext';
// import AdminReducer from './../../Reducers/AdminReducer';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import './Admin.sass';
function Admin(props) {
	let { dispatch } = useContext(AuthContext);
	let { path } = useRouteMatch();
	let location = useLocation();
	let logout = () => {
		dispatch({ type: 'logout' });
		props.history.push('/admin/login');
	};

	return (
		<>
			{!location.pathname.includes('login') ? (
				<div className="sidebar">
					<ul>
						<li>
							<Link to={path}>داشبورد</Link>
						</li>
						<li>
							<Link to={path + '/NationalCode'}>صحت کد ملی</Link>
						</li>
						{/* {props.routeConfig.routes.map((item, index) => (
						<li key={index}>
							<Link to={path + item.path}>{item.path}</Link>
						</li>
					))} */}
						<li>
							<button className="btn btn-sm btn-danger" onClick={logout}>
								خروج
							</button>
						</li>
					</ul>
				</div>
			) : (
				''
			)}

			<div className={ `content ${location.pathname.includes('login')?'':'admin'}`}>
				<RouterOutlet routeConfig={props.routeConfig} />
			</div>
		</>
		// <>
		// 	{localStorage.getItem('user') ? (
		// 		<ul>
		// 			{props.routeConfig.routes.map((item, index) => (
		// 				<li key={index}>
		// 					<Link to={path + item.path}>{item.path}</Link>
		// 				</li>
		// 			))}
		// 			<li>
		// 				<button onClick={logout}>خروج</button>
		// 			</li>
		// 		</ul>
		// 	) : (
		// 		<></>
		// 	)}

		// 	<RouterOutlet routeConfig={props.routeConfig} />
		//  </>
	);
}

export default Admin;
