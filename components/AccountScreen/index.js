import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';

import {Icon} from '@up-shared/IconComponents';

import {createStackNavigator} from '@react-navigation/stack';
import Account from './InsideAccount/AccountViewer';
import EditAccount from './InsideAccount/EditProfile';
import Ebook from './InsideAccount/Ebook';

import {AuthContext} from '../../store';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';

import logo from '../../assets/logo.png';

const Stack = createStackNavigator();

const NeedLoginScreen = ({navigation}) => {
  const [txtBtnColor, setTxtBtnColor] = React.useState('#2D386E');

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}>
      <ScrollView>
        <View
          style={{
            alignItems: 'center',
            marginVertical: 50,
            paddingHorizontal: 20,
          }}>
          <Image source={logo} style={styles.image} />
          <View style={{flexDirection: 'row', marginTop: 25, marginBottom: 18}}>
            <Text style={{fontSize: 24, color: '#0254A3', marginRight: 5}}>
              Peduli
            </Text>
            <Text style={{fontSize: 24, color: '#48B349', fontWeight: 'bold'}}>
              Bersama
            </Text>
          </View>
          <Text style={{color: '#909AAD', lineHeight: 24, textAlign: 'center'}}>
            Oops! Anda belum terdaftar, yuk daftar atau masuk dengan menggunakan
            account anda
          </Text>
        </View>
        <TouchableHighlight
          underlayColor="#2D386E"
          onPress={() => navigation.push('AuthModal')}
          onShowUnderlay={() => setTxtBtnColor('#ffff')}
          onHideUnderlay={() => setTxtBtnColor('#2D386E')}
          style={styles.btnWrapper}>
          <View style={styles.button}>
            <Icon name="profile" size={20} color={txtBtnColor} />
            <Text style={{...styles.btnText, color: txtBtnColor}}>
              Login Account
            </Text>
          </View>
        </TouchableHighlight>
      </ScrollView>
    </SafeAreaView>
  );
};

const AccountScreen = () => {
  const authState = React.useContext(AuthContext.State);

  return (
    <Stack.Navigator>
      {authState.phone == null ? (
        <>
          <Stack.Screen
            name="NeedLoginScreen"
            component={NeedLoginScreen}
            options={{headerShown: false}}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Account"
            component={Account}
            options={{headerShown: false}}
          />
          <Stack.Screen name="EditAccount" component={EditAccount} />
          <Stack.Screen name="Ebook" component={Ebook} />
        </>
      )}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 125,
    height: 55,
    resizeMode: 'stretch',
  },
  btnWrapper: {
    borderRadius: 80,
    borderWidth: 1,
    borderColor: '#E9EBEF',
    backgroundColor: '#fff',
    marginHorizontal: '25%',
  },
  btnText: {
    fontFamily: 'Lato',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 15,
  },
});

export default AccountScreen;
