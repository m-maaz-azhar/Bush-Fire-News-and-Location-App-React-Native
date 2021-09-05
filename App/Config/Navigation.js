import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BushFire from '../Screens/BushFire';
import Home from '../Screens/Home';

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'News') {
              iconName = focused ? 'ios-newspaper' : 'ios-newspaper-outline';
            } else if (route.name === 'Map') {
              iconName = focused ? 'ios-map' : 'ios-map-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          options={{
            headerStyle: {
              backgroundColor: 'tomato',
            },
            headerTintColor: '#fff',
          }}
          name="News"
          component={Home}
        />
        <Tab.Screen
          options={{
            headerStyle: {
              backgroundColor: 'tomato',
            },
            headerTintColor: '#fff',
          }}
          name="Map"
          component={BushFire}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
