import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
const HomeCategoryTitle = ({item, selected}) => {
  const setSelectedCat = () => {
    selected(item);
  };
  return (
    <TouchableOpacity onPress={setSelectedCat}>
      <View style={{borderBottomWidth: 1}}>
        <Text
          style={{
            fontSize: 22,
            marginEnd: 15,
            color: 'black',
            paddingBottom: 5,
          }}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeCategoryTitle;
