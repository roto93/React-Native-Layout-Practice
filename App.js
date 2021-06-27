import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StartScreen from './src/Screens/StartScreen/StartScreen';
import GroupScreen from './src/Screens/GroupScreen/GroupScreen';
import { useFonts, Roboto_400Regular, Roboto_300Light, Roboto_500Medium } from '@expo-google-fonts/roboto';
import * as Tabs from './src/components/TabBarComponents';

const Tab = createBottomTabNavigator()

function App() {
  const [fontLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium
  })
  const [start, setStart] = useState(false);
  if (!fontLoaded) return <AppLoading />
  else if (!start) return <StartScreen setIsStart={setStart} />
  else return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: { position: 'absolute', bottom: 0, borderWidth: 0, height: 56, borderTopLeftRadius: 28, borderTopRightRadius: 28, elevation: 0, }
        }}
      >
        <Tab.Screen name={'Group'} component={GroupScreen} options={{
          tabBarButton: props => <TouchableOpacity {...props} />,
          tabBarIcon: Tabs.GroupTab,
        }} />
        <Tab.Screen name={'Main2'} component={GroupScreen} options={{
          tabBarButton: props => <TouchableOpacity {...props} />,
          tabBarIcon: Tabs.PeerTab
        }} />
        <Tab.Screen name={'Main3'} component={GroupScreen} options={{
          tabBarButton: props => <TouchableOpacity {...props} />,
          tabBarIcon: Tabs.MainTab
        }} />
        <Tab.Screen name={'Main4'} component={GroupScreen} options={{
          tabBarButton: props => <TouchableOpacity {...props} />,
          tabBarIcon: Tabs.ChatTab
        }} />
        <Tab.Screen name={'Main5'} component={GroupScreen} options={{
          tabBarButton: props => <TouchableOpacity {...props} />,
          tabBarIcon: Tabs.ProfileTab
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App