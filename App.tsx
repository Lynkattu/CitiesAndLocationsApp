import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Cities } from './src/HomeScreen/Cities';
import { AddCity } from './src/AddCityScreen/AddCity';
import { Info } from './src/InfoScreen/Info';
import { AddLocation } from './src/AddLocationScreen/AddLocation';
import { Locations } from './src/LocationsScreen/Locations';
import { IconButton } from 'react-native-paper';
import { testData } from './src/Shared/TestData';
import { CitiesProvider } from './src/Context/CitiesProvider';


// Define Navigation route parameters
type RootStackParamList = {
  Cities: undefined; // no route parameters
  AddCity: undefined // no route parameters
  Info: undefined; // no route parameters
  AddLocation: {city: string}; // route param placeholder
  Locations: {city: string}; // route param placeholder
}

// interfaces for data content of the application
export interface iLocation {
  id: string;
  name: string;
  info: string;
};

export interface iCity {
  id: string;
  name: string;
  country: string;
  locations?: iLocation[];
}


// RootStackParamList provides the type safety
const Stack = createNativeStackNavigator<RootStackParamList>();

export type CitiesScreenProps = NativeStackScreenProps<RootStackParamList, 'Cities'>
export type AddCityScreenProps = NativeStackScreenProps<RootStackParamList, 'AddCity'>
export type AddLocationScreenProps = NativeStackScreenProps<RootStackParamList, 'AddLocation'>
export type LocationsScreenProps = NativeStackScreenProps<RootStackParamList, 'Locations'>
export type InfoScreenProps = NativeStackScreenProps<RootStackParamList, 'Info'>

export type CitiesNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Cities'>
export type LocationsNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Locations'>
export type AddLocationNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AddLocation'>



function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <CitiesProvider>
        <Stack.Navigator 
          initialRouteName='Cities'
          screenOptions={{
            headerTitleAlign: "center"
          }}
          >
          <Stack.Screen 
            name="Cities" 
            component={Cities}
            options={({navigation}) => ({
              title: "Cities App",
              headerLeft: () => (
                <IconButton 
                  icon='information-outline'
                  onPress={() => navigation.navigate('Info')}
                  />
              ),
              headerRight: () => (
                <IconButton 
                  icon='plus-circle-outline'
                  onPress={() => navigation.navigate('AddCity')}
                  />
              )
            })}
            ></Stack.Screen>
          <Stack.Screen
            name="AddCity"
            component={AddCity}
            options={{
              title: 'Add city'
            }}
            ></Stack.Screen>
          <Stack.Screen 
            name="Locations" 
            component={Locations}
            options={{
              title: 'Locations of'
            }}
            ></Stack.Screen>
          <Stack.Screen 
            name="AddLocation" 
            component={AddLocation}
            options={{
              title: 'Add Location to'
            }}
            ></Stack.Screen>
          <Stack.Screen 
            name="Info" 
            component={Info}
            ></Stack.Screen>
        </Stack.Navigator>
      </CitiesProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;
