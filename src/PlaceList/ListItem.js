import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = props =>
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Image style={styles.placeImage} source={props.image} />
      <Text>{props.name}</Text>
    </View>
  </TouchableOpacity>;


const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center"
  },

  placeImage: {
    marginRight: 8,
    width: 30,
    height: 30,
  }
});

export default ListItem;
