import React from 'react'
import { StyleSheet, Image,Text, View, TouchableOpacity } from 'react-native'

const SlugProgram = (props) => {
    return (
        <View>
            <TouchableOpacity 
            activeOpacity={0.8}
            style={styles.align}>
            <Image 
            source={(props.img)}
            style={styles.Image}
            />
            <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SlugProgram

const styles = StyleSheet.create({
    Image:{
        width: 48,
        height: 48,
        borderRadius:50,
    },
    align: {
        flexDirection: 'column',
         alignItems: 'center'
        },
    text:{
        fontSize:13,
        lineHeight: 16,
        fontFamily:"Lato",
        color:'#909AAD',
        marginTop: 6,
    },
})
