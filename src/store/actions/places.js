import {ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE} from "./types";

export const addPlace = placeName => ({
  type: ADD_PLACE,
  placeName: placeName
});

export const deletePlace = key => ({
  type: DELETE_PLACE,
  placeKey: key
});

export const selectPlace = key => ({
  type: SELECT_PLACE,
  placeKey: key
});

export const deselectPlace = () => ({
  type: DESELECT_PLACE,
});