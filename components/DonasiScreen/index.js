import * as React from 'react';
import {View, StyleSheet,Image, Text, SafeAreaView, ScrollView} from 'react-native';
import TopNotification from '../HomeScreen/HomeComponent/TopNotification';
import SearchBar from '../HomeScreen/HomeComponent/SearchBar';
import HeaderTitle from '../HomeScreen/HomeComponent/HeaderTitle';

const DonasiScreen = () => {
  return (
    <SafeAreaView style={styles.ScreenView}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopNotification />
        <HeaderTitle />
        <View style={{paddingHorizontal:15,}} >
          <SearchBar />
          <View style={styles.card} numColumns={2}>
            <View style={styles.cardImageWp}>
              <Image
                style={styles.cardImage}
                source={require('../../assets/banner.jpg')}
              />
              <View
              style={styles.wpAbs}>
              <Text style={styles.textDate}>23-07-2020</Text>
              <Text style={styles.textDate}>06:34</Text>
              <Text style={styles.textPaid}>Belum Dibayar</Text>
              </View>
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.textTitle}>Bangun Panti Tuna Netra Cerdas Bangsa</Text>
              <Text style={styles.textNominal}>Rp 2.000.000</Text>
            </View>
          </View>
          <View style={styles.card} numColumns={2}>
            <View style={styles.cardImageWp}>
              <Image
                style={styles.cardImage}
                source={require('../../assets/banner.jpg')}
              />
              <View
              style={styles.wpAbs}>
              <Text style={styles.textDate}>23-07-2020</Text>
              <Text style={styles.textDate}>06:34</Text>
              <Text style={styles.textPaid2}>Berhasil</Text>
              </View>
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.textTitle}>Bangun Panti Tuna Netra Cerdas Bangsa</Text>
              <Text style={styles.textNominal}>Rp 1.500.000</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ScreenView:{
    flex:1,
    backgroundColor: '#fff'
  },
  card: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    borderWidth: .5,
    borderColor:'#EBEDF1',
    overflow:'hidden',
    marginBottom:14,
  },
  cardImageWp: {
    flex:2,
    position: 'relative'
  },
  cardImage: {
    width:'100%',
    height: 132,
  },
  wpAbs:{
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    height: 132,
    width:'100%',
    backgroundColor:'#2d86be80',
    position:'absolute',
    top: 0,
    left:0
  },
  cardBody: {
    flex:3,
    padding:14,
  },
  textTitle: {
    fontFamily: 'Lato',
    fontSize: 14,
    lineHeight:18,
    fontWeight:'bold',
    color:'#2D386E',
    marginBottom: 10,
  },
  textNominal: {
    fontFamily: 'Lato',
    fontSize: 13,
    lineHeight:18,
    fontWeight:'normal',
    color:'#2D386E',
    marginBottom: 10,
  },
  textDate:{
    fontFamily: 'Lato',
    fontSize: 13,
    lineHeight:18,
    fontWeight:'normal',
    color:'#fff',
    textAlign:'center',
    marginBottom: 0,
  },
  textPaid: {
    fontFamily: 'Lato',
    fontSize: 14,
    lineHeight:18,
    fontWeight:'bold',
    color:'#FF6060',
    paddingHorizontal:10,
    paddingVertical:4,
    borderRadius:40,
    backgroundColor:'#fff',
    marginBottom: 10,
    marginTop: 8,
  },
  textPaid2: {
    fontFamily: 'Lato',
    fontSize: 14,
    lineHeight:18,
    fontWeight:'bold',
    color:'#48B349',
    paddingHorizontal:10,
    paddingVertical:4,
    borderRadius:40,
    backgroundColor:'#fff',
    marginBottom: 10,
    marginTop: 8,
  },
});

export default DonasiScreen;
