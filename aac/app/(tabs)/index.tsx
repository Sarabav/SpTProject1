// tabs/index.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeScreen';
import EmotionSelector from '../screens/emotionSelector';
import ExploreScreen from './explore';  
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name="EmotionSelector" component={EmotionSelector} options={{ tabBarLabel: 'emotionSelector' }} />
      <Tab.Screen name="Explore" component={ExploreScreen} options={{ tabBarLabel: 'Explore' }} />
    </Tab.Navigator>
  );
}

export default TabNavigator;