import React from 'react';
const Contact = () => {
	return (
		<div className="container">
			<div className="breadcrumb border-bottom pb-1">
				<small>تماس با ما</small>
			</div>
			<div className="row justify-content-center">
				<form className="col-sm-12 col-md-8 col-lg-6">
					<div className="row">
						<div className="col-sm-12 col-md-6">
							<div className="mb-3">
								<label className="form-label">نام</label>
								<input type="text" className="form-control form-control-sm" placeholder="نام" />
							</div>
						</div>
						<div className="col-sm-12 col-md-6">
							<div className="mb-3">
								<label className="form-label">ایمیل</label>
								<input type="text" className="form-control form-control-sm" placeholder="ایمیل" />
							</div>
						</div>
					</div>
					<div className="col-sm-12">
						<div className="mb-3">
							<label className="form-label">موضوع</label>
							<input type="text" className="form-control form-control-sm" placeholder="موضوع" />
						</div>
					</div>
                    <div className="col-sm-12">
						<div className="mb-3">
							<label className="form-label">متن</label>
							<textarea cols="30" rows="10" type="text" className="form-control form-control-sm"></textarea>
						</div>
					</div>
                    <div className="col-sm-12 text-end">
						<div className="mb-3">
                            <small className="text-danger me-2">بزودی</small>
							<button className="btn btn-sm btn-success" disabled>ارسال</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Contact;
