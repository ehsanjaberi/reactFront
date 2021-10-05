import React from 'react';
import img from '../../assets/images/placeholder.jpg'
import './Home.sass'
const Home = () => {
	return (
		<div className="container">
			<div className="breadcrumb border-bottom pb-1">
				<small>خانه</small>
			</div>
			<div className="row row-cols-1 row-cols-sm-3 row-cols-md-5 row-cols-xl-5 justify-content-center">
                <div className="card m-2">
                    <img src={img} className="card-img-top" alt="" />
                    <div className="card-body">
                        <p className="card-title">عنوان</p>
                        <p className="card-text">متن</p>
                    </div>
                </div>
                <div className="card m-2">
                    <img src={img} className="card-img-top" alt="" />
                    <div className="card-body">
                        <p className="card-title">عنوان</p>
                        <p className="card-text">متن</p>
                    </div>
                </div>
                <div className="card m-2">
                    <img src={img} className="card-img-top" alt="" />
                    <div className="card-body">
                        <p className="card-title">عنوان</p>
                        <p className="card-text">متن</p>
                    </div>
                </div>
                <div className="card m-2">
                    <img src={img} className="card-img-top" alt="" />
                    <div className="card-body">
                        <p className="card-title">عنوان</p>
                        <p className="card-text">متن</p>
                    </div>
                </div>
                <div className="card m-2">
                    <img src={img} className="card-img-top" alt="" />
                    <div className="card-body">
                        <p className="card-title">عنوان</p>
                        <p className="card-text">متن</p>
                    </div>
                </div>
            </div>
		</div>
	);
}

export default Home;
