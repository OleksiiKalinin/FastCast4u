import React from 'react';
import { useState } from 'react';
import InfoPanelTopics from '../../atoms/InfoPanel/InfoPanelTopics';
import SelectedTopic from '../../atoms/InfoPanel/SelectedTopic';
import classes from './InfoPanel.module.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useRef } from 'react';

const InfoPanel = () => {
    const InfoPanelRef = useRef(null);
    const [activeTopic, setActiveTopic] = useState(1);

    const scrollDown = () => {
        window.scrollTo({top: InfoPanelRef.current.offsetTop - 60, behavior: 'smooth'});
    }

    return (
        <section ref={InfoPanelRef} className={classes.InfoPanel}>
            <div className={classes.InfoPanelInner}>
                <h2>Frequently Asked Questions:</h2>
                <div className={classes.InfoPanelTable}>
                    <InfoPanelTopics classes={classes} activeTopic={activeTopic} setActiveTopic={setActiveTopic}/>
                    <div className={classes.InfoPanelTableInfo}>
                        <SelectedTopic activeTopic={activeTopic}/>
                    </div>
                </div>
            </div>
            <div className={classes.ScrollButton} onClick={scrollDown}>
                <ExpandMoreIcon />
            </div>
        </section>
    );
};

export default InfoPanel;
