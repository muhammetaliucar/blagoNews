import {Text, ScrollView, RefreshControl, View, Image} from 'react-native';
import categoryData from '../../../data/categoryData';
import HomeSliderComponent from '../../../components/HomeSliderComponent';
import HomeStyle from './Home.style';
import HomeCategoryTitle from '../../../components/HomeCategoryTitle';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useState} from 'react';
import HomeNewsBottomCard from '../../../components/HomeNewsBottomCard';
import {useEffect} from 'react';
import Lottie from 'lottie-react-native';
import fetchNewsAsync from '../../../../services/fetchNewsAsync';

const Home = () => {
  const [selectedCat, setSelectedCat] = useState(null);
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const selectedCatFunc = content => {
    setSelectedCat(content);
  };

  const fetchData = async () => {
    const res = await fetchNewsAsync();
    setData(res.data);
  };

  const arr = [
    {
      number: 1,
      avatarPath: require('../../../../assets/1.png'),
    },
    {
      number: 2,
      avatarPath: require('../../../../assets/2.png'),
    },
    {
      number: 3,
      avatarPath: require('../../../../assets/3.png'),
    },
    {
      number: 4,
      avatarPath: require('../../../../assets/4.png'),
    },
    {
      number: 5,
      avatarPath: require('../../../../assets/5.png'),
    },
    {
      number: 6,
      avatarPath: require('../../../../assets/6.png'),
    },
  ];

  useEffect(() => {
    setTimeout(fetchData, 1000);
  }, []);

  if (data.length === 0)
    return (
      <Lottie
        source={require('../../../assets/animations/newspaper.json')}
        autoPlay
        loop
      />
    );
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={fetchData} />
      }>
      <SafeAreaView style={{marginHorizontal: 20}}>
        <View>
          <View
            style={{
              marginBottom: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={HomeStyle.homeHeader}>News</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 16}}>12}</Text>
              <Text style={{fontSize: 16}}>1</Text>
              <Image
                source={arr[1]?.avatarPath}
                style={{
                  height: 45,
                  width: 45,
                  borderRadius: 30,
                  marginStart: 10,
                }}
              />
            </View>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data.map((item, index) => {
              return <HomeSliderComponent item={item} key={index} />;
            })}
          </ScrollView>
        </View>

        <View style={{margin: 20, flexDirection: 'row'}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categoryData.map((e, index) => {
              return (
                <HomeCategoryTitle
                  selected={selectedCatFunc}
                  item={e}
                  key={index}
                />
              );
            })}
          </ScrollView>
        </View>
        {data.length === 0 ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Text>No News.</Text>
          </View>
        ) : (
          data.map((e, i) => <HomeNewsBottomCard item={e} key={i + 1000} />)
        )}
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;
