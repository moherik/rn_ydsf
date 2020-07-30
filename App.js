import * as React from 'react';
import {Icon} from "@up-shared/IconComponents";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import DonasiScreen from './components/DonasiScreen';
import MitraScreen from './components/MitraScreen';
import AccountScreen from './components/AccountScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'donasi') {
              iconName = focused ? 'wallet' : 'wallet';
            } else if (route.name === 'mitra') {
              iconName = focused ? 'star' : 'star';
            } else if (route.name === 'account') {
              iconName = focused ? 'profile' : 'profile';
            }
            return <Icon name={iconName} size={20} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#48B349',
          inactiveTintColor: '#C7CCD6',
          keyboardHidesTabBar: true,
          tabStyle: {
            paddingVertical: 3
          },
          labelStyle: {
            fontSize: 12,
            fontFamily: 'Lato',
          },
        }}>
        <Tab.Screen name="home" component={HomeScreen} options={{tabBarLabel: 'Beranda'}}/>
        <Tab.Screen name="donasi" component={DonasiScreen} options={{tabBarLabel: 'Donasi Saya'}}/>
        <Tab.Screen name="mitra" component={MitraScreen} options={{tabBarLabel: 'Mitra Donasi'}}/>
        <Tab.Screen name="account" component={AccountScreen} options={{tabBarLabel: 'Account'}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
