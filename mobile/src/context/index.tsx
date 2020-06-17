import React from 'react';
import { UserProvider } from './user/UserContext';

const AppProvider: React.FC = ({ children }) => {
  return (
      <UserProvider>
          { children }
      </UserProvider>
  )
}

export default AppProvider;