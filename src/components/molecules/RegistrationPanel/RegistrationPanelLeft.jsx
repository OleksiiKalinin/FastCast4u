import React from 'react';

const RegistrationPanelLeft = ({classes}) => {
    return (
        <div className={classes.LeftSide}>
            <div className={classes.LeftSidePanel}>
                <div className={classes.Title}><color>FREE SHOUTCAST</color> SERVER</div>
                <div className={classes.Price}><color>FREE</color></div>
                <div className={classes.Features}>
                    <div>Online Radio Control Panel</div>
                    <div>Stream Live</div>
                    <div>AutoDJ Mode</div>
                    <div>Radio Player &amp; Page</div>
                    <div>LiveChat Support</div>
                    <div><a href='#'>and more...</a></div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPanelLeft;