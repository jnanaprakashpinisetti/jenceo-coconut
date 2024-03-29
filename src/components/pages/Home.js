import React from 'react';

import Carousal from '../Carousal';
import Card from '../Card';
import Choose from '../Choose';
import HowToProcess from '../HowToProcess';
import SendMessage from '../SendMessage';
import EnquiryForm from '../EnquiryForm';

const Home = () => {
    return (
        <>
            <Carousal />
            <Card />
            <Choose />
            <HowToProcess />
            {/* <SendMessage /> */}
            <EnquiryForm />

        </>
    );
}

export default Home;
