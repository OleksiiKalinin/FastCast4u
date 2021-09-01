import React from 'react';
import RegistrationPanelLeft from '../../molecules/RegistrationPanel/RegistrationPanelLeft';
import RegistrationPanelRight from '../../molecules/RegistrationPanel/RegistrationPanelRight';
import classes from './RegistrationPanel.module.css';

const RegistrationPanel = () => {
    return (
        <section className={classes.RegistrationPanel}>
            <RegistrationPanelLeft classes={classes}/>
            <RegistrationPanelRight classes={classes}/>
        </section>
    );
};

export default RegistrationPanel;