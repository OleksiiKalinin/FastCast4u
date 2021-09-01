import React from 'react';
import CustomizedAccordions from '../../atoms/Accordion/Accordion';
import classes from './styles.module.css';

const SecondTopic = () => {
    return (
        <CustomizedAccordions>
            <div>
                <p>What is AutoDJ?</p>
                <p>AutoDJ lets you upload music and pre-recorded shows to your free radio server (like a free music cloud) and create playlists online so you can listen and share your stream on the Internet. Everything can be accessed via your web browser, not need to install anything on your computer.</p>
            </div>
            <div>
                <p>Playlist Setup</p>
                <p>To learn how to add tracks to a playlists in AutoDJ, watch the video</p>
            </div>
            <div>
                <p>How many tracks can I upload?</p>
                <p>You have 1GB of disc space for your tracks. If it’s full, remove old tracks to upload new.</p>
            </div>
            <div>
                <p>How to activate AutoDJ (Centova Cast Control Panel)</p>
                <div>
                    <p>When you get a new server, AutoDJ is disabled by default. To enable AutoDJ, perform the instructions described below. </p>
                    <br/>
                    <p>1. Stop your server</p>
                    <img className={classes.TopicImg} src="https://img.fastcast4u.com/content/tutorials/enable1.jpg" alt="blabla" />
                </div>
            </div>
            <div>
                <p>How to upload your audio files to AutoDJ? (Centova Cast Control Panel)</p>
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

export default SecondTopic;