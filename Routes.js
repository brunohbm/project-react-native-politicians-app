import * as React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/containers/home';
import BlocosScreen from './src/containers/blocos';
import colors from './src/values/colors';
import {View} from 'react-native';

const Stack = createStackNavigator();
const navTheme = DefaultTheme;
navTheme.colors.background = colors.whiteColor;

const screenDefaultOptions = {
  headerShown: false,
};

const Routes = () => {
  return (
    <View>
      <NavigationContainer theme={navTheme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={screenDefaultOptions}
          />
          <Stack.Screen
            name="Blocos"
            component={BlocosScreen}
            options={screenDefaultOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Routes;
