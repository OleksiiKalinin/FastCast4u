import React from 'react';
import FirstTopic from '../../molecules/TopicsAccordions/FirstTopic';
import FourthTopic from '../../molecules/TopicsAccordions/FourthTopic';
import SecondTopic from '../../molecules/TopicsAccordions/SecondTopic';
import ThirdTopic from '../../molecules/TopicsAccordions/ThirdTopic';

const SelectedTopic = ({activeTopic}) => {
    if(activeTopic === 1) return <FirstTopic />;
    else if(activeTopic === 2) return <SecondTopic />;
    else if(activeTopic === 3) return <ThirdTopic />;
    else if(activeTopic === 4) return <FourthTopic />;
}

export default SelectedTopic;