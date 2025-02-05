import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Text } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';



export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          header: () => (
            <Text style={{ textAlign: 'center' }}>
              Home
            </Text>
          )
        }}
      />
      <Tabs.Screen
        name="emotionSelector"
        options={{
          title: 'Emotion Selector',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="heart.fill" color={color} />,
          header: () => (
            <Text style={{ textAlign: 'center' }}>
              Emotion Selector
            </Text>
          )
        }}
      />
      <Tabs.Screen
        name="scenarios"
        options={{
          title: 'Scenarios',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="rectangle.grid.2x2" color={color} />,
          header: () => (
            <Text style={{ textAlign: 'center' }}>
              Scenarios
            </Text>
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'My Account',
          tabBarIcon: ({ color, focused }) => <IconSymbol size={28} name="person.fill" color={color} />,
          header: () => (
            <Text style={{ textAlign: 'center' }}>
              My Account
            </Text>
          )
        }}
      />
    </Tabs>
  );
}
