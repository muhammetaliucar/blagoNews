import {useNavigation} from '@react-navigation/native';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

const NewsDetails = ({route}) => {
  const dim = Dimensions.get('window');

  const navigate = useNavigation();
  const {item} = route.params;
  return (
    <ScrollView>
      <ImageBackground
        style={{
          width: dim.width * 1,
          height: dim.height * 0.6,
          justifyContent: 'space-between',
        }}
        source={{uri: item?.photo}}>
        <SafeAreaView>
          <TouchableOpacity
            style={{
              borderColor: 'white',
              width: dim.width * 0.1,
              marginLeft: 20,
            }}
            onPress={() => navigate.goBack()}>
            <View>
              <MaterialIcons
                style={{marginTop: 20}}
                color={'white'}
                name="arrow-back-ios"
                size={25}
              />
            </View>
          </TouchableOpacity>
        </SafeAreaView>
        <View style={{padding: 20, backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
          <Text style={{fontSize: 19, color: 'white'}}>
            {item.category.title}
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: 'gray',
              marginBottom: 10,
              marginTop: 5,
            }}>
            {moment(item.createdAt).startOf('hour').fromNow()}
          </Text>
          <Text style={{fontSize: 35, color: 'white'}}>{item.title}</Text>
        </View>
      </ImageBackground>
      <View style={{margin: 20}}>
        <View
          style={{
            marginBottom: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            onPress={() => navigate.navigate('AuthorDetails', {item})}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              backgroundColor: '#d3e7f6',
              borderRadius: 8,
            }}>
            <Image
              source={{uri: item.author.photo}}
              style={{height: 50, width: 50, borderRadius: 8, marginEnd: 10}}
            />
            <Text style={{color: 'black'}}>
              {item.author.name} {item.author.surname}
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 5,
              backgroundColor: '#d3e7f6',
              borderRadius: 8,
            }}>
            <MaterialCommunityIcons
              color={'blue'}
              size={22}
              style={{marginEnd: 10}}
              name="camera-timer"
            />
            <Text style={{color: 'black'}}>
              {Math.ceil(item.content.split(' ').length / 230)} min
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              backgroundColor: '#d3e7f6',
              borderRadius: 8,
            }}>
            <IonIcons
              color={'blue'}
              size={22}
              style={{marginEnd: 10}}
              name="eye-outline"
            />

            <Text style={{color: 'black'}}>333 views</Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 10,
            color: 'black',
          }}>
          {item.title}
        </Text>

        <Text style={{fontSize: 16, color: 'black'}}>{item.content}</Text>
      </View>
    </ScrollView>
  );
};

export default NewsDetails;
