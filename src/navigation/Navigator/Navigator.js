import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthScreens from '../AuthScreens/AuthScreens';
import Screens from '../Screens/Screens';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useContext} from 'react';
import {UserContext} from '../../../contexts/UserContexts';
import Lottie from 'lottie-react-native';

export default Navigator = () => {
  const {state, dispatch} = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  const getToken = async () => {
    const token = await AsyncStorage.getItem('@token');
    if (token) {
      const parsedToken = JSON.parse(token);
      dispatch({
        type: 'LOGIN',
        payload: {login: parsedToken},
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    getToken();
  }, [state]);

  const Stack = createNativeStackNavigator();

  if (loading)
    return (
      <Lottie
        source={require('../../assets/animations/newspaper.json')}
        autoPlay
        loop
      />
    );

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {state?.token?.token ? (
          <Stack.Screen name="Screens" component={Screens} />
        ) : (
          <Stack.Screen name="AuthScreen" component={AuthScreens} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
