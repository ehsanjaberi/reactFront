import React, { useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';
import Footer from '../elements/Footer/Footer';
import Header from '../elements/Header/Header';
import RouterOutlet from './../../Router/RouterOutlet';
import { router } from './../../Router/router';
// import routeConfig from '../../Router/routerOutlet/routes'
import './App.sass';
import AdminReducer from '../../Reducers/AdminReducer';
import Authentication from '../../Adaptor/auth';
function App() {
	let [ state, dispatch ] = useReducer(AdminReducer, {
		authenticated : Authentication.isAuth()
	});
	// console.log(Authentication.isAuth());
	return (
		<BrowserRouter>
			<AuthContext.Provider
				value={{
					authenticated : state.authenticated,
					dispatch
				}}
			>	
					<Header />
					<div className="container-fluid mt-4 mb-5">
						<RouterOutlet routeConfig={router} />
					</div>
					<Footer />
				
			</AuthContext.Provider>
		</BrowserRouter>
	);
}

export default App;
