import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Image,
  StyleSheet,
} from 'react-native';
import {Icon} from '@up-shared/IconComponents';

const Login = ({signIn, setPhone}) => {
  const [nextColor, setNextColor] = React.useState('#fff');
  const [borderColor, setBorderColor] = React.useState('#E9EBEF');
  const [txtBtnColor2, setTxtBtnColor2] = React.useState('#2D386E');
  const [txtBtnColor, setTxtBtnColor] = React.useState('#2D386E');
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
            keyboardType="number-pad"
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
        onPress={() => signIn()}
        onShowUnderlay={() => setNextColor('#000')}
        onHideUnderlay={() => setNextColor('#fff')}
        underlayColor="#E9EBEF">
        <View>
          <Text style={{...styles.buttonNextText, color: nextColor}}>
            Selanjutnya
          </Text>
        </View>
      </TouchableHighlight>
      <View style={styles.ContainerOr}>
        <View style={styles.line}/>
        <Text style={styles.OrTitle}>OR</Text>
        <View style={styles.line}/>
      </View>
      <TouchableHighlight
          underlayColor="#2D386E"
          onPress={() => ('')}
          onShowUnderlay={() => setTxtBtnColor2('#ffff')}
          onHideUnderlay={() => setTxtBtnColor2('#2D386E')}
          style={styles.btnWrapper}>
          <View style={styles.button}>
            <Icon name="facebook" size={18} color={txtBtnColor2} />
            <Text style={{...styles.btnText, color: txtBtnColor2}}>
              Facebook
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#2D386E"
          onPress={() => ('')}
          onShowUnderlay={() => setTxtBtnColor('#ffff')}
          onHideUnderlay={() => setTxtBtnColor('#2D386E')}
          style={styles.btnWrapper}>
          <View style={styles.button}>
            <Icon name="google" size={18} color={txtBtnColor} />
            <Text style={{...styles.btnText, color: txtBtnColor}}>
              Google
            </Text>
          </View>
        </TouchableHighlight>
    </>
  );
};

const styles = StyleSheet.create({
  btnText: {
    fontFamily: 'Lato',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    width:138,
  },
  btnWrapper: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E9EBEF',
    backgroundColor: '#fff',
    marginBottom:12,
  },

  ContainerOr:{
    marginVertical:28,
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
  },
  OrTitle:{
    fontSize:14,
    color:'#909AAD',
    marginHorizontal:10,
  },
  line:{
    width: 60,
    borderBottomWidth:1,
    borderBottomColor:'#E9EBEF',
    backgroundColor:'#E9EBEF',
  },
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
