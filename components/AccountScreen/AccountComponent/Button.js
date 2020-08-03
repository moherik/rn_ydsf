import * as React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {Icon} from '@up-shared/IconComponents';

import {AuthContext} from '../../../store';

const Button = () => {
  const dispatch = React.useContext(AuthContext.Dispatch);

  return (
    <TouchableHighlight
      underlayColor="#ff606033"
      onPress={() => dispatch({type: 'SIGN_OUT'})}
      style={styles.WrapperButton}>
      <View style={styles.Button}>
        <Icon name="power_off" size={20} color="#FF6060" />
        <Text style={styles.TextButton}>Logout Account</Text>
      </View>
    </TouchableHighlight>
  );
};

export default Button;

const styles = StyleSheet.create({
  WrapperButton: {
    borderRadius: 80,
    borderWidth: 1,
    borderColor: '#FF6060',
    backgroundColor: '#fff',
    marginHorizontal: '25%',
    position: 'absolute',
    bottom: 16,
  },
  TextButton: {
    fontFamily: 'Lato',
    fontSize: 16,
    color: '#FF6060',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  Button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 10,
  },
});
