import React from 'react'
import { StyleSheet, Text, View ,SafeAreaView, ScrollView, Image} from 'react-native'
import {Icon} from "@up-shared/IconComponents";

const DetailMitra = () => {
    return (
        <SafeAreaView style={styles.ScreenView}>
            <ScrollView>
                <Image source={require('../../../assets/mitra.jpg')} style={{height: 224, width:"100%"}}/>
                <View style={styles.WpProgramCount}
                numColumns={2}>
                    <View style={styles.WpItem}>
                        <View style={styles.WpIcon}>
                            <Icon name="hand" size={16} color="#48B349"/>
                        </View>
                        <View>
                            <Text style={styles.count}>10</Text>
                            <Text style={styles.titlecount}>Program Terdanai</Text>
                        </View>
                    </View>
                    <View style={styles.WpItem}>
                        <View style={styles.WpIcon}>
                            <Icon name="hand" size={16} color="#FF6060"/>
                        </View>
                        <View>
                            <Text style={styles.count}>10</Text>
                            <Text style={styles.titlecount}>Program Belum Terdanai</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.}>
                    <View style={styles.WpLogo}>
                        <Image source={require('../../../assets/logo.png')} style={{width:54, height: 24}}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DetailMitra

const styles = StyleSheet.create({
    ScreenView:{
        flex:1,
        backgroundColor: '#fff'
      },
      WpProgramCount:{
          marginTop:-38,
          paddingHorizontal:13,
          paddingVertical:17,
          backgroundColor:'#48B349',
          marginHorizontal:15,
          borderRadius:8,
          flexDirection:'row',
          alignItems:'center'
      },
      WpItem:{
          flexDirection:'row',
          flex:1,
          alignItems:'center',
      },
      WpIcon:{
          width:38,
          height:38,
          backgroundColor: '#fff',
          borderRadius:38,
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'center',
          marginRight:12,
      },
      count:{
        fontWeight:'bold',
        fontSize:20,
        lineHeight:24,
        fontFamily:'Lato',
        color:'#fff'
      },
      titlecount:{
        fontWeight:'normal',
        fontSize:11,
        lineHeight:13,
        fontFamily:'Lato',
        color:'#fff'
      },
      WpLogo:{
          width:72,
          height:72,
          borderRadius: 72,
          borderWidth: 1,
          borderColor:'#E9EBEF',
          flexDirection: 'column',
          alignItems:'center',
          justifyContent: 'center',
      },
})
