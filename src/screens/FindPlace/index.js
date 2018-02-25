import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View } from 'react-native';

import PlaceList from '../../PlaceList';

class FindPlace extends Component {

  render() {
    return (
      <View>
        <PlaceList places={this.props.places}/>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  places: state.places.places
});

export default connect(mapStateToProps)(FindPlace);