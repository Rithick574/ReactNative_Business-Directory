import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function CategoryItem({ category, onCategoryPress }) {
  return (
    <TouchableOpacity onPress={()=>onCategoryPress(category)}>
      <View style={{padding:15,backgroundColor:Colors.ICON_BG,marginRight:15,borderRadius:99}}>
        <Image
          source={{ uri: category.icon }}
          style={{ width: 40, height: 40 }}
        />
      </View>
      <Text style={{fontFamily:'outfit-medium',textAlign:'center',fontSize:12,marginTop:5}}>{category?.name}</Text>
    </TouchableOpacity>
  );
}
