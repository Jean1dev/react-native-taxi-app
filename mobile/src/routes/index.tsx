import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import DriverOrPassenger from '../screens/driverOrPassenger';
import MapHandler from '../screens/MapHandler';
import Chat from '../screens/Chat';
import WaintingForRide from '../screens/WaintingForRide';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="chosePath" component={DriverOrPassenger} />
      <Stack.Screen name="Map" component={MapHandler} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}