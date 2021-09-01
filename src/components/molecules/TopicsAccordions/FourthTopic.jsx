import React from 'react';
import CustomizedAccordions from '../../atoms/Accordion/Accordion';

const FourthTopic = () => {
    return (
        <CustomizedAccordions>
            <div>
                <p>Are there any limits?</p>
                <div>
                    <p>Yes, the machines for free radio servers are shared. The limits guarantee machine stability and prevent outages.</p>
                    <br/>
                    <p>After a grace period of 3 days, you need to keep your audience above 3 listeners per 3 days - if you don't generate the traffic, your account will be stopped after 3 days. Stopped servers will be terminated after 7 days of inactivity.</p>
                    <br/>
                    <p>The current limits for the free radio servers are:<br/>
                        - up to 100 listeners connected at one time,<br/>
                        - 96 kbps maximum broadcasting bitrate,<br/>
                        - 1GB AutoDJ space per Server,<br/>
                        - 1 Radio Channel per Server.</p>
                </div>
            </div>
            <div>
                <p>What if I need Unlimited?</p>
                <p>Just ask our support agents for the Unlimited Server offer if you need anything more that provided in the free radio server.</p>
            </div>
        </CustomizedAccordions>
    );
};

export default FourthTopic;