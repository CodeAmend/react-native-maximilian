// Modules
import React from 'react';
import { connect } from 'react-redux';
// React Native
import { StyleSheet, View } from 'react-native';
// Components
import PlaceInput from './src/PlaceInput';
import PlaceList from './src/PlaceList';
import PlaceDetail from './src/PlaceDetail';
import { addPlace, deletePlace, selectPlace, deselectPlace } from "./src/store/actions";

class App extends React.Component {
  state = {
    places: [],
    selectedPlace: null,
  };

  addPlaceNameHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  handleSelectedPlace = key => {
    this.props.onSelectPlace(key);
  };

  onPlaceClosedHandler = () => {
    this.props.onDeselectPlace();
  };

  onPlaceDeletedHandler = () => {
    this.props.onDeletePlace();
  };
 

  render() {

    // const a = placeImage;

    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onPlaceDeleted={this.onPlaceDeletedHandler}
          onPlaceClosed={this.onPlaceClosedHandler}
        />
        <PlaceInput
          onSubmitPlaceName={this.addPlaceNameHandler}
        />
        <PlaceList
          places={this.props.places}
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

const mapStateToProps = state => ({
  places: state.places.places,
  selectedPlace: state.places.selectedPlace,
});

const mapDispatchToProps = dispatch => ({
  onAddPlace: (name) => dispatch(addPlace(name)),
  onDeletePlace: () => dispatch(deletePlace()),
  onSelectPlace: (key) => dispatch(selectPlace(key)),
  onDeselectPlace: () => dispatch(deselectPlace()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
