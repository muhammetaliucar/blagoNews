import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from '../TabBar/BottomTabs';
import NewsDetails from '../../pages/screens/NewsDetails/NewsDetails';
import AuthorDetails from '../../pages/screens/AuthorDetails/AuthorDetails';
import Settings from '../../pages/screens/Settings/Settings';

export default Screens = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="NewsDetails" component={NewsDetails} />
      <Stack.Screen name="AuthorDetails" component={AuthorDetails} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};
