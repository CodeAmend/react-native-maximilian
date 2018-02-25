import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { addPlace } from '../../store/actions';

import PlaceInput from '../../PlaceInput';


class SharePlace extends Component {

  render() {
    return (
      <View>
        <PlaceInput onSubmitPlaceName={this.props.submitPlaceName} />
      </View>
    )
  }
}

const dispatchStateToProps = dispatch => ({
  submitPlaceName: (placeName) => dispatch(addPlace(placeName))
});

export default connect(null, dispatchStateToProps)(SharePlace);