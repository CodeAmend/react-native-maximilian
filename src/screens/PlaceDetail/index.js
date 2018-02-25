// Modules
import React from 'react';
// React Native Modules
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
// 3rd Party
import Icon from 'react-native-vector-icons/Ionicons';

const PlaceDetail = props =>
  <View>
    <View>
      <Text style={styles.placeTitle}>{props.selectedPlace.title}</Text>
      <Image style={styles.placeImage} source={props.selectedPlace.image} />
    </View>
    <View>
      <TouchableOpacity onPress={props.onPlaceDeleted} style={{ alignItems: "center"}} >
        <Icon size={30} color="red" name="ios-trash" />
      </TouchableOpacity>
    </View>
  </View>;

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
