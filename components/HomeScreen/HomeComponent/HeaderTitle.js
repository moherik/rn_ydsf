import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HeaderTitle = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', flex: 1, marginTop: 5}}>
            <Text style={styles.textPeduli}>Peduli </Text>
            <Text style={styles.textBersama}>Bersama</Text>
            </View>
            <Text style={styles.descTop}>Program Penggalangan dana Yayasan Dana Sosial Al-Falah</Text>
        </View>
    )
};

export default HeaderTitle

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingBottom: 24,
    flex:1,
    backgroundColor:"#fff"
    },
  RowCenter:{
    flexDirection: 'row', 
    justifyContent: "space-between", 
    alignItems:"center"
  },
  textPeduli:{
    fontSize: 24,
    lineHeight: 29,
    color:'#0254A3',
    fontFamily: "Lato"
  },
  textBersama:{
    fontWeight:'bold',
    fontSize: 24,
    lineHeight: 29,
    color:'#48B349',
    fontFamily: "Lato"
  },
  descTop:{
    fontSize: 12,
    lineHeight: 14,
    color: '#909AAD',
    marginTop: 6
  }
});
