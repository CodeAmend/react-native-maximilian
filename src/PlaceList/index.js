// Modules
import React from 'react';
// React Native
import { ScrollView, View, StyleSheet } from 'react-native';

import ListItem from './ListItem';


const PlaceList = props =>
    <ScrollView style={styles.places}>
      {props.places && props.places.map((name, i) =>
        <ListItem
          key={i}
          name={name}
          onItemPressed={() => props.onSubmitRemoval(i)}
        />
      )}
    </ScrollView>

const styles = StyleSheet.create({
    places: {
        width: '100%',
        flexDirection: 'column',
    }
});

export default PlaceList;