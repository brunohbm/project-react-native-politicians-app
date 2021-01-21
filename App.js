import 'react-native-gesture-handler';
import * as React from 'react';
import FlashMessage from 'react-native-flash-message';

import Routes from './Routes';
import {View} from 'react-native';

const App: () => React$Node = () => {
  return (
    <View>
      <Routes />
      <FlashMessage position="top" />
    </View>
  );
};

export default App;
