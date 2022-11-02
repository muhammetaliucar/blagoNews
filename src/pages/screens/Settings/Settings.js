import React, { useState } from 'react'
import { Text, View, ScrollView, Dimensions, Image, SafeAreaView, TouchableOpacity, Button, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import SettingsStyle from './Settings.style'
import Modal from 'react-native-modal'
import axios from 'axios'

const Settings = () => {
    const { userInfo } = useSelector((res) => res.user)

    const [isModalVisible, setModalVisible] = useState(false)
    const [selectedAvatar, setSelectedAvatar] = useState(userInfo.result.avatarNumber)

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const dim = Dimensions.get('window')

    const arr = [
        {
            number: 1,
            avatarPath: require('../../../../assets/1.png')
        },
        {
            number: 2,
            avatarPath: require('../../../../assets/2.png')
        },
        {
            number: 3,
            avatarPath: require('../../../../assets/3.png')
        },
        {
            number: 4,
            avatarPath: require('../../../../assets/4.png')
        },
        {
            number: 5,
            avatarPath: require('../../../../assets/5.png')
        },
        {
            number: 6,
            avatarPath: require('../../../../assets/6.png')
        },
    ]

    const handleChange = async () => {
        await axios.post('http://localhost:3000/users/changeAvatar', {
            id: userInfo.result.id,
            data: selectedAvatar
        }).then(res => {
            setModalVisible(!isModalVisible)
        })
    }

    return (
        <ScrollView>
            <View style={{ height: dim.height * 0.3, backgroundColor: '#372D79' }} >
                <SafeAreaView>
                    <View>
                        <Text style={SettingsStyle.name}>{userInfo.result.name} {userInfo.result.surname}</Text>
                    </View>
                </SafeAreaView>
            </View>
            <TouchableOpacity onPress={toggleModal} style={SettingsStyle.avatar}>
                <Image source={arr[selectedAvatar - 1].avatarPath} style={{
                    width: dim.width * 0.4,
                    height: 150,
                    borderRadius: 999,
                }} />
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
                <View style={{ borderBottomWidth: 1, padding: 5, marginBottom: dim.height * 0.05 }}>
                    <Text style={{ fontSize: 18 }}>Logout</Text>
                </View>
            </View>
            <Modal style={SettingsStyle.modal} onBackdropPress={toggleModal} isVisible={isModalVisible}>
                <View style={{ backgroundColor: 'white', height: dim.height * 0.5, justifyContent: 'space-around', alignItems: 'center' }} >
                    <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center' }}>
                        <FlatList style={{ flex: 1 }} numColumns={3} data={arr}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity onPress={() => { setSelectedAvatar(item.number); handleChange()  }} style={{ padding: 11, borderWidth: selectedAvatar === item.number ? 1 : 0, margin: 10, borderRadius: 10, borderColor: '#372D79' }}>
                                        <Image source={item.avatarPath}
                                            style={{ height: dim.height*0.15, width: dim.width*0.2,resizeMode:'center' }} />
                                    </TouchableOpacity>
                                )
                            }
                            } />
                    </View>
                </View>
            </Modal>

        </ScrollView>
    )
}

export default Settings