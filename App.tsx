import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, TouchableOpacity } from 'react-native';
 
import HomeScreen from './src/screens/HomeScreen';
import TestCode from './src/screens/TestCode';
 
const Stack = createNativeStackNavigator();
 
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={'white'}
        barStyle={'dark-content'}
        translucent={false}
      />
      <Stack.Navigator
 
        initialRouteName="Home"
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'black',
          headerStyle: { backgroundColor: 'white' },
          headerShown: false
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="TestCode"
          component={TestCode}
          options={{
            title: 'Profile',
          }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};
 
export default App;
 