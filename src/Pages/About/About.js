import React from 'react';
import img from './../../assets/images/placeholder.jpg'
import './About.sass'
function About(props) {
    return (
        <div className="container">
            <div className="breadcrumb border-bottom pb-1">
				<small>درباره ما</small>
			</div>
            <div className="row">
                <div className="col-sm-12 col-md-6">
                <p>اصلاعات ما</p>
                <p className="text">
                ما با مکاری جمع بزرگی از متخصصان هر رشته، به ارائه ترجمه و ویرایش کاملا تخصصی در هر زمینه‌ی علمی اقدام نموده‌ایم. متخصصانی که در ابتدا نمونه‌های انجام‌ شده و رزومه ارائه‌ شده‌ی ایشان به صورت موشکافانه بررسی و سپس از طریق آزمون‌های عمومی و خصوصی ارزیابی شده‌اند. همچنین در طول مدت همکاری با ما از همراهی ارزیابان ارشد برخوردار بوده‌اند و مهارت و توانایی خود را ارتقا داده‌اند.                </p>    
                </div>
                <div className="col-sm-12 col-md-6">
                    <img src={img} className="w-100 rounded-3 shadow" alt="" />
                </div>
            </div>
        </div>
    );
}

export default About;