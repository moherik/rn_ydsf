import * as React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {TouchableOpacity } from 'react-native-gesture-handler';
import {Icon} from "@up-shared/IconComponents";
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const TopNotification = () => {
  return (
    <View style={styles.container}>
        <View style={styles.RowCenter}>
          <Image
            source={require('../../../assets/logo.png')}
            style={{ width: 70, height: 32 }}
          />
          <TouchableOpacity>
          <Icon 
          name="bell"
          size={24}
          color="#909AAD"
        />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', flex: 1, marginTop: 14}}>
          <Text style={styles.textPeduli}>Peduli </Text>
          <Text style={styles.textBersama}>Bersama</Text>
        </View>
        <Text style={styles.descTop}>Program Penggalangan dana Yayasan Dana Sosial Al-Falah</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 15,
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

export default TopNotification;
