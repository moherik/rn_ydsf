import * as React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {Icon} from '@up-shared/IconComponents';

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const TopNotification = () => {
  return (
    <View style={styles.container}>
      <View style={styles.RowCenter}>
        <Image
          source={require('../../../assets/logo.png')}
          style={{width: 70, height: 32}}
        />
        <TouchableOpacity>
          <Icon name="bell" size={24} color="#909AAD" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 10,
    flex: 1,
    backgroundColor: '#fff',
  },
  RowCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default TopNotification;
