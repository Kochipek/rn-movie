import React from 'react'
import {HomePage,MovieDetailsPage} from '../screens/index'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const UserStack = () => {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
    initialRouteName='Home'
    screenOptions={{headerShown: false}}
    >
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="MovieDetailsPage" component={MovieDetailsPage}/>
    </Stack.Navigator>
  )
  }

export default UserStack

