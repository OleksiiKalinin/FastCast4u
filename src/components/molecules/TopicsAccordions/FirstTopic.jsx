import React from 'react';
import CustomizedAccordions from '../../atoms/Accordion/Accordion';

const FirstTopic = () => {
    return (
        <CustomizedAccordions>
            <div>
                <p>What is FreeSHOUTcast?</p>
                <p>FreeSHOUTcast provides Free Online Radio Servers. You can get your own server and start your internet radio station for free!</p>
            </div>
            <div>
                <p>Is the service really free?</p>
                <p>Yes, FreeSHOUTcast completely free, this is not a demo or trial.</p>
            </div>
            <div>
                <p>What's the trick?</p>
                <p>There is no trick, we created this service for online radio enthusiasts. You can try streaming online, share favorite music or become a radio DJ for free.</p>
            </div>
        </CustomizedAccordions>
    );
};

export default FirstTopic;