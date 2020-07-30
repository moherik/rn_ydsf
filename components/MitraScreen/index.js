import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import List from './MitraScreen/MitraView';
import DetailMitra from './MitraScreen/DetailMitra';

const Stack = createStackNavigator();

const MitraScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MitraView" component={List} 
      options={{headerShown: false}}/>
      <Stack.Screen name="DetailMitra" component={DetailMitra}
      options={{headerTransparent: true, headerTitle:"",}}/>
    </Stack.Navigator>
    //  headerStyle: {height: 80}
  );
};

export default MitraScreen;
