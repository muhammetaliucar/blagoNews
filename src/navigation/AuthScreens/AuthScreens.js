import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../../pages/auth/Login"
import Signup from "../../pages/auth/Signup"

export default AuthScreens = () => {
    const Stack = createNativeStackNavigator()
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='LoginAuth' component={Login} />
        <Stack.Screen name='SignupAuth' component={Signup} />
      </Stack.Navigator>
    )
  }