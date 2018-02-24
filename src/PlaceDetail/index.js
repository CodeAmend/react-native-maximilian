// Modules
import React from 'react';
// React Native Modules
import { StyleSheet, View, Button, Image, Text, Modal, TouchableOpacity } from 'react-native';
// 3rd Party
import Icon from 'react-native-vector-icons/Ionicons';

const PlaceDetail = props => {
  let { selectedPlace } = props;
  if (!selectedPlace) {
    selectedPlace = { title: "", image: {} }
  }
  return (
    <Modal
      visible={props.selectedPlace !== null}
      animationType="slide"
      onRequestClose={props.onPlaceDeleted}
    >
      <Text style={styles.placeTitle}>{selectedPlace.title}</Text>
      <Image style={styles.placeImage} source={selectedPlace.image} />
      <View>
        <TouchableOpacity onPress={props.onPlaceDeleted} style={{ alignItems: "center"}} >
          <Icon size={30} color="red" name="ios-trash" />
        </TouchableOpacity>
        {/*<Button title="Delete" color="red" onPress={props.onPlaceDeleted} />*/}
        <Button title="Close" onPress={props.onPlaceClosed} />
      </View>
    </Modal>
  )
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

export default PlaceDetail;
