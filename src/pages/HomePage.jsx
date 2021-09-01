import React from 'react';
import { useState } from 'react';
import Footer from '../components/organisms/Footer/Footer';
import Header from '../components/organisms/Header/Header';
import InfoPanel from '../components/organisms/InfoPanel/InfoPanel';
import RegistrationPanel from '../components/organisms/RegistrationPanel/RegistrationPanel';
import classes from './HomePage.module.css';
import SidePannel from '../components/organisms/SidePanel/SidePannel';

const HomePage = () => {
    const [isSidePanelOpened, setIsSidePanelOpened] = useState(false);
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const toggleSidePannel = () => setIsSidePanelOpened(!isSidePanelOpened);

    return (
        <>
            <div style={isSidePanelOpened ? {transform: 'translateX(-300px)'} : {}} className={classes.HomePage}>
                <Header toggleSidePannel={toggleSidePannel} />
                <RegistrationPanel />
                <InfoPanel />
                <Footer />
                <div style={isSidePanelOpened ? {zIndex: 999} : {}} 
                    className={classes.Overlay}
                    onClick={toggleSidePannel}>
                </div>
            </div>
            <SidePannel 
                classes={classes} 
                isSidePanelOpened={isSidePanelOpened} 
                toggleSidePannel={toggleSidePannel} 
                isForgotPassword={isForgotPassword} 
                setIsForgotPassword={setIsForgotPassword} />
        </>
    );
};

export default HomePage;