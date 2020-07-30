import React from 'react'
import { StyleSheet,Image, Text, View, TouchableOpacity } from 'react-native'
import {Icon} from "@up-shared/IconComponents";

const Profile = () => {
    return (
        <View style={styles.Container} numColumns={3}>
            <View style={styles.Row}>
                <View style={styles.column1}>
                    <Image source={require('../../../assets/avatar.jpg')}
                    style={styles.Avatar}/>
                </View>
                <View style={styles.column2}>
                    <Text style={styles.Name}>Your Name</Text>
                    <Text style={styles.email}>yourmail@mail.com</Text>
                </View>
                <TouchableOpacity style={styles.column3}>
                    <Icon name="pencil" size={14} color="#909AAD" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    Container:{
        paddingHorizontal:15,
        paddingTop:12,
        paddingBottom: 22,
    },
    Row:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    column2:{
        flex: 1,
        paddingLeft:16,
        paddingRight: 10
    },
    column3:{
        height:44,
        padding:4
    },
    Avatar:{
        width:68,
        height:68,
        borderRadius:64,
    },
    Name:{
        fontFamily: 'Lato',
        color: '#2D386E',
        fontSize: 18,
        fontWeight:'bold',
        lineHeight: 18,
        marginBottom:4
    },
    email:{
        fontFamily: 'Lato',
        color: '#909AAD',
        fontSize: 13,
        fontWeight:'normal',
        lineHeight: 16
    },
})
