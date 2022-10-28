import { Text, SafeAreaView, View, ScrollView,TouchableOpacity ,Image, Dimensions } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import { FlatList } from 'react-native-gesture-handler'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import HomeNewsBottomCard from '../../../components/HomeNewsBottomCard'


const AuthorDetails = ({ route }) => {

    const navigate = useNavigation()
    const { item } = route.params
    const dim = Dimensions.get('window')
    const [data,setData] = useState(null)

    const fetchData = async() =>{
        await axios.post('http://localhost:3000/news/getByAuthorsNews',{
            authorId:item.author.id
        }).then(res =>{
            setData(res.data)
        })
    }

    useEffect(()=>{
        fetchData()
    },[])


    console.log(item)

    const FlatListHeader = () => {
        return (
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <View style={{ padding: 7, backgroundColor: '#7a7c80', borderRadius: 10, marginBottom: 20, width: dim.width * 0.45,alignItems:'center',justifyContent:'center' }}>
                <Text style={{ fontSize: 16, color: 'white' }}>Number of News:{data.length}</Text>
            </View>
            <View style={{ paddingVertical: 15, backgroundColor: '#7a7c80', borderRadius: 10, marginBottom: 20, width: dim.width * 0.45,alignItems:'center',justifyContent:'center' }}>
                <Text style={{ fontSize: 16, color: 'white' }}>Created At:{moment(item.author.createdAt ).format('ll')}</Text>
            </View>
            </View>
            
        )
    }

    return (
        <ScrollView >

            <View style={{ height: dim.height * 0.3, backgroundColor: '#372D79'}} >
            <SafeAreaView>
            <TouchableOpacity onPress={()=> navigate.goBack()}>
            <MaterialIcons style={{ marginStart:10 }} color={'white'} name="arrow-back-ios" size={34} />
            </TouchableOpacity>
                <View>
                    <Text style={{ color: 'white', fontSize: 25,flexShrink:1,textAlign:'center',marginTop:30 }}>{item.author.name} {item.author.surname}</Text>
                </View>
            </SafeAreaView>
            </View>
            <Image source={{ uri: item.author.photo }} style={{
                position: 'absolute',
                top: dim.height * 0.23,
                left: '30%',
                borderRadius: 999,
                borderWidth:3,
                borderColor:'white',
                zIndex: 1,
                width: dim.width*0.4,
                height: 150,
            }} />
            {data===null ? null : <FlatList data={data} keyExtractor={e => e.id} ListHeaderComponent={<FlatListHeader />} style={{marginTop:100,marginHorizontal:10}} renderItem={({item}) => <HomeNewsBottomCard item={item} />} /> }
        </ScrollView>
    )
}

export default AuthorDetails