import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class PlaceInput extends Component {
  state = {
    placeName: "",
  };

  placeNameChangedHandler = placeName => {
    this.setState({ placeName });
  };

  onSubmitPlaceName = () => {
    this.props.onSubmitPlaceName(this.state.placeName);
    // this.setState({ placeName: "" });
  };

  render() {
    return (
      <View style={styles.placeInput}>
        <TextInput
          placeholder="Type your name and add..."
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          style={styles.inputText}
        />
        <Button
          title="Add"
          style={styles.inputButton}
          onPress={this.onSubmitPlaceName}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  placeInput: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  inputText: {
    width: '70%',
  },

  inputButton: {
    width: '30%',
  },

});

export default PlaceInput;
