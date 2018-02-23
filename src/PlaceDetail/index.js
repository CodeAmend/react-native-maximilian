// Modules
import React from 'react';
// React Native Modules
import { StyleSheet, View, Button, Image, Text, Modal } from 'react-native';


const PlaceDetail = props => {
  let { selectedPlace } = props;
  if (!selectedPlace) {
    selectedPlace = { title: "", image: {} }
  }
  return (
    <Modal
      visible={props.selectedPlace !== null}
      animationType="slide"
    >
      <Text style={styles.placeTitle}>{selectedPlace.title}</Text>
      <Image style={styles.placeImage} source={selectedPlace.image} />
      <View>
        <Button title="Delete" color="red" onPress={props.onPlaceDeleted} />
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
