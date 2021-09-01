import React from 'react';
import RegistrationPanelRightForm from '../../atoms/RegistrationPanel/RegistrationPanelRightForm';
import RegistrationPanelRightTitle from '../../atoms/RegistrationPanel/RegistrationPanelRightTitle';

const RegistrationPanelRight = ({classes}) => {
    return (
        <div className={classes.RightSide}>
            <div className={classes.RightSidePanel}>
                <RegistrationPanelRightTitle classes={classes} />
                <RegistrationPanelRightForm classes={classes} />
            </div>
        </div>
    );
};

export default RegistrationPanelRight;