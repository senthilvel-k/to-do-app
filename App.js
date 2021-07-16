import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import TodoScreen from './src/Todo';
import HomeScreen from './src/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default AppStack = () =>
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'My Todo',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'blue'
          }
        }}
      />
      <Stack.Screen
        name="TodoScreen"
        component={TodoScreen}
        options={{
          title: '',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'blue'
          }
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>