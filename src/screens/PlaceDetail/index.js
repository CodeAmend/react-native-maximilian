// Modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePlace } from "../../store/actions";
// React Native Modules
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
// 3rd Party
import Icon from 'react-native-vector-icons/Ionicons';



class PlaceDetail extends Component {
  handlePlaceDeleted = () => {
    const key = this.props.selectedPlace.key;
    this.props.onPlaceDeleted(key);
    this.props.navigator.pop({
      animated: true
    });
  };
  render() {
    return (
      <View>
        <View>
          <Text style={styles.placeTitle}>{this.props.selectedPlace.title}</Text>
          <Image style={styles.placeImage} source={this.props.selectedPlace.image} />
        </View>
        <View>
          <TouchableOpacity onPress={this.handlePlaceDeleted} style={{ alignItems: "center"}} >
            <Icon size={30} color="red" name="ios-trash" />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  placeImage: {
    margin: 10,
    width: 395,
    height: 300,
  },
  placeTitle: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28,
    marginBottom: -10
  },
});

const mapDispatchToProps = dispatch => ({
  onPlaceDeleted: key => dispatch(deletePlace(key))
});

export default connect(null, mapDispatchToProps)(PlaceDetail);
