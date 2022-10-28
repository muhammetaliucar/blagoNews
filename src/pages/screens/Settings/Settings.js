import React from 'react'
import { Text,View,ScrollView,Dimensions,Image,SafeAreaView,TouchableOpacity} from 'react-native'
import { useSelector } from 'react-redux'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Settings = () =>{

    const dim = Dimensions.get('window')
    const { userInfo } = useSelector((res) => res.user)
    console.log(userInfo)
    return (
        <ScrollView>
           <View style={{ height: dim.height * 0.3, backgroundColor: '#372D79'}} >
            <SafeAreaView>
                <View>
                    <Text style={{ color: 'white', fontSize: 25,flexShrink:1,textAlign:'center',marginTop:30 }}>{userInfo.result.name} {userInfo.result.surname}</Text>
                </View>
            </SafeAreaView>
            </View>
           <Image source={{ uri: userInfo.result.photo }} style={{
                position: 'absolute',
                top: dim.height * 0.23,
                left: '30%',
                borderRadius: 999,
                borderWidth: 3,
                borderColor: 'white',
                zIndex: 1,
                width: dim.width * 0.4,
                height: 150,
            }} />
            <View style={{ marginTop: dim.height * 0.15, marginHorizontal: 20 }}>
                <View style={{ borderBottomWidth: 1, padding: 5,marginBottom:dim.height*0.05 }}>
                    <Text style={{ fontSize: 18 }}>User Information</Text>
                </View>
                <View style={{ borderBottomWidth: 1, padding: 5,marginBottom:dim.height*0.05 }}>
                    <Text style={{ fontSize: 18 }}>Change Password</Text>
                </View>
                <View style={{ borderBottomWidth: 1, padding: 5,marginBottom:dim.height*0.05 }}>
                    <Text style={{ fontSize: 18 }}>User Information</Text>
                </View>
                <View style={{ borderBottomWidth: 1, padding: 5,marginBottom:dim.height*0.05 }}>
                    <Text style={{ fontSize: 18 }}>Logout</Text>
                </View>
            </View>
            
        </ScrollView>
    )
}

export default Settings