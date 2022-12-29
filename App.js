import Toast from 'react-native-toast-message';
import React from 'react';
import Navigator from './src/navigation/Navigator/Navigator';
import UserProvider from './contexts/UserContexts';

const App = () => {
  return (
    <UserProvider>
      <Navigator />
      <Toast />
    </UserProvider>
  );
};

export default App;
