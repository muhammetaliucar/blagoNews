import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/auth/Login';
import Home from './src/pages/screens/Home/Home';
import Toast from 'react-native-toast-message'
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './src/redux/store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabBar from './src/components/BottomTabBar';
import NewsDetails from './src/pages/screens/NewsDetails/NewsDetails';
import SearchScreen from './src/pages/screens/SearchScreen/SearchScreen';
import AuthorDetails from './src/pages/screens/AuthorDetails/AuthorDetails';
import Settings from './src/pages/screens/Settings/Settings';
const App = () => {

  const Stack = createNativeStackNavigator()
  const BottomTabNavigator = createBottomTabNavigator()


  const BottomTabs = () =>{
    return(
      <BottomTabNavigator.Navigator tabBar={(props) =><BottomTabBar {...props}/>} screenOptions={{headerShown:false}} >
        <BottomTabNavigator.Screen component={Home} name='BottomHome' options={{tabBarLabel:'Home'}} />
        <BottomTabNavigator.Screen component={SearchScreen} name='BottomSearchScreen' />
        <BottomTabNavigator.Screen component={Settings} name='BottomSettings' />
      </BottomTabNavigator.Navigator>
    )
  }



  return(
    <Provider store={store} >
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='BottomTabs' component={BottomTabs} />
        <Stack.Screen name='NewsDetails' component={NewsDetails} />
        <Stack.Screen name='AuthorDetails' component={AuthorDetails} />
        <Stack.Screen name='Settings' component={Settings} />
        
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
    </Provider>

  )
  
}

export default App