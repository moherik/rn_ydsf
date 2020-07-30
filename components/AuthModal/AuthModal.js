import * as React from 'react';
import {View, ScrollView, Image, StyleSheet, SafeAreaView, Modal, ActivityIndicator} from 'react-native';

import Login from './Login';
import Verif from './Verif';

const logo = require('../../assets/logo.png');

const AuthModal = () => {
  const [phone, setPhone] = React.useState(null);
  const [verif, setVerif] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <Modal visible={loading} transparent={true}>
        <View style={{backgroundColor: '#00000040', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <View style={{backgroundColor: '#fff', padding: 10, borderRadius: 8}}>
            <ActivityIndicator size={30} animating={loading}/>
          </View>
        </View>
      </Modal>

      <ScrollView>
        <View style={styles.container}>
          <Image source={logo} style={styles.image} />
          {!verif ? (
            <Login phone={phone} verif={verif} setVerif={setVerif} setPhone={setPhone} setLoading={setLoading} />
          ) : (
            <Verif phone={phone} verif={verif} setVerif={setVerif} setPhone={setPhone} setLoading={setLoading} />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50,
  },
  image: {
    width: 125,
    height: 55,
    resizeMode: 'stretch',
  },
});

export default AuthModal;
