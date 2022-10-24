import { Text,View ,TouchableWithoutFeedback} from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from "@react-navigation/native"
const BottomTabBar = ({state}) => {

    const navigation = useNavigation()
    console.log(state.index)

    return (
        <View style={{ flex: 0.09, borderTopWidth: 0.5, justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }} >
            <TouchableWithoutFeedback onPress={() => navigation.navigate('BottomHome')}>
                <View style={{borderTopWidth:state.index === 0 ? 1 :0,padding:5}}>
                    <Ionicons name="home-outline" size={24} />
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => console.log(state)}>
                <View>
                <EvilIcons name="search" size={30} />
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('BottomMyProfile')}>
                <View style={{borderTopWidth:state.index === 1 ? 1 :0,padding:5}} >
                <FontAwesome5 name="bookmark" size={22} />
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => console.log('hello')}>
                <View style={{borderTopWidth:0,padding:5}}>
                <Feather name="settings" size={24} />
                </View>
            </TouchableWithoutFeedback>


     
        </View>
    )
}

export default BottomTabBar