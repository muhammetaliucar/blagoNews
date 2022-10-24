import { Text,ScrollView, TouchableOpacity,View, FlatList, Image, Dimensions, ImageBackground,VirtualizedList } from "react-native"
import categoryData from "../../../data/categoryData"
import sliderData from "../../../data/sliderData"
import HomeSliderComponent from "../../../components/HomeSliderComponent"
import HomeStyle from "./Home.style"
import HomeCategoryTitle from "../../../components/HomeCategoryTitle"
import { SafeAreaView } from "react-native-safe-area-context"
import { useState } from "react"
import HomeNewsBottomCard from "../../../components/HomeNewsBottomCard"

const Home = () =>{

    const [selectedCat,setSelectedCat] = useState(null)
    const [data,setData] = useState(sliderData)

    const selectedCatFunc = content => {
      console.log(content)
      setSelectedCat(content)
      if(content.name === 'All' ) setData(sliderData)
      else{setData(sliderData.filter(e => e.category === content.name ))}
    };

    return(
      <ScrollView>
        <SafeAreaView style={{margin:20}}>
        <View >
          <Text style={HomeStyle.homeHeader}>Breaking News</Text>
          <FlatList 
          showsHorizontalScrollIndicator={false} 
          data={sliderData.slice(0,4)} 
          horizontal 
          keyExtractor={(e) => e.id}
          renderItem={({ item }) => <HomeSliderComponent item={item} />} />
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