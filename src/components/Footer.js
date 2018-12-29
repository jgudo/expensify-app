import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => (
    <div className="footer">
        <div className="content-container">
            <Link to="/privacypolicy" className="footer__link">
                Privacy Policy
            </Link>
        </div>
    </div>
);

export default Footer;
