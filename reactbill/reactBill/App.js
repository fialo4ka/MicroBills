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
import About from './src/About';
import Edit from './src/Edit';
import Settings from './src/AppSettings';


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
        <Stack.Screen 
          name="Edit"
          component={Edit}
          options={{
            header: () => <HeaderElement headerDisplay="Edit"/>
          }}
        /> 
        <Stack.Screen 
          name="Settings"
          component={Settings}
          options={{
            header: () => <HeaderElement headerDisplay="Settings"/>
          }}
        /> 
        <Stack.Screen 
          name="About"
          component={About}
          options={{
            header: () => <HeaderElement headerDisplay="About"/>
          }}
        />        
      </Stack.Navigator>
      <FooterElement />
    </NavigationContainer>
    
  );
}

