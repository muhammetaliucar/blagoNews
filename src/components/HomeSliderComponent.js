import { useNavigation } from "@react-navigation/native"
import { ImageBackground,View,Text,Image,Dimensions, TouchableOpacity } from "react-native"

const HomeSliderComponent = ({ item }) => {
  const dim = Dimensions.get('window')
  const navigate = useNavigation()

  return (
    <TouchableOpacity onPress={()=>navigate.navigate('NewsDetails',{item}) }>
      <ImageBackground imageStyle={{ borderRadius: 30 }} source={{ uri: item.img }} style={{ height: dim.height * 0.5, width: dim.width * 0.8, borderRadius: 40, marginEnd: 10, justifyContent: 'flex-end' }}>
        <View style={{ flex: 0.5, backgroundColor: "rgba(0, 0, 0, 0.7)", borderBottomRightRadius: 30, borderBottomLeftRadius: 30, padding: 15, justifyContent: 'space-around' }}>
          <Text style={{ color: 'white', fontSize: 18, marginBottom: 20, fontWeight: 'bold' }}>{item.title}</Text>
          <Text numberOfLines={4} style={{ color: '#EBE2E2' }}>{item.text}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text numberOfLines={4} style={{ color: 'white', fontWeight: 'bold', marginBottom: 10 }}>Space</Text>
              <Text numberOfLines={4} style={{ color: '#EBE2E2' }}>3 hours ago</Text>
            </View>
            <Image style={{ height: 50, width: 50, borderRadius: 10 }} source={{ uri: 'https://pbs.twimg.com/profile_images/1570101537128472576/rnzGv2XE_400x400.jpg' }} />
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default HomeSliderComponent