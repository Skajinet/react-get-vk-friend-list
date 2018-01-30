import React from 'react';
import CarsList from '../containers/cars-list';
import Details from '../containers/details';
import Friendlist from '../containers/friend-list';

const WebPage = () => (
    <div>
        <h2>Cars:</h2>
        <CarsList />
        <hr/>
        <h3>Details:</h3>
        <Details />
        <Friendlist />
    </div>
);
export default WebPage;