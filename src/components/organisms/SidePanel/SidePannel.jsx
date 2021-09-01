import React from 'react';
import CloseIcon from '@material-ui/icons/Close';

const SidePannel = (props) => {
    const {isSidePanelOpened, toggleSidePannel, classes, isForgotPassword, setIsForgotPassword} = props;

    return (
        <div style={isSidePanelOpened ? {right: '0'} : {}} className={classes.SidePanel}>
            <div onClick={toggleSidePannel} className={classes.ClosePanel}>
                <div><CloseIcon /></div>
            </div>
            <div className={classes.LoginPanel}>
                <h4>{
                    !isForgotPassword ? 'LOGIN TO YOUR ACCOUNT' : 'FORGOT PASSWORD?'
                }</h4>
                <div>
                    <label htmlFor='login-username'>USERNAME</label>
                    <input type="text" id="login-username" />
                </div>
                {!isForgotPassword &&
                    <div>
                        <label htmlFor='login-password'>PASSWORD</label>
                        <input type="password" id="login-password" />
                    </div>
                }
                <div className={classes.LoginSubmit}>
                    <span>{
                        !isForgotPassword ? 'LOGIN' : 'RESET'
                    }</span>
                </div>
                <a href='#' onClick={() => setIsForgotPassword(!isForgotPassword)}>{
                    !isForgotPassword ? 'Forgot Password?' : 'Return to login'
                }</a>
            </div>
        </div>
    );
};

export default SidePannel;