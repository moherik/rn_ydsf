import React from 'react'
import {Text, View, StyleSheet} from 'react-native';

const ListDonatur = ({item}) => {
    const {alias, nominal, created_at, message} = item;
    return (
        <View style={styles.WpDonaturItem}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginBottom:10}}>
            <View>
                <Text style={styles.donaturname}>{alias}</Text>
                <Text style={styles.date}>{created_at}</Text>
            </View>
            <Text style={styles.nominal}>{nominal}</Text>
            </View>
            <Text style={styles.descDonation}>{message}</Text>
        </View>
    );
  };

export default ListDonatur

const styles = StyleSheet.create({
    descDonation:{
        fontFamily:'Lato',
        fontSize:16,
        fontWeight:'normal',
        color:'#000',
        lineHeight:32,
      },
      nominal:{
        fontFamily:'Lato',
        fontSize:20,
        fontWeight:'bold',
        color:'#2D386E',
        lineHeight:24,
      },
      date:{
        fontFamily:'Lato',
        fontSize:14,
        fontWeight:'normal',
        color:'#909AAD',
        lineHeight:24,
      },
      donaturname:{
        fontFamily:'Lato',
        fontSize:18,
        fontWeight:'bold',
        color:'#2D386E',
        lineHeight:24,
      },
      WpDonaturItem:{
        marginBottom:0,
        borderBottomWidth: 1,
        borderColor:'#E2EDF8',
        paddingHorizontal:20,
        paddingVertical:24,
        backgroundColor:'#fff'
      },
});
