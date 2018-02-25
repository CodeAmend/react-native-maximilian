import React from 'react';
import { View, Button, ImageBackground, StyleSheet } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';

import DefaultTextInput from '../../components/UI/DefaultTextInput';
import MainText from '../../components/UI/MainText';
import HeadingText from '../../components/UI/HeadingText';

import backgroundImage from '../../assets/background.jpg';

const AuthScreen = () => {
  const handleLogin = () => {
    startMainTabs();
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <MainText>
          <HeadingText>Please Log in</HeadingText>
        </MainText>
        <View style={styles.inputContainer}>
          <DefaultTextInput placeholder="You're Email Address" style={styles.input}/>
          <DefaultTextInput placeholder="Password" style={styles.input}/>
          <DefaultTextInput placeholder="Confirm Password" style={styles.input}/>
        </View>
        <Button title="Login" onPress={handleLogin}/>
      </View>
    </ImageBackground>
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
  },
  input: {
    backgroundColor: "#bbb"
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
  }
});

export default AuthScreen;