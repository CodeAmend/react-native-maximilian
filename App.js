// Modules
import React from 'react';
// React Native
import { StyleSheet, View } from 'react-native';
// Components
import PlaceInput from './src/PlaceInput';
import PlaceList from './src/PlaceList';

export default class App extends React.Component {
  state = {
    places: [],
  };

  addPlaceNameHandler = placeName => {
    if(placeName.trim() === "") return;
    this.setState(prevState => ({
      places: prevState.places.concat(placeName),
    }));
  };

  handlePlaceRemoval = index => {
    this.setState(prevState => ({
      places: prevState.places.filter((_, i) => index !== i)
    }));
  };
 

  render() {

    return (
      <View style={styles.container}>
        <PlaceInput
          onSubmitPlaceName={this.addPlaceNameHandler}
        />
        <PlaceList
          places={this.state.places}
          onSubmitRemoval={this.handlePlaceRemoval}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
