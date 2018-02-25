import React from 'react';
import { View, Text, Button } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';

import DefaultTextInput from '../../components/UI/DefaultTextInput';

const AuthScreen = () => {
  const handleLogin = () => {
    startMainTabs();
  };

  return (
    <View>
      <Text>Auth Screen!</Text>
      <DefaultTextInput placeholder="You're Email Address"/>
      <DefaultTextInput placeholder="Password"/>
      <DefaultTextInput placeholder="Confirm Password"/>
      <Button title="Login" onPress={handleLogin}/>
    </View>
  )
};

export default AuthScreen;