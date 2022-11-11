import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AuthScreens from "../AuthScreens/AuthScreens"
import Screens from "../Screens/Screens"
import { useState, useEffect } from "react"
import { useSelector } from 'react-redux';
import AsyncStorage from "@react-native-async-storage/async-storage"

export default Navigator = () => {

    const [login, setLogin] = useState(null)
    const { userInfo} = useSelector(res => res.user)
    console.log(userInfo,'i am info')

    const getToken = async () => {
        const token = await AsyncStorage.getItem('@token')
        if (token) {
            const parsedToken = JSON.parse(token)
            setLogin(parsedToken)
        }
    }

    console.log(login,'ben login')
    useEffect(()=>{
       getToken()
    },[userInfo])

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
               {login !== null   ?
                        <Stack.Screen name='Screens' component={Screens} /> :
                        <Stack.Screen name='AuthScreen' component={AuthScreens} />
               }
            </Stack.Navigator>
        </NavigationContainer>
    )
}