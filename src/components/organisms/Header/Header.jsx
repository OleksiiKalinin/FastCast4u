import React from 'react';
import classes from './Header.module.css';
import logo from '../../../assets/images/logo.png';
import LockIcon from '@material-ui/icons/Lock';

const Header = ({toggleSidePannel}) => {
    return (
        <header className={classes.Header}>
            <div className={classes.Logo}>
                <img src={logo} alt='logo'/>
            </div>
            <div className={classes.Login} onClick={toggleSidePannel}>
                <LockIcon fontSize='small' htmlColor='#4772d9'/>
                <span><color>Login</color></span>
            </div>
        </header>
    );
};

export default Header;