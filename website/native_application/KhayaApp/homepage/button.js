import React from "react";
import { View, TouchableOpacity, Text } from "react-native-web";
//TAKE NOTE THAT THE LIBTRARY WAS SET ON REACT NATIVE WEB

const CenteredButton = ({ onPress, title}) => {

    return(
        <View style={{ alignItems:'center'}}>
        <TouchableOpacity 
            onPress = {onPress}
            style = {{background :"blue", padding :10, borderRadius :5}}
        >
        <Text style = {{ color : "black", 'fontweight':'bold'}}>{title}</Text>
        </TouchableOpacity>
        </View>
    );
}

export default CenteredButton