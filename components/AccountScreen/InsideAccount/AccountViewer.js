import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native';
import TopNotification from '../../HomeScreen/HomeComponent/TopNotification';
import Profile from '../AccountComponent/Profile';
import {Icon} from "@up-shared/IconComponents";
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const AccountViewer = () => {
    return (
        <SafeAreaView style={styles.ScreenView}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TopNotification/>
                <Profile/>
                <View style={styles.Line}/>
                <View style={styles.WrappManagement}>
                    <Text style={styles.Title}>Management Account</Text>
                    <TouchableHighlight
                    underlayColor="#e9ebef99"
                    onPress={()=>{}}>
                        <View style={styles.WrapperItem}>
                            <View style={styles.WrapperIcon}>
                                <Icon  name="document" size={24} color="#2D386E"/>
                            </View>
                            <View style={styles.Relatif}>
                                <Text style={styles.TitleItem}>History Donasi</Text>
                                <Icon2 name="chevron-right" size={20} color="#909AAD" style={styles.arrow}/>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                    underlayColor="#e9ebef99"
                    onPress={()=>{}}>
                        <View style={styles.WrapperItem}>
                            <View style={styles.WrapperIcon}>
                                <Icon  name="bookmark" size={24} color="#2D386E"/>
                            </View>
                            <View style={styles.Relatif}>
                                <Text style={styles.TitleItem}>Majalah E-Book</Text>
                                <Icon2 name="chevron-right" size={20} color="#909AAD" style={styles.arrow}/>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>
                <TouchableHighlight
                underlayColor="#FF6060"
                onPress={() =>{}}>
                    <View>
                        <Icon name="power_off" size={20} color="#FF6060"/>
                        <Text>Logout Account</Text>
                    </View>
                </TouchableHighlight>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AccountViewer

const styles = StyleSheet.create({
    ScreenView: {
        flex:1 , 
        backgroundColor: 'white'
      },
      Line:{
          height: 10,
          flex: 1,
          backgroundColor:'#e9ebef80',
      },
      WrappManagement:{
          paddingTop: 24,
      },
      Title:{
          paddingHorizontal: 15,
          fontFamily: 'Lato',
          fontSize: 18,
          color:'#2D386E',
          fontWeight:'bold',
          lineHeight:22,
          marginBottom: 12
      },
      WrapperIcon:{
          paddingHorizontal: 20,
      },
      WrapperItem:{
          paddingLeft:4,
          paddingRight:15,
          flexDirection:'row',
          alignItems:'center',
      },
      Relatif:{
          position:'relative',
          flex:1,
          paddingVertical:16,
          borderBottomWidth:1,
          borderBottomColor:"#e9ebef99",
      },
      arrow:{
          position:'absolute',
          right: 0,
          top:16
      },
      TitleItem:{
        fontFamily: 'Lato',
        fontSize: 16,
        color:'#2D386E',
        fontWeight:'bold',
      },
})
