import React from 'react'
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
import {Icon} from "@up-shared/IconComponents";
import { color } from 'react-native-reanimated';

const MitraList = ({item, navigation}) => {
    const {name, address, image,slug, hasDonation, hasntDonation} = item;
    return (
        <TouchableOpacity
        style={styles.card}
        numColumns={2}
        onPress={() =>
        navigation.navigate('DetailMitra', {
            slug: slug,
        })
        }>
            <Image
            style={styles.cardImage}
            source={require('../../../assets/mitra.jpg')}
        />
        <View style={styles.cardBody}>
            <Text style={styles.MitraTitle}>{name}</Text>
            <View style={styles.WrappRow2}>
                <Icon name='place' size={14} color="#FCBD60"/>
                <Text style={styles.address}>{address}</Text>
            </View>
            <View style={styles.WrappRow}>
                <View style={styles.ichand}>
                    <Icon name='hand' color='#fff' size={10}/>
                </View>
                <Text style={styles.titlecount}>{hasDonation} Program Terdanai</Text>
            </View>
            <View style={styles.WrappRow}>
                <View style={styles.ichand2}>
                    <Icon name='hand' color='#fff' size={10}/>
                </View>
                <Text style={styles.titlecount}>{hasntDonation} Program Belum Terdanai</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default MitraList

const styles = StyleSheet.create({
    WrappRow2:{
        flexDirection: 'row',
        alignItems:'center',
        marginBottom:18
    },
    WrappRow:{
        flexDirection: 'row',
        alignItems:'center',
        marginBottom:4
    },
    MitraTitle:{
        fontFamily:'Lato',
        color:'#2D386E',
        fontSize: 14,
        fontWeight:'bold',
        lineHeight: 18,
        marginBottom:6
    },
    address:{
        fontFamily:'Lato',
        color:'#909AAD',
        fontSize:11,
        lineHeight:13,
    },
    titlecount:{
        fontFamily:'Lato',
        color:'#909AAD',
        fontSize: 11,
        lineHeight: 13,
    },
    ichand:{
        flexDirection:'column',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'#48B349',
        width: 18,
        height: 18,
        borderRadius:18,
        marginRight:8
    },
    ichand2:{
        flexDirection:'column',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'#FF6060',
        width: 18,
        height: 18,
        borderRadius:18,
        marginRight:8
    },
    card: {
        flex: 1,
        flexDirection:'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 4,
        borderWidth: .5,
        borderColor:'#EBEDF1',
        marginBottom:14
      },
      cardImage: {
        flex:2,
        height: 132,
      },
      cardBody: {
        flex:3,
        padding:14,
      },
      cardCategory: {
      },
      cardText: {
        fontFamily: 'Lato',
        fontSize: 14,
        lineHeight:18,
        fontWeight:'bold',
        color:'#2D386E',
        marginBottom: 16,
      },
      flexRowSpaceBetwen:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
      },
      textProgress:{
        fontSize: 13,
        fontWeight:'bold',
        fontFamily:'Lato',
        color:'#2D386E',
      }
    });
