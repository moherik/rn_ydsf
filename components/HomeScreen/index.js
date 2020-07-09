import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeFeed from './HomeFeed';
import DetailProgram from './DetailProgram';

const Stack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeFeed" component={HomeFeed} />
      <Stack.Screen name="DetailProgram" component={DetailProgram} />
    </Stack.Navigator>
  );
};

export default HomeStackScreen;
