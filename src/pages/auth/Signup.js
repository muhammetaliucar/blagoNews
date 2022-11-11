import { Text, SafeAreaView, View, Image } from "react-native"
import { primaryColor } from '../../colors';

const Signup = () =>{
    return(
        <SafeAreaView style={{flex:1,backgroundColor:primaryColor,justifyContent:'flex-end'}}>
            <View style={{flex:0.3}}><Image style={{width:100,height:100}} source={require('../../../assets/sign.jpg')} /></View>
            <View style={{flex:0.7,backgroundColor:'white'}}>

            </View>
        </SafeAreaView>
    )
}

export default Signup