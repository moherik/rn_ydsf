import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  ToastAndroid,
} from 'react-native';

import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Icon} from '@up-shared/IconComponents';
import AsyncStorage from '@react-native-community/async-storage';

import {AuthContext} from '../../store';

const Verif = ({
  phone,
  setPhone,
  verif,
  setVerif,
  setLoading,
  signIn,
  navigation,
}) => {
  const authDispactch = React.useContext(AuthContext.Dispatch);

  const [nextColor, setNextColor] = React.useState('#fff');
  const [code, setCode] = React.useState(null);

  const changePhone = () => {
    setVerif();
    setPhone();
  };

  const confirmCode = async () => {
    setLoading(true);
    await verif
      .confirm(code)
      .then((res) => {
        phoneAuth(phone);
      })
      .catch((err) => {
        ToastAndroid.show('Invalid Code', ToastAndroid.SHORT);
      })
      .finally(() => setLoading(false));
  };

  const phoneAuth = async (phoneNumber) => {
    return await fetch('https://demo.pedulibersama.id/api/phone-auth', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: phone,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        login(phone);
      })
      .catch((error) => {
        ToastAndroid.show(`Error Logging in: (${error})`, ToastAndroid.SHORT);
      })
      .finally(() => setLoading(false));
  };

  const login = async (phoneNumber) => {
    return await fetch('https://demo.pedulibersama.id/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: phoneNumber,
        password: phoneNumber,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        storePhone();
      })
      .catch((error) => {
        ToastAndroid.show(`Error Logging in: (${error})`, ToastAndroid.SHORT);
      })
      .finally(() => setLoading(false));
  };

  const storePhone = async () => {
    try {
      await AsyncStorage.setItem('@phone', JSON.stringify(phone));
      authDispactch({type: 'RESTORE_PHONE', phone});
      navigation.goBack();
      ToastAndroid.show('Success Logged In', ToastAndroid.SHORT);
    } catch (error) {
      ToastAndroid.show(`Something went wrong: (${error})`, ToastAndroid.SHORT);
    }
  };

  return (
    <>
      <View style={styles.caption}>
        <Text style={styles.heading1}>Verifikasi</Text>
        <Text style={styles.heading2}>
          <Text>Masukkan kode verifikasi yang telah dikirimkan ke </Text>
          <Text style={{color: '#2D386E', fontWeight: 'bold', marginLeft: 5}}>
            {phone}
          </Text>
        </Text>
        <TouchableOpacity
          style={styles.changePhoneContainer}
          onPress={() => changePhone()}>
          <Icon name="pencil_outline" color="#48B349" />
          <Text
            style={{
              color: '#48B349',
              marginLeft: 10,
              fontSize: 13,
              lineHeight: 16,
            }}>
            Ubah Nomor HP
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.otpContainer}>
        <OTPInputView
          style={{width: '100%', height: 10, marginBottom: 40}}
          pinCount={6}
          autoFocusOnLoad
          onCodeFilled={(value) => setCode(value)}
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
        />
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={{color: '#909AAD', marginRight: 5}}>
            Belum menerima kode?
          </Text>
          <TouchableOpacity onPress={() => signIn()}>
            <Text style={{fontWeight: 'bold', color: '#2D386E'}}>
              kirim ulang
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableHighlight
        title="Selanjutnya"
        style={styles.buttonNext}
        onPress={() => confirmCode()}
        onShowUnderlay={() => setNextColor('#000')}
        onHideUnderlay={() => setNextColor('#fff')}
        underlayColor="#E9EBEF">
        <View>
          <Text style={{...styles.buttonNextText, color: nextColor}}>
            Login
          </Text>
        </View>
      </TouchableHighlight>
    </>
  );
};

const styles = StyleSheet.create({
  caption: {
    marginVertical: 46,
    width: '100%',
    paddingHorizontal: 40,
  },
  heading1: {
    fontSize: 24,
    lineHeight: 29,
    color: '#2D386E',
    fontWeight: 'bold',
    lineHeight: 40,
  },
  heading2: {
    fontSize: 13,
    lineHeight: 24,
    color: '#909AAD',
  },
  changePhoneContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 25,
  },
  otpContainer: {
    paddingHorizontal: 40,
    width: '100%',
    marginBottom: 65,
  },
  underlineStyleBase: {
    width: 45,
    height: 45,
    color: '#2D386E',
    fontWeight: 'bold',
    borderWidth: 0,
    borderBottomWidth: 1,
  },
  underlineStyleHighLighted: {
    borderColor: '#48B349',
  },
  buttonNext: {
    backgroundColor: '#48B349',
    borderRadius: 80,
    paddingHorizontal: 40,
    paddingVertical: 14,
  },
  buttonNextText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Verif;
