import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const DefaultButton = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={[styles.button, { backgroundColor: props.color }, props.style]}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    borderColor: "#000",
    borderWidth: 1,
  },
  buttonText: {
    fontWeight: "bold"
  }
});

export default DefaultButton;