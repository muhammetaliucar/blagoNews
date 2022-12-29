import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../pages/screens/Home/Home';
import BottomTabBar from '../../components/BottomTabBar';
import SearchScreen from '../../pages/screens/SearchScreen/SearchScreen';
import Settings from '../../pages/screens/Settings/Settings';
import SaveScreen from '../../pages/screens/SaveScreens/SaveScreen';
import React from 'react';

export default BottomTabs = () => {
  const BottomTabNavigator = createBottomTabNavigator();
  return (
    <BottomTabNavigator.Navigator
      tabBar={props => <BottomTabBar {...props} />}
      screenOptions={{headerShown: false}}>
      <BottomTabNavigator.Screen
        component={Home}
        name="BottomHome"
        options={{tabBarLabel: 'Home'}}
      />
      <BottomTabNavigator.Screen
        component={SearchScreen}
        name="BottomSearchScreen"
      />
      <BottomTabNavigator.Screen
        component={SaveScreen}
        name="BottomSaveScreen"
      />
      <BottomTabNavigator.Screen component={Settings} name="BottomSettings" />
    </BottomTabNavigator.Navigator>
  );
};
