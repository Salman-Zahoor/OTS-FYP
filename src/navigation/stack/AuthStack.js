import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ForgotPassword from '../../containers/auth/ForgotPassword';
import Login from '../../containers/auth/Login';
import SignUp from '../../containers/auth/Signup';
import Javed from '../../containers/auth/javed';
const Stack = createStackNavigator();

const AuthStack= () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Javed" component={Javed} 
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen name="Login" component={Login} 
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen name="SignUp" component={SignUp} 
      options={{
        headerShown:false
    }}
      />
      

<Stack.Screen name="ForgotPassword" component={ForgotPassword} 
      options={{
        headerShown:false
    }}
      />

    </Stack.Navigator>
  );
}

export default AuthStack