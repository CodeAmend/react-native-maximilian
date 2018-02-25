import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';

import DefaultTextInput from '../../components/UI/DefaultTextInput';
import MainText from '../../components/UI/MainText';
import HeadingText from '../../components/UI/HeadingText';

const AuthScreen = () => {
  const handleLogin = () => {
    startMainTabs();
  };

  return (
    <View style={styles.container}>
      <MainText>
        <HeadingText>Please Log in</HeadingText>
      </MainText>
      <View style={styles.inputContainer}>
        <DefaultTextInput placeholder="You're Email Address"/>
        <DefaultTextInput placeholder="Password"/>
        <DefaultTextInput placeholder="Confirm Password"/>
      </View>
      <Button title="Login" onPress={handleLogin}/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    width: "80%",
  }
});

export default AuthScreen;