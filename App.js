import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message'
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './src/redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react'
import AuthScreens from './src/navigation/AuthScreens/AuthScreens';
import Screens from './src/navigation/Screens/Screens';
import Navigator from './src/navigation/Navigator/Navigator';

const App = () => {

  return (
    <Provider store={store} >
     <Navigator />
     <Toast />
    </Provider>
  )
}

export default App