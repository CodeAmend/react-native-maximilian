import React from 'react';
import { View, Text, Button } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';

const AuthScreen = () => {
  const handleLogin = () => {
    startMainTabs();
  };

  return (
    <View>
      <Text>Auth Screen!</Text>
      <Button title="Login" onPress={handleLogin}/>
    </View>
  )
};

export default AuthScreen;