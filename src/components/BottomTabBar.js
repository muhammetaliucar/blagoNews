import {Text, View, TouchableWithoutFeedback} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
const BottomTabBar = ({state}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 0.09,
        borderTopWidth: 0.5,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('BottomHome')}>
        <View style={{borderTopWidth: state.index === 0 ? 1 : 0, padding: 5}}>
          <Ionicons name="home-outline" size={24} color={'black'} />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('BottomSearchScreen');
        }}>
        <View style={{borderTopWidth: state.index === 1 ? 1 : 0, padding: 5}}>
          <EvilIcons name="search" size={30} color={'black'} />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('BottomSaveScreen');
        }}>
        <View style={{borderTopWidth: state.index === 2 ? 1 : 0, padding: 5}}>
          <FontAwesome5 name="bookmark" size={22} color={'black'} />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('BottomSettings');
        }}>
        <View style={{borderTopWidth: state.index === 3 ? 1 : 0, padding: 5}}>
          <Feather name="settings" size={24} color={'black'} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default BottomTabBar;
