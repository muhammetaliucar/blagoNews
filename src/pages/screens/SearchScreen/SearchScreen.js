import { Text, KeyboardAvoidingView, FlatList, TextInput, View,SafeAreaView} from "react-native"
import { useState } from "react"
import AntDesign from 'react-native-vector-icons/AntDesign'
import HomeNewsBottomCard from "../../../components/HomeNewsBottomCard"
import sliderData from "../../../data/sliderData"
const SearchScreen = () =>{

    const [search,setSearch] = useState(null)
    const [data,setData] = useState(sliderData)

    const filterData = (item) =>{
        if(item){
            setDatasliderData.filter(e =>{
                e.toLowerCase() === search.toLowerCase()
            })
        }
    }

    return(
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1,marginHorizontal:10 }}>
                <View style={{ backgroundColor: 'gray', padding: 10, borderRadius: 20,marginBottom:20,flexDirection: 'row', alignItems: 'center' }}>
                    <AntDesign name="search1" color={'white'} />
                    <TextInput style={{marginStart:10,color:'white'}} onChangeText={(text) => filterData(text)} placeholder={'Search...'} placeholderTextColor={'white'} />
                </View>
                <FlatList data={data} renderItem={({item}) =><HomeNewsBottomCard item={item} />} />
            </SafeAreaView>
       </KeyboardAvoidingView>
    )
}

export default SearchScreen