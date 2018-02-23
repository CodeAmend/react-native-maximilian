// Modules
import React from 'react';
// React Native
import { StyleSheet, View } from 'react-native';
// Components
import PlaceInput from './src/PlaceInput';
import PlaceList from './src/PlaceList';
import PlaceDetail from './src/PlaceDetail';

export default class App extends React.Component {
  state = {
    places: [],
    selectedPlace: null,
  };

  addPlaceNameHandler = placeName => {
    if(placeName.trim() === "") return;
    this.setState(prevState => ({
      places: prevState.places.concat({
        title: placeName,
        image: {
          uri: "http://im-possible.info/images/articles/the-eye-beguiled/5/44.jpg"
        },
        key: Math.random()
      }),
    }));
  };

  handleSelectedPlace = key => {
    this.setState(prevState => ({
      selectedPlace: prevState.places.find(place => place.key !== key)
    }));
  };

  onPlaceClosedHandler = () => {
    this.setState({ selectedPlace: null });
  };

  onPlaceDeletedHandler = () => {
    this.setState(prevState => ({
      places: prevState.places.filter(place => place.key !== prevState.selectedPlace.key),
      selectedPlace: null,
    }))
  };
 

  render() {

    // const a = placeImage;

    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onPlaceDeleted={this.onPlaceDeletedHandler}
          onPlaceClosed={this.onPlaceClosedHandler}
        />
        <PlaceInput
          onSubmitPlaceName={this.addPlaceNameHandler}
        />
        <PlaceList
          places={this.state.places}
          onSelectedPlace={this.handleSelectedPlace}
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
