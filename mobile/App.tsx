import React, { useEffect } from 'react';
import { StatusBar } from 'react-native'
import Chat from './src/screens/Chat';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Chat/>
    </>
  );
}

