// Modules
import React from 'react';
// React Native
import { StyleSheet, View } from 'react-native';
// Components
import PlaceInput from './src/PlaceInput';
import PlaceList from './src/PlaceList';
// Image
import placeImage from './src/assets/asus-screen.jpg';

export default class App extends React.Component {
  state = {
    places: [],
  };

  addPlaceNameHandler = placeName => {
    if(placeName.trim() === "") return;
    this.setState(prevState => ({
      places: prevState.places.concat({
        name: placeName,
        image: placeImage,
        key: Math.random()
      }),
    }));
  };

  handlePlaceRemoval = key => {
    this.setState(prevState => ({
      places: prevState.places.filter(place => place.key !== key)
    }));
  };
 

  render() {

    // const a = placeImage;

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
