import React, {useContext, useState} from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import loginAsync from '../../../../services/loginAsync';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import styles from './Login.style';
import {UserContext} from '../../../../contexts/UserContexts';

const Login = () => {
  const dim = Dimensions.get('window');
  const [mail, setMail] = useState('ali@mail.com');
  const [password, setPassword] = useState('123123');
  const navigation = useNavigation();
  const {dispatch} = useContext(UserContext);

  const handleLogin = async () => {
    const res = await loginAsync(mail, password);
    if (res.data.message !== 'failed') {
      await AsyncStorage.setItem('@token', JSON.stringify(res.data));
      dispatch({
        type: 'LOGIN',
        payload: {login: res.data.token},
      });
      Toast.show({
        type: 'success',
        text1: 'Hello',
        text2: 'This is some something 👋',
      });
      console.log(res.data, 'login res');
    } else {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Your email or password is wrong!',
      });
    }
  };

  const handleSignup = () => {
    navigation.navigate('SignupAuth');
  };

  return (
    <KeyboardAvoidingView style={styles.mainViewStyle}>
      <View style={styles.headerView}>
        <Text style={{fontSize: 50, color: 'white'}}>.blago</Text>
      </View>
      <View style={styles.inputView}>
        <View
          style={{
            borderColor: '#372D72',
            borderWidth: 1,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
          }}>
          <TextInput
            value={mail}
            autoCapitalize="none"
            onChangeText={setMail}
            placeholder={'mail'}
            style={{
              borderRadius: 20,
              height: dim.height * 0.05,
              width: dim.width * 0.5,
              color: '#372D72',
              color: 'black',
              padding: 10,
            }}
          />
        </View>
        <View
          style={{borderColor: '#372D72', borderWidth: 1, borderRadius: 10}}>
          <TextInput
            value={password}
            secureTextEntry={true}
            autoCapitalize="none"
            onChangeText={setPassword}
            placeholder={'password'}
            style={{
              borderRadius: 20,
              height: dim.height * 0.05,
              width: dim.width * 0.5,
              color: '#372D72',
              color: 'black',
              padding: 10,
            }}
          />
        </View>
        <TouchableOpacity
          onPress={handleLogin}
          style={{marginTop: 20, marginBottom: 10}}>
          <View style={styles.loginView}>
            <Text>Login</Text>
          </View>
        </TouchableOpacity>
        <Text>Dont have an account </Text>
        <TouchableOpacity onPress={handleSignup} style={{}}>
          <View style={styles.signUpView}>
            <Text>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
