import {
  Text,
  KeyboardAvoidingView,
  FlatList,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeNewsBottomCard from '../../../components/HomeNewsBottomCard';
import sliderData from '../../../data/sliderData';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';

const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState(null);

  const dtSearchData = async item => {
    setSearch(item);
    if (item.length > 2) {
      await axios
        .post('http://localhost:3000/news/search', {
          search: item,
        })
        .then(res => {
          setData(res.data);
        });
    } else if (item.length === 0) {
      setData(null);
    }
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <SafeAreaView style={{flex: 1, marginHorizontal: 10}}>
        <View
          style={{
            backgroundColor: 'gray',
            padding: 10,
            borderRadius: 20,
            marginBottom: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <AntDesign size={16} name="search1" color={'white'} />
          <TextInput
            value={search}
            style={{marginStart: 10, color: 'white', flex: 1}}
            onChangeText={dtSearchData}
            placeholder={'Search...'}
            placeholderTextColor={'white'}
          />
          {search.length > 0 ? (
            <TouchableOpacity
              onPress={() => {
                setSearch('');
                setData(null);
              }}>
              <Entypo name="circle-with-cross" size={16} color={'white'} />
            </TouchableOpacity>
          ) : null}
        </View>
        <FlatList
          data={data}
          renderItem={({item}) => <HomeNewsBottomCard item={item} />}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default SearchScreen;
