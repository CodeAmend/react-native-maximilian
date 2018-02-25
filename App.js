import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/Auth';
import SharePlaceScreen from './src/screens/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace';

Navigation.registerComponent('awesome-places.AuthScreen', () => AuthScreen);
Navigation.registerComponent('awesome-places.SharePlaceScreen', () => SharePlaceScreen);
Navigation.registerComponent('awesome-places.FindPlaceScreen', () => FindPlaceScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'awesome-places.AuthScreen',
    title: "Login"
  }
});