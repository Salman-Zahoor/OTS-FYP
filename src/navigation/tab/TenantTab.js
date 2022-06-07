import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../../containers/app/LandlordApp/Profile';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack';
import TenantHome from '../../containers/app/TenantApp/TenantHome';
import Agreement from '../../containers/app/TenantApp/Agreement';
import Bill from '../../containers/app/TenantApp/Previousbills';
import OnlinePayment from '../../containers/app/TenantApp/Online_Payment';
import IntroPage from '../../containers/app/TenantApp/IntroPage';
import Register from '../../containers/app/TenantApp/Register'
// import DateWiseBill from '../../containers/app/DateWiseBill';
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();


const TenantStack=()=>{
  return (
    <Stack.Navigator>

      {/* <Stack.Screen name="Agreement" component={Agreement} 
      options={{
        headerShown:false
      }}
      /> */}
      {/* <Stack.Screen name="TenantRegister" component={TenantRegister} 
      options={{
        headerShown:false
      }}
      /> */}
        <Stack.Screen name="IntroPage" component={IntroPage} 
      options={{
        headerShown:false
      }}
      />
      
      <Stack.Screen name="TenantHome" component={TenantHome} 
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen name="Agreement" component={Agreement} 
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen name="Bill" component={Bill} 
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen name="OnlinePayment" component={OnlinePayment} 
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen name="Register" component={Register} 
      options={{
        headerShown:false
      }}
      />
      
      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    
      <Tab.Navigator>

        <Tab.Screen 
        options={{tabBarIcon:()=> <Entypo size={30} 
        name="user" color="black"/>}}
        
         name="TenantHome" component={TenantStack} />

        {/* <Tab.Screen 
        options={{tabBarIcon:()=> <Entypo size={30} name="user" color="black"/>}}
         name="Agreement" component={Agreement} /> */}

        <Tab.Screen 
        options={{tabBarIcon:()=> <Entypo size={30} name="home" color="black"/>}}
         name="Home" component={TenantHome} />

        <Tab.Screen
        options={{tabBarIcon:()=> 
        <MaterialCommunityIcons
          size={30}
           name="face-profile" 
           color="black"/>}}
         name="Profile" component={Profile} />

      

      </Tab.Navigator>
  );
}
