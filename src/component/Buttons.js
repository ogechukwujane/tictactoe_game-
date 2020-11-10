import React from 'react';
import { TouchableOpacity, View, StyleSheet,Text } from 'react-native';




const Button = ({onPress,btnText}) => {
 return (
    <View style={style.container} >
        <TouchableOpacity onPress ={onPress} 
        style={style.btn}>
        <Text style={style.textstyle}>{btnText}</Text>
        </TouchableOpacity>
        
    </View>

 )
}

const style =StyleSheet.create({
    container: {
        margin: 1,
        flex: 1,
        justifyContent: 'center'
        },
    textstyle: {
      fontSize: 50,
      textAlign: 'center',
      paddingVertical: 15
    },
    btn: {
        width: 100,
        height: 100,
        backgroundColor: 'khaki',
        //margin: 1
    }

});

export default Button;