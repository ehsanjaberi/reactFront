import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/NationalCode.png'
import CModal from './../../elements/Modal/Modal';
import './NationalCode.sass';
function NationalCode(props) {
	const { register, handleSubmit, setError, formState: { errors } } = useForm();
	let [ modalShow, setModalShow ] = useState(false);
	// const handleShow = () => setShow(true);
	// const handleClose = () => setShow(false);
	let ValidateCode = (formData) => {
		let dividend = parseInt(formData.nationalCode);
		let count = 2,
			sum = 0;
		let controlDigit = dividend % 10;
		dividend = parseInt(dividend / 10);
		while (dividend) {
			let quotient = parseInt(dividend / 10);
			let remainder = (dividend % 10) * count;
			sum += remainder;
			count++;
			dividend = quotient;
		}
		let remainder = sum % 11;
		if ((remainder < 2 && remainder === controlDigit) || 11 - remainder === controlDigit) {
			setModalShow(true);
			// setError('nationalCode', { type: 'manual', message: 'OkCode' });
		} else {
			 setError('nationalCode', { type: 'required', message: 'NotOkCode' });
		}
		// console.log(dividend, count, sum);
	};
	return (
		<div className="row justify-content-center">
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb border-bottom pb-1">
					<li className="breadcrumb-item">
						<Link to="/admin/NationalCode" className="link-dark text-decoration-none">صحت کد ملی</Link>
					</li>
				</ol>
			</nav>
			<div className="col-sm-12 col-md-6 col-lg-4">
				<div className="card mb-5">
					<img src={logo} className="card-img-bottom" alt="Top" />
					<div className="card-body">
						<h5 className="card-title">صحت کدملی</h5>
						<p className="card-text">کد ملی مورد نظر را وارد کنید تا از صحت ساختاری آن مطمئن شوید</p>
						<form onSubmit={handleSubmit(ValidateCode)}>
							<div className="input-group">
								<input
									type="text"
									{...register('nationalCode', { required: true, minLength: 10 })}
									className="form-control"
									placeholder="کد ملی"
								/>
								<button className="btn d-block btn-primary" type="submit">
									بررسی
								</button>
							</div>
						</form>
						{errors.nationalCode && <small className="text-danger">کدملی وارد شده معتبر نیست</small>
						// <small className="text-success">کد ملی وارد شده معتبر است</small>
						}
						{
							//  <small className="text-success">کد ملی وارد شده معتبر است</small>
							// ? <small className="text-success">کد ملی وارد شده معتبر است</small>
							// : <small className="text-danger">NotOk</small>
						}
					</div>
					<div className="card-footer d-flex align-items-center justify-content-end">
						<a href="#" className="text-decoration-none">
							<FontAwesomeIcon icon={faThumbsUp} className="text-success me-2"/>							
						</a>
						<a href="#" className="text-decoration-none">
							<FontAwesomeIcon icon={faThumbsDown} className="text-danger"/>
						</a>	
						{/* <FontAwesomeIcon icon={faThumbsDown} className="text-danger" /> */}
					</div>
				</div>
				<CModal show={modalShow} onHide={() => setModalShow(false)} />
			</div>
		</div>
	);
}

export default NationalCode;
