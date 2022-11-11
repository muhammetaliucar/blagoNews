import React, { useState} from 'react'
import { Text, View,KeyboardAvoidingView, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import axios from 'axios';
import Toast from 'react-native-toast-message'
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

  const dim = Dimensions.get('window')
  const [mail, setMail] = useState('ali@ucar.com')
  const [password, setPassword] = useState('123')
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const handleLogin = async () => {
    await axios.post('http://localhost:3000/users/login', {
      email: mail,
      password: password
    }).then(async res => {
      if (res.data.message === '200') {
        console.log(res.data.payload,'ben payload')
        await dispatch(setUser(res.data.payload))

        await AsyncStorage.setItem('@token',JSON.stringify(res.data.payload.token))
        await AsyncStorage.setItem('info', JSON.stringify(res.data.payload))
        
        Toast.show({
          type: 'success',
          text1: 'Hello',
          text2: 'This is some something 👋'
        });
      }
      else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Your email or password is wrong!'
        });
      }

    })
  }

  const handleSignup = () =>{

    navigation.navigate('SignupAuth')

  }

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#372D72' }}>
      <View style={{ flex: 0.3, backgroundColor: '#372D72', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 50, color: 'white' }}>.blago</Text>
      </View>
      <View style={{ flex: 0.7, backgroundColor: 'white', borderTopLeftRadius: 25, borderTopRightRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ borderColor: '#372D72', borderWidth: 1, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
          <TextInput value={mail} autoCapitalize='none' onChangeText={setMail} placeholder={'mail'} style={{ borderRadius: 20, height: dim.height * 0.05, width: dim.width * 0.5, color: '#372D72', color: 'black', padding: 10 }} />
        </View>
        <View style={{ borderColor: '#372D72', borderWidth: 1, borderRadius: 10 }}>
          <TextInput value={password} secureTextEntry={true} autoCapitalize='none' onChangeText={setPassword} placeholder={'password'} style={{ borderRadius: 20, height: dim.height * 0.05, width: dim.width * 0.5, color: '#372D72', color: 'black', padding: 10 }} />
        </View>
        <TouchableOpacity onPress={handleLogin} style={{ marginTop: 20, marginBottom: 10 }} >
          <View style={{ borderRadius: 10, borderColor: 'blue', borderWidth: 1, padding: 10 }}>
            <Text>Login</Text>
          </View>
        </TouchableOpacity>
        <Text>Dont have an account </Text>
        <TouchableOpacity onPress={handleSignup} style={{}} >
          <View style={{ borderRadius: 10, borderColor: 'blue', borderWidth: 1, padding: 10 }}>
            <Text>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Login