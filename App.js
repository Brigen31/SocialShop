// App.js
import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Un from './screens/Un';
import Deux from './screens/Deux';
import Trois from './screens/Trois';
import Quatre from './screens/Quatre';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Un') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Deux') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Trois') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#55a3dcff',
        inactiveTintColor: '#808080',
      }}>
      <Tab.Screen name="Un" component={Un} options={{ headerShown: false }}/> // cacher l'entete
      <Tab.Screen name="Deux" component={Deux} />
      <Tab.Screen name="Trois" component={Trois} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <View style={{ flex: 1, paddingTop: 50, backgroundColor: '#FFFFFF' }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Un"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Quatre"
            component={Quatre}
            options={{ headerBackTitleVisible: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
