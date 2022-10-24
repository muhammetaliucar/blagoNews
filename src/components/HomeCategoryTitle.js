import { Text,TouchableOpacity } from "react-native"
import React from "react";
const HomeCategoryTitle = ({ item,selected }) => {

    const setSelectedCat = ()=>{
        selected(item)
    }
    return (
        <TouchableOpacity onPress={setSelectedCat} >
        <Text 
        style={{ 
        fontSize: 22, 
        marginEnd: 15, 
        borderTopWidth: 10, 
        paddingBottom: 5, 
        borderColor: 'gray' }} >{item.name}
        </Text>
        </TouchableOpacity>
    )
}

export default HomeCategoryTitle