import React from 'react'
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import color from './constants/Colors/color.js';
import Login from './Screens/Login.js';
import MainScreen from './Screens/MainScreen.js';
import SwipelistScreen from './Screens/SwipelistScreen.js';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Navigator from './Components/APIs/Navigator.js';
import { FileSystem } from 'react-native-unimodules'
import FlatListExample from './Screens/FlatListExample.js';
import Increment from './Redux/SampleScreen/Increment.js';
import { Provider } from 'react-redux';
import { store, persistor } from './Redux/Store/CombinedStore.js';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  console.log('fielsystem', FileSystem.documentDirectory);
  return (
      <Provider store={store}>
        <PersistGate loading ={null} persistor ={persistor} >
          {/* <Increment /> */}
          {/* <Navigator /> */}
          <FlatListExample />
          {/* <Login /> */}
        </PersistGate>
      </Provider>
  )
}

const styles = StyleSheet.create({});
