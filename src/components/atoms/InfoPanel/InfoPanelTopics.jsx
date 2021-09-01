import React from 'react';

const InfoPanelTopics = (props) => {
    const {activeTopic, setActiveTopic, classes} = props;
    
    return (
        <div className={classes.InfoPanelTableTopics}>
            <div>{
                ['FreeSHOUTcast', 'AutoDJ', 'Live Stream', 'Limits'].map((topic,  i) => {
                    return (
                        <div 
                            key={i}
                            onClick={e => setActiveTopic(+e.target.getAttribute('index'))} 
                            index={`${i+1}`} 
                            className={`${classes.InfoPanelTableTopic} ${activeTopic === i+1 ? classes.ActiveTopic : ''}`}>
                                {topic}
                        </div>
                    )
                })
            }</div>
        </div>
    );
};

export default InfoPanelTopics;