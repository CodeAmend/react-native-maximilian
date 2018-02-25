import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const DefaultTextInput = props =>
  <TextInput
    style={styles.input}
    underlineColorAndroid="transparent"
    {...props}
  />

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderColor: "#eee",
    borderWidth: 1,
  }
});

export default DefaultTextInput;