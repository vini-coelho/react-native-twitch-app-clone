import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

import Colors from './styles/colors';

import ComingSoon from './pages/ComingSoon';
import Following from './pages/Following';
import colors from './styles/colors';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator
      tabBarOptions={{
        style: {
          // height: 80,
          backgroundColor: Colors.primary,
          borderTopWidth: 0
        },
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center'
        },
        // iconStyle: {
        //   flex: 0,
        //   height: 20,
        //   width: 20,
        // },
        labelStyle: {
          fontFamily: 'roboto_400',
          fontSize: 11,
          // marginTop: 5
        },
        inactiveTintColor: Colors.black,
        activeTintColor: colors.purple
      }}
    >
      <Screen name="Following" component={Following} options={{
        tabBarIcon: ({ size, focused }) => (
          <Ionicons 
            name='md-heart'
            size={size}
            color={focused ? Colors.purple : Colors.black}
          />
        )
      }}/>
      <Screen name="Discover" component={ComingSoon} options={{
        tabBarIcon: ({ size, focused }) => (
          <MaterialCommunityIcons 
            name='compass-outline'
            size={size}
            color={focused ? Colors.purple : Colors.black}
          />
        )
      }}/>
      <Screen name="Browse" component={ComingSoon} options={{
        tabBarIcon: ({ size, focused }) => (
          <Ionicons 
            name='md-browsers'
            size={size}
            color={focused ? Colors.purple : Colors.black}
          />
        )
      }}/>
      <Screen name="Esports" component={ComingSoon} options={{
        tabBarIcon: ({ size, focused }) => (
          <MaterialCommunityIcons 
            name='trophy-outline'
            size={size}
            color={focused ? Colors.purple : Colors.black}
          />
        )
      }}/>
    </Navigator>
  </NavigationContainer>
);

export default Routes;
