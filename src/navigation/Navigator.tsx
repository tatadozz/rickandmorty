import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './Routes';
import LocationsScreen from '../screens/LocationsScreen';
import CharactersScreen from '../screens/CharactersScreen';
import EpisodesScreen from '../screens/EpisodesScreen';
import MainScreen from '../screens/MainScreen';

const Stack = createNativeStackNavigator();

const Navigators = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
        <Stack.Screen name={Routes.MAIN_SCREEN} component={MainScreen} />
         <Stack.Screen name={Routes.CHARACTERS_SCREEN} component={CharactersScreen} />
         {/*<Stack.Screen name={Routes.LOCATIONS_SCREEN} component={LocationsScreen} />
        <Stack.Screen name={Routes.EPISODES_SCREEN} component={EpisodesScreen} />  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
