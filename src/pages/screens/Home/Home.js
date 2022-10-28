import { Text,ScrollView, RefreshControl,View, FlatList,Image } from "react-native"
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

const Home = () =>{

    const [selectedCat,setSelectedCat] = useState(null)
    const [data,setData] = useState([])
    const [refreshing, setRefreshing] = useState(false);
    const { userInfo } = useSelector((res) => res.user)
    console.log(userInfo)

    const selectedCatFunc = content => {
      setSelectedCat(content)
    };

    const fetchData = async() =>{
      await axios.get('http://localhost:3000/news').then(res =>{
        setData(res.data)
      }
      )
    }

    useEffect(()=>{
      setTimeout(fetchData,1000)
    },[])

    console.log(data)
    if (data.length === 0) return <Lottie source={require('../../../assets/animations/newspaper.json')} autoPlay loop />
    return(
      <ScrollView  refreshControl={<RefreshControl refreshing={refreshing} onRefresh={fetchData} />} >
        <SafeAreaView style={{ marginHorizontal: 20 }}>
          <View >
            <View style={{ marginBottom: 10, flexDirection: 'row', justifyContent:'space-between' }} >
              <Text style={HomeStyle.homeHeader}>News</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={{fontSize:16}}>{userInfo.result.name}</Text>
                <Text style={{fontSize:16}}>{userInfo.result.surname}</Text>
                <Image source={{ uri: userInfo.result.photo }}
                  style={{ height: 45, width: 45, borderRadius: 30,marginStart:10 }} />
              </View>
            </View>
            <FlatList 
          showsHorizontalScrollIndicator={false} 
          data={data} 
          keyExtractor={(item,index) => item.id}
          horizontal 
          renderItem={({ item }) => <HomeSliderComponent item={item} />} />
        </View>
          <View style={{ margin: 20, flexDirection: 'row' }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {categoryData.map(e => {
                return (
                  <HomeCategoryTitle  selected={selectedCatFunc} item={e} />)
              })}
            </ScrollView>
          </View>
          {
            data.length === 0 ?<View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:20}}>
               <Text>No News.</Text> 
            </View>: 
            data.map((e,i) => <HomeNewsBottomCard item={e} index={i} />)
          }
       
        </SafeAreaView>
      </ScrollView>
    )
}

export default Home