import React, { useState, useEffect } from 'react';
import {LoginPage,RegisterPage,WelcomePage} from '../screens/index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthStack = () => {
  const stack = createNativeStackNavigator();
  const [firstLaunch, setFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setFirstLaunch(true);
      } else {
        setFirstLaunch(false);
      }
    });
  }, []);

  return (
    firstLaunch !== null && (
      <stack.Navigator
        initialRouteName={firstLaunch ? 'WelcomePage' : 'Login'}
        screenOptions={{ headerShown: false }}
      >
        {firstLaunch && (
          <stack.Screen name="WelcomePage" component={WelcomePage} />
        )}
        <stack.Screen name="Login" component={LoginPage} />
        <stack.Screen name="Register" component={RegisterPage} />
      </stack.Navigator>
    )
  );
};

export default AuthStack;
