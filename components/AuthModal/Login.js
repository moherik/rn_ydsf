import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Image,
  StyleSheet,
} from 'react-native';
import auth from '@react-native-firebase/auth';

const Login = ({phone, setPhone, setVerif, setLoading}) => {
  const [nextColor, setNextColor] = React.useState('#fff');
  const [borderColor, setBorderColor] = React.useState('#E9EBEF');

  const signinWithPhoneNumber = async () => {
    setLoading(true);
    const confirmation = await auth().signInWithPhoneNumber(phone).finally(() => setLoading(false));
    setVerif(confirmation)
  }

  return (
    <>
      <View style={styles.caption}>
        <Text style={styles.heading1}>Login Account</Text>
        <Text style={styles.heading2}>Masuk dengan menggunakan No. HP</Text>
      </View>
      <View style={styles.phoneContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.numberCode}>+62</Text>
          <TextInput
            style={{...styles.inputNumber, borderBottomColor: borderColor}}
            placeholder="Nomor Telepon"
            onChangeText={(value) => setPhone(`+62${value}`)}
            onFocus={() => setBorderColor('#48B349')}
            onBlur={() => setBorderColor('#E9EBEF')}
          />
        </View>
        <Text style={styles.inputInfo}>
          * Pastikan no HP yang anda masukkan aktif dan dalam jangkauan anda.
        </Text>
      </View>
      <TouchableHighlight
        title="Selanjutnya"
        style={styles.buttonNext}
        onPress={() => signinWithPhoneNumber()}
        onShowUnderlay={() => setNextColor('#000')}
        onHideUnderlay={() => setNextColor('#fff')}
        underlayColor="#E9EBEF">
        <View>
          <Text style={{...styles.buttonNextText, color: nextColor}}>
            Selanjutnya
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
  },
  heading1: {
    textAlign: 'center',
    fontSize: 24,
    color: '#2D386E',
    fontWeight: 'bold',
    lineHeight: 40,
  },
  heading2: {
    textAlign: 'center',
    fontSize: 13,
    color: '#909AAD',
  },
  phoneContainer: {
    marginHorizontal: 40,
    marginBottom: 27,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 27,
  },
  numberCode: {
    flex: 1,
    borderRadius: 6,
    backgroundColor: '#E9EBEF',
    color: '#2D386E',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
  },
  inputNumber: {
    flex: 5,
    marginLeft: 10,
    paddingVertical: 5,
    borderBottomWidth: 2,
    color: '#2D386E',
    fontWeight: 'bold',
  },
  inputInfo: {
    fontSize: 11,
    color: '#909AAD',
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

export default Login;
