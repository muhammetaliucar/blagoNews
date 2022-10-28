import { useNavigation } from "@react-navigation/native"
import { ImageBackground,View,Text,Image,Dimensions, TouchableOpacity } from "react-native"
import moment from "moment"

const HomeSliderComponent = ({ item }) => {
  const dim = Dimensions.get('window')
  const navigate = useNavigation()
  
  console.log(item, 'ben item')

  return (
    <TouchableOpacity onPress={()=>navigate.navigate('NewsDetails',{item}) }>
      <ImageBackground imageStyle={{ borderRadius: 30 }} source={{ uri: item.photo }} style={{ height: dim.height * 0.5, width: dim.width * 0.8, borderRadius: 40, marginEnd: 10, justifyContent: 'flex-end' }}>
        <View style={{ flex: 0.5, backgroundColor: "rgba(0, 0, 0, 0.7)", borderBottomRightRadius: 30, borderBottomLeftRadius: 30, padding: 15, justifyContent: 'space-around' }}>
          <Text style={{ color: 'white', fontSize: 18, marginBottom: 20, fontWeight: 'bold' }}>{item.title}</Text>
          <Text numberOfLines={3} style={{ color: '#EBE2E2' }}>{item.content}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text numberOfLines={4} style={{ color: 'white', fontWeight: 'bold', marginBottom: 10 }}>{item.category.title}</Text>
              <Text numberOfLines={4} style={{ color: '#EBE2E2' }}>{moment(item.createdAt).format('LT')}</Text>
            </View>
            <Image style={{ height: 50, width: 50, borderRadius: 10 }} source={{ uri:item.author.photo }} />
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default HomeSliderComponent