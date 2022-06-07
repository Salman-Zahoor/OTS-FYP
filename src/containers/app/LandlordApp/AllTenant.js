import React, {useEffect,useState} from 'react';
import {View, Text,StyleSheet, TouchableOpacity,Image,ScrollView,Button} from "react-native";
import firebase from 'firebase';
import Tnaent1 from './Tanent1';
import In_Flat from '../../../containers/app/LandlordApp/In_Flat';
import { primaryColor } from '../../../constants';

const AllTenant=(props)=>{
    const[tanent,setTanent]=useState([]);    
    const[userDetails,setuserDetails]=useState({})

    useEffect(()=>{
        firebase.database().ref("TenantRegistration")
        .once("value",(snapshot)=>{
            // console.log(snapshot.val(),"SSSSSSSSSSSSSSSSSSSSSS=>>>>>");
            let mydata=snapshot.val()?snapshot.val():{}
            setTanent(mydata)
        })
    },[])

    useEffect(()=>{
        getUserDetails()
    },[])



    const getUserDetails=()=>{
 let id=firebase.auth().currentUser.uid
 firebase.database().ref(`userss/${id}`)
 .on("value",snapshotttt =>{
 //  console.log(id,"IDDDDD");
     // console.log(snapshotttt.val(),"Valuee");
     setuserDetails(snapshotttt.val())
 })
}

console.log(userDetails.refferenceCode,"user===>>>");

    const mykeys=tanent ? Object.keys(tanent):[]
    console.log(mykeys,"KEEEEEEESSS");
    
    return(
        <View style={styles.View1}>
        <Image source={require('../../../../assets/Logo.jpg')} style={styles.logo}/>
        <Text style={styles.Heading}>My All Tenants</Text>
    
        {mykeys.map(values => {
            if (tanent[values].isAccepted==true &&tanent[values].MyRefferenceCode==userDetails.refferenceCode) {
                return(        
                    
                    <TouchableOpacity onPress={()=>props.navigation.navigate("In_Flat",{
                        activeKey:values,
                        data:tanent[values]    
                    }
                    )}>
                    <Text style={styles.btn}>{tanent[values].firstName} </Text>
                </TouchableOpacity>     
     )        
            }
        
        }
        )}
        
        </View>
    )
}
    
const styles=StyleSheet.create({
   View1:{
       flex:1,
       backgroundColor:primaryColor,
       alignItems:'center'
   },
   logo:{
       width:120,
       height:150,
   },
   Heading:{
       color:'#ffcc66',
       fontSize:24,
       fontWeight:'bold',
   },
   btn:{
       color:'white',
       backgroundColor:'#ffcc66',
       marginTop:22,
       width:122,
       height:42,
       textAlign:'center',
       paddingTop:5,
       fontWeight:'bold',
       fontSize:18,
       borderWidth:2,
       borderRadius:22,
       
   }

});
export default AllTenant