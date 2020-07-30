import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeFeed from './HomeFeed/HomeFeed';
import DetailProgram from './DetailProgram/DetailProgram';

const Stack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeFeed} 
      options={{headerShown: false}}/>
      <Stack.Screen name="DetailProgram" component={DetailProgram} 
      options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStackScreen;
