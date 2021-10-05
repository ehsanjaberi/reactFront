import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.sass'
function Footer(props) {
    
	let location = useLocation();
	return  !location.pathname.includes('admin')  ? (
        <div className="footer">
            <div className="container h-100 d-flex align-items-center justify-content-center">
                <small className="">تمامی حقوق محفوظ است</small>
            </div>
        </div>
    ):<></>
    
}

export default Footer;