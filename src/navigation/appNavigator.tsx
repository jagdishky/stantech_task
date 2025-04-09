import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import Contacts from '../screens/contacts';
import { SCREEN_CONTACTS } from '../utility/constants';
import { navigationRef } from './navigationService';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={SCREEN_CONTACTS}
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name={SCREEN_CONTACTS} component={Contacts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
