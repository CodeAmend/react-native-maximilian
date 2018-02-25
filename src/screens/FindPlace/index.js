import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View } from 'react-native';

import PlaceList from '../../components/PlaceList';

class FindPlace extends Component {
  handleSelectedPlace = key => {
    const selectedPlace = this.props.places.find(place => place.key === key);
    this.props.navigator.push({
      screen: "awesome-places.PlaceDetailScreen",
      title: "Place Details",
      passProps: { selectedPlace }
    })

  };

  render() {
    return (
      <View>
        <PlaceList onSelectedPlace={this.handleSelectedPlace} places={this.props.places}/>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  places: state.places.places
});

export default connect(mapStateToProps)(FindPlace);