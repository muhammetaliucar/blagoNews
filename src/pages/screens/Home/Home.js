import { Text,Button, ScrollView, RefreshControl, View, FlatList, Image,TouchableOpacity } from "react-native"
import categoryData from "../../../data/categoryData"
import HomeSliderComponent from "../../../components/HomeSliderComponent"
import HomeStyle from "./Home.style"
import HomeCategoryTitle from "../../../components/HomeCategoryTitle"
import { SafeAreaView } from "react-native-safe-area-context"
import { useState } from "react"
import HomeNewsBottomCard from "../../../components/HomeNewsBottomCard"
import axios from "axios"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import Lottie from 'lottie-react-native';
import AsyncStorage from "@react-native-async-storage/async-storage"
import jwtDecode from "jwt-decode"
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

const Home = () => {

  const [selectedCat, setSelectedCat] = useState(null)
  const [data, setData] = useState([])
  const [refreshing, setRefreshing] = useState(false);
  const { userInfo } = useSelector(res => res.user)


  const selectedCatFunc = content => {
    setSelectedCat(content)
  };

  const fetchData = async () => {
    let token = await AsyncStorage.getItem('@token')
    let userInfo = await AsyncStorage.getItem('info')
    userInfo = JSON.parse(userInfo)
    token = JSON.parse(token)
    console.log(jwtDecode(token).exp*1000,'ben exp')
    // console.log(jwtDecode(token).exp*1000 > Date.now().valueOf(),'ben exp')
    console.log(Date.now(),'ben now')
   
    let config = {
      method: 'get',
      url: 'http://localhost:3000/news',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    };

    await axios(config).then(async res => {
      await AsyncStorage.setItem('news', JSON.stringify(res.data))
      setData(res.data)
    }
    )
  }

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

  useEffect(() => {
    setTimeout(fetchData, 1000)
  }, [])

  if (data.length === 0) return <Lottie source={require('../../../assets/animations/newspaper.json')} autoPlay loop />
  console.log(Math.random())
  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={fetchData} />} >
      <SafeAreaView style={{ marginHorizontal: 20 }}>
        <View >
          <View style={{ marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between' }} >
            <Text style={HomeStyle.homeHeader}>News</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 16 }}>{userInfo?.name}</Text>
              <Text style={{ fontSize: 16 }}>{userInfo?.surname}</Text>
              <Image source={arr[userInfo?.avatarNumber - 1]?.avatarPath}
                style={{ height: 45, width: 45, borderRadius: 30, marginStart: 10 }} />
            </View>
          </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {
                data.map((item,i) =>{
                  return(
                  <HomeSliderComponent item={item}/>)
                })
              }
            </ScrollView>
        </View>

        <View style={{ margin: 20, flexDirection: 'row' }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categoryData.map(e => {
              return (
                <HomeCategoryTitle selected={selectedCatFunc} item={e} />)
            })}
          </ScrollView>
        </View>
        {
          data.length === 0 ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
            <Text>No News.</Text>
          </View> :
            data.map((e, i) => <HomeNewsBottomCard item={e} index={i} />)
        }
      </SafeAreaView>
    </ScrollView>
  )
}

export default Home