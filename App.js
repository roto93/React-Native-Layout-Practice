import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './src/Screens/StartScreen/StartScreen';
import MainScreen from './src/Screens/MainScreen/MainScreen';
import { useFonts, Roboto_400Regular, Roboto_300Light, Roboto_500Medium } from '@expo-google-fonts/roboto';

const Stack = createStackNavigator();

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
      <Stack.Navigator
        screenOptions={{ headerLeft: () => <TouchableOpacity onPress={() => { setStart(false) }} style={{ width: 50, height: 50, backgroundColor: 'gold' }}></TouchableOpacity> }}
      >
        <Stack.Screen name={'Main'} component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App