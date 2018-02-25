import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from "../actions/types";

const initialState = {
  places: [],
  selectedPlace: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          title: action.placeName,
          image: {
            uri: "http://im-possible.info/images/articles/the-eye-beguiled/5/44.jpg"
          },
          key: Math.random()
        })
      };

    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => place.key !== action.placeKey),
      };

    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => place.key === action.placeKey)
      };

    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null,
      };

    default:
      return state;
  }
};

export default reducer;