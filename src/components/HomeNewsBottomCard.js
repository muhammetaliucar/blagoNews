import { useNavigation } from "@react-navigation/native"
import { View,Text,Image, TouchableOpacity } from "react-native"

const HomeNewsBottomCard = ({item,index}) =>{
  console.log(item,'ben item')
  const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={()=> navigation.navigate('NewsDetails',{item})}>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <View><Image style={{ height: 100, width: 100, borderRadius: 20 }} source={{ uri: item.img }} /></View>
        <View style={{ flex: 1, flexShrink: 1, padding: 10, justifyContent: 'space-around' }}>
          <Text style={{ fontWeight: 'bold' }}>{item.title} </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ padding: 5, backgroundColor: '#372E99', borderRadius: 5 }}>
              <Text style={{ color: 'white' }}>{item.category}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: 'gray' }}>{item.date} </Text>
              <Text style={{ color: 'gray' }}>• {item.view} views</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
} 

export  default HomeNewsBottomCard