import React, { useState } from 'react'
import { Text, View, ScrollView, Dimensions, Image, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import SettingsStyle from './Settings.style'
import Modal from 'react-native-modal'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import { setUser } from '../../../redux/userSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from 'react';

const Settings = () => {
    const { userInfo } = useSelector((res) => res.user)
    const [avatarData, setAvatarData] = useState(null)
    const [asyncData, setAsyncData] = useState(null)
    const [isModalVisible, setModalVisible] = useState(false)
    const [selectedAvatar, setSelectedAvatar] = useState(userInfo?.result?.avatarNumber)
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const dim = Dimensions.get('window')

    const fetchAvatarData = async() =>{
        try {
            setAsyncData(JSON.parse(await AsyncStorage.getItem('info')))
            await axios.get('http://localhost:3000/avatar').then(
            res => setAvatarData(res.data)
        )
        } catch (error) {
            console.log(error)
        }
    }
    console.log(asyncData,'ben data')
    useEffect(async ()=>{
        fetchAvatarData()

    },[])

    const handleLogout = () => {
        navigation.reset({
            index: 1,
            routes: [{ name: 'Login' }]
        })
        dispatch(setUser({}))
        AsyncStorage.clear()
    }

    const renderItem = ({ item }) =>
    {
        return (
            <TouchableOpacity onPress={() => { setSelectedAvatar(item.number); handleChange() }} style={{ paddingHorizontal: 5, borderWidth: selectedAvatar === item.number ? 1 : 0, marginHorizontal: 10, borderRadius: 10, borderColor: '#372D79' }}>
                <Image source={{uri:item.avatarUrl}}
                    style={{ height: dim.height * 0.15, width: dim.width * 0.2, resizeMode: 'contain' }} />
            </TouchableOpacity>
        )
    }

    return (
        <ScrollView>
            <View style={SettingsStyle.containerUp} >
                <SafeAreaView>
                    <View>
                        <Text style={SettingsStyle.name}>{userInfo?.result?.name} {userInfo?.result?.surname}</Text>
                    </View>
                </SafeAreaView>
            </View>
            <TouchableOpacity onPress={toggleModal} style={SettingsStyle.avatar}>
                <Image source={{uri:asyncData?.avatarUrl}} style={SettingsStyle.image} />
            </TouchableOpacity>
            <View style={{ marginTop: dim.height * 0.15, marginHorizontal: 20 }}>
                <View style={{ borderBottomWidth: 1, padding: 5, marginBottom: dim.height * 0.05 }}>
                    <Text style={{ fontSize: 18 }}>User Information</Text>
                </View>
                <View style={{ borderBottomWidth: 1, padding: 5, marginBottom: dim.height * 0.05 }}>
                    <Text style={{ fontSize: 18 }}>Change Password</Text>
                </View>
                <View style={{ borderBottomWidth: 1, padding: 5, marginBottom: dim.height * 0.05 }}>
                    <Text style={{ fontSize: 18 }}>User Information</Text>
                </View>
                <TouchableOpacity onPress={handleLogout} style={{ borderBottomWidth: 1, padding: 5, marginBottom: dim.height * 0.05 }}>
                    <Text style={{ fontSize: 18 }}>Logout</Text>
                </TouchableOpacity>
            </View>
            <Modal style={SettingsStyle.modal} onBackdropPress={toggleModal} isVisible={isModalVisible}>
                <View style={{ borderTopRightRadius: 15, borderTopLeftRadius: 15, backgroundColor: 'white', height: dim.height * 0.5, justifyContent: 'space-around', alignItems: 'center' }} >
                    <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{marginBottom:20}}>
                        <Text style={{ fontSize: 18,fontWeight: 'bold'}}>Change Avatar</Text>

                        </View>
                        <FlatList style={{ flex: 1 }} numColumns={3} data={avatarData} renderItem={renderItem} />
                    </View>
                </View>
            </Modal>
        </ScrollView>
    )
}
export default Settings