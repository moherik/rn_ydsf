import * as React from 'react';
import {View, Text} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import Account from './InsideAccount/AccountViewer';
import EditAccount from './InsideAccount/EditProfile';
import Ebook from './InsideAccount/Ebook';

import {AuthContext} from '../../store';

const Stack = createStackNavigator();

const NeedLoginScreen = () => {
  return (
    <View>
      <Text>Login Dolo</Text>
    </View>
  );
};

const AccountScreen = () => {
  const authState = React.useContext(AuthContext.State);
  console.log(authState);

  return (
    <Stack.Navigator>
      {authState.phone == null ? (
        <>
          <Stack.Screen name="NeedLoginScreen" component={NeedLoginScreen} />
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

export default AccountScreen;
