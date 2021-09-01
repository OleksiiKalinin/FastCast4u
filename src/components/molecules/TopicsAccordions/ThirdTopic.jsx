import React from 'react';
import CustomizedAccordions from '../../atoms/Accordion/Accordion';
import classes from './styles.module.css';

const ThirdTopic = () => {
    return (
        <CustomizedAccordions>
            <div>
                <p>How to set up a live stream? (Centova Cast Control Panel and Mixxx)</p>
                <div>
                    <big>To learn how to add tracks to playlists in AutoDJ see the tutorial below:</big>
                    <br/>
                    <br/>
                    <p>1. Select MEDIA hyperlink in the panel on the left side of Centova Control Panel, under the AutoDJ section</p>
                    <br/>
                    <img className={classes.TopicImg} src="https://img.fastcast4u.com/tutorials/centovacast/media.jpg" alt="blabla" />
                </div>
            </div>
            <div>
                <p>How to set up a live stream? (Centova Cast Control Panel and BUTT)</p>
                <div>
                    <big>To learn how to add tracks to playlists in AutoDJ see the tutorial below:</big>
                    <br/>
                    <br/>
                    <p>1. Select MEDIA hyperlink in the panel on the left side of Centova Control Panel, under the AutoDJ section</p>
                    <br/>
                    <img className={classes.TopicImg} src="https://img.fastcast4u.com/tutorials/centovacast/media.jpg" alt="blabla" />
                </div>
            </div>
            <div>
                <p>How to set up a live stream? (Centova Cast Control Panel and Winamp)</p>
                <div>
                    <big>To learn how to add tracks to playlists in AutoDJ see the tutorial below:</big>
                    <br/>
                    <br/>
                    <p>1. Select MEDIA hyperlink in the panel on the left side of Centova Control Panel, under the AutoDJ section</p>
                    <br/>
                    <img className={classes.TopicImg} src="https://img.fastcast4u.com/tutorials/centovacast/media.jpg" alt="blabla" />
                </div>
            </div>
            <div>
                <p>Recommended free broadcasting software</p>
                <div>
                    <big>To learn how to add tracks to playlists in AutoDJ see the tutorial below:</big>
                    <br/>
                    <br/>
                    <p>1. Select MEDIA hyperlink in the panel on the left side of Centova Control Panel, under the AutoDJ section</p>
                    <br/>
                    <img className={classes.TopicImg} src="https://img.fastcast4u.com/tutorials/centovacast/media.jpg" alt="blabla" />
                </div>
            </div>
        </CustomizedAccordions>
    );
};

export default ThirdTopic;