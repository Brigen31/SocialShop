// App.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Deux from './Deux';
import Trois from './Trois';
import Login from './Login';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


export default function Menu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Deux') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Trois') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Login') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#55a3dcff',
        inactiveTintColor: '#808080',
      }}>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Tab.Screen name="Deux" component={Deux} options={{ headerShown: false }} />
      <Tab.Screen name="Trois" component={Trois} options={{ headerShown: false }} />
      <Tab.Screen name="Login" component={Login} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
