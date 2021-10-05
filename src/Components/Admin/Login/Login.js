import React, { memo, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import AuthContext from '../../../Context/AuthContext';
import auth from '../../../Adaptor/auth';
import { Link, Redirect } from 'react-router-dom';
const Login = (props) => {
	let user = localStorage.getItem('user');

	let { register, handleSubmit } = useForm();
	let [ loading, setLoading ] = useState();
	let [ message, setMessage ] = useState();
	let {  dispatch } = useContext(AuthContext);
	let submitForm = (formData) => {
		setLoading(true);
		auth.login(formData.username, formData.password)
			.then((response) => {
				dispatch({ type: 'login', payload: { inf: response } });
				props.history.push('/admin');
			})
			.catch((error) => {
				setLoading(false);
				setMessage('نام کاربری یا رمز عبور نادرست است.')
				// alert('Username Or PassWord is invalid');
			});
	};
	return (
		<>
			{user ? (
				<Redirect to="/admin" />
			) : (
				<div className="row justify-content-center align-items-center vh-100">
					<div className="col-sm-10 col-md-5 col-lg-4">
						
						<div className="rounded-3 card mt-4 shadow-sm bg-light ">
						<h2 className="text-center my-3 card-title">صفحه ورود</h2>
							<div className="card-body">
								<form onSubmit={handleSubmit(submitForm)}>
									<div className="mb-3">
										<label className="form-label">نام کاربری</label>
										<input
											type="text"
											{...register('username',{required: true})}
											className="form-control"
											placeholder="نام کاربری"
										/>
										<small className="form-text">نام کاربری:Ehsan</small>
									</div>
									<div className="mb-3">
										<label className="form-label">رمز عبور</label>
										<input
											type="text"
											{...register('password',{required: true})}
											className="form-control"
											placeholder="رمز عبور"
										/>
										<small className="form-text">رمز عبور: 1010</small>
									</div>
									<div className="mb-3 d-flex justify-content-between align-items-center">
											<Link to="/" className="text-decoration-none">
												صفحه اصلی
											</Link>
										<button type="submit" disabled={!setLoading} className="btn btn-primary">
											{
												loading
												? <div className="spinner-border spinner-border-sm" />
												: <>ورود</>
											}
										</button>
									</div>
								</form>
								<small className="text-danger">
									{message}
								</small>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default memo(Login);
