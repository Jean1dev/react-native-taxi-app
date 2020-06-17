import React from 'react';
import { userContext } from '../../context/user/UserContext';
import Driver from '../Driver';
import Passenger from '../Passenger';

const MapHandler: React.FC = () => {
    const { user } = userContext()

    if (user.isDriver) {
        return <Driver/>
    }

  return <Passenger />;
}

export default MapHandler;