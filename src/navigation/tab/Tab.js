import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../../containers/app/LandlordApp/Profile';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../containers/app/LandlordApp/home';
import AllTenant from '../../containers/app/LandlordApp/AllTenant';
import NewRequest from '../../containers/app/LandlordApp/NewRequest';
import Tnaent1 from '../../containers/app/LandlordApp/Tanent1';
import Register from '../../containers/app/LandlordApp/Register';
import Account_Details from '../../containers/app/LandlordApp/Account_Details';
import In_Flat from '../../containers/app/LandlordApp/In_Flat';
import UploadBill from '../../containers/app/LandlordApp/UploadBill';
import PrevoiusBills from '../../containers/app/LandlordApp/PreviousBills';
import Camera from '../../containers/app/LandlordApp/Camera';
import RequestDetail from '../../containers/app/LandlordApp/RequestDetail';
import agreement from '../../containers/app/LandlordApp/agreement';
import RentSetting from '../../containers/app/LandlordApp/RentSetting';
import NewTenant from '../../containers/app/LandlordApp/NewTenant';
import Conversation from "../../containers/app/LandlordApp/chat/Conversation"
import ChatNow from "../../containers/app/LandlordApp/chat/chatNow"
// import DateWiseBill from '../../containers/app/DateWiseBill';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()


const HomeStack=()=>{
  return (
    <Stack.Navigator>

      <Stack.Screen name="Home" component={Home} 
      options={{
        headerShown:false
      }}
      />

      <Stack.Screen name="AllTenant" component={AllTenant} 
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen name="NewRequest" component={NewRequest} 
      options={{
        headerShown:false
      }}
      />
            <Stack.Screen name="Tnaent1" component={Tnaent1} 
      options={{
        headerShown:false
      }}
      />
            <Stack.Screen name="Account_Details" component={Account_Details} 
      options={{
        headerShown:false
      }}
      />
            <Stack.Screen name="RentSetting" component={RentSetting} 
      options={{
        headerShown:false
      }}
      />
            <Stack.Screen name="In_Flat" component={In_Flat} 
      options={{
        headerShown:false
      }}
      />
            <Stack.Screen name="UploadBill" component={UploadBill} 
      options={{
        headerShown:false
      }}
      />
       <Stack.Screen name="PreviousBills" component={PrevoiusBills} 
      options={{
        headerShown:false
      }}
      />
       <Stack.Screen name="Camera" component={Camera} 
      options={{
        headerShown:false
      }}
      />
       <Stack.Screen name="RequestDetail" component={RequestDetail} 
      options={{
        headerShown:false
      }}
      />
       <Stack.Screen name="agreement" component={agreement} 
      options={{
        headerShown:false
      }}
      />
       <Stack.Screen name="NewTenant" component={NewTenant} 
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen name="ChatNow" component={ChatNow} 
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
      {/* <Tab.Screen 
        options={{tabBarIcon:()=> 
          <Ionicons
            size={30}
             name="add-circle"
             color="black"/>}}
        name="Register" component={Register}/> */}

        <Tab.Screen 
        options={{tabBarIcon:()=> <Entypo size={30} name="home" color="black"/>}}
         name="Home" component={HomeStack} />

        <Tab.Screen
        options={{tabBarIcon:()=> 
        <MaterialCommunityIcons
          size={30}
           name="face-profile" 
           color="black"/>}}
         name="Profile" component={Profile} />

    <Tab.Screen
        options={{tabBarIcon:()=> 
        <MaterialCommunityIcons
          size={30}
           name="face-profile" 
           color="black"/>}}
         name="Conversation" component={Conversation} />

      

      </Tab.Navigator>
  );
}
