import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { addPlace } from '../../store/actions';

import PlaceInput from '../../components/PlaceInput';


class SharePlace extends Component {

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        })
      }
    }
  };

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