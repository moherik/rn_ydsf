import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Account from './InsideAccount/AccountViewer';
import EditAccount from './InsideAccount/EditProfile';
import Ebook from './InsideAccount/Ebook';

const Stack = createStackNavigator();

const AccountScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={Account} 
      options={{headerShown: false}}/>
      <Stack.Screen name="EditAccount" component={EditAccount} />
      <Stack.Screen name="Ebook" component={Ebook} />
    </Stack.Navigator>
  );
};

export default AccountScreen;
