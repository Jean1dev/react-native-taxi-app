import React, { useEffect } from 'react';
import { StatusBar } from 'react-native'
import MyMap from './src/screens/Map'

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <MyMap/>
    </>
  );
}

