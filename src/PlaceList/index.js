// Modules
import React from 'react';
// React Native
import { FlatList, StyleSheet } from 'react-native';

import ListItem from './ListItem';


const PlaceList = props =>
  <FlatList
    style={styles.places}
    data={props.places}
    renderItem={(info) => (
      <ListItem
        name={info.item.value}
        onItemPressed={() => props.onSubmitRemoval(info.item.key)}
      />
    )}
  />;


const styles = StyleSheet.create({
    places: {
        width: '100%',
        flexDirection: 'column',
    }
});

export default PlaceList;