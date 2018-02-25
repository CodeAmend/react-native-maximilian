import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

const store = configureStore();

import AuthScreen from './src/screens/Auth';
import SharePlaceScreen from './src/screens/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace';

Navigation.registerComponent('awesome-places.AuthScreen',
  () => AuthScreen,
  store,
  Provider
);
Navigation.registerComponent('awesome-places.SharePlaceScreen',
  () => SharePlaceScreen,
  store,
  Provider
);
Navigation.registerComponent('awesome-places.FindPlaceScreen',
  () => FindPlaceScreen,
  store,
  Provider
);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'awesome-places.AuthScreen',
    title: "Login"
  }
});