import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.Footer}>
            <div className={classes.Copyrights}>
                <span>Copyrights © 2008-2021 All Rights Reserved by FastCast DWC-LLC</span>
                <span><a href="#">Terms of Service</a> / <a href="#">Privacy Policy</a></span>
            </div>
        </footer>
    );
};

export default Footer;