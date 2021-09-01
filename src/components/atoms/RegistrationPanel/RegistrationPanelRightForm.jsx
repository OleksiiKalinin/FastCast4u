import React from 'react';

const RegistrationPanelRightForm = ({classes}) => {
    return (
        <div className={classes.RightSideForm}>
            <div className={classes.Column}>
                <label htmlFor='username'>Username</label>
                <input type="text" id="username" />
            </div>
            <div className={classes.Column}>
                <label htmlFor='email'>Email</label>
                <input type="text" id="email" />
            </div>
            <div className={classes.Column}>
                <label htmlFor='password'>Password</label>
                <input type="password" id="password" />
            </div>
            <div className={classes.Column}>
                <label htmlFor='c-password'>Comfirm Password</label>
                <input type="password" id="c-password" />
            </div>
            <div className={classes.RightSideFormAgreement}>
                <input type="checkbox" id="agreement" />
                <label htmlFor='agreement'>I Agree To The <a href='#'>Terms Of Service</a></label>
            </div>
            <div className={classes.RightSideFormSubmit}>
                <span>REGISTER NOW</span>
            </div><br/>
            <em>Free Service Provided by <a href='https://fastcast4u.com/'>Fastcast4u.com</a></em>
        </div>
    );
};

export default RegistrationPanelRightForm;