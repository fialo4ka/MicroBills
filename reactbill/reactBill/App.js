import  'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Platform, View } from 'react-native';
import { AppLoading } from 'expo';


import Mainpage from './src/Main';
import HeaderElement from './src/Header';
import FooterElement from './src/Footer';
import { navigationRef } from './src/RoadNavigation';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer
      style={{paddingTop: Platform.Os === 'android' ? 
        StatusBar.currentHeight : 0}}
      ref={navigationRef}
    >
      <Stack.Navigator 
        initialRouteName="Microbill"
        headerMode="screen"
      >
        <Stack.Screen 
          name="MainScreen"
          component={Mainpage}
          options={{
            header: () => <HeaderElement headerDisplay="Summary"/>
          }}
        />
      </Stack.Navigator>
      <FooterElement headerDisplay="home"/>
    </NavigationContainer>
    
  );
}

