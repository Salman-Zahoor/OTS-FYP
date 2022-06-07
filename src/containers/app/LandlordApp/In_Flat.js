import React,{useState,useEffect} from "react";
import { View , Text , TouchableOpacity, ActivityIndicator, TextInput, StyleSheet,Image,Linking} from "react-native"
import firebase from 'firebase';
import {vw,vh, primaryColor} from "../../../constants";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { ScrollView } from "react-native-gesture-handler";

const In_Flat=({route,navigation})=>{
    const[userDetails,setuserDetails]=useState({})
    const[TenantRegistration,setTenantRegistration]=useState({})
    const user =route.params
    const id=user.data.uuid
    useEffect(()=>{
        getUserDetails()
        Tenant()
    },[]);

const getUserDetails=()=>{
    let id=firebase.auth().currentUser.uid
    firebase.database().ref(`userss/${id}`)
    .on("value",snapshotttt =>{
        setuserDetails(snapshotttt.val())
    })
}
const Tenant=()=>{
    firebase.database().ref(`TenantRegistration/${id}`)
    .on("value",snapshotttt =>{
       let data=snapshotttt.val()?snapshotttt.val():{}
        setTenantRegistration(data)
        })
}
const removeTanent=()=>{
    Linking.openURL(`mailto:${TenantRegistration.emailAddress}?Rejection Aleart &body=Sorry Your Request has been rejected  now, you can not sign in to this appliation`)
    .then(res=>{
        console.log(res,"response");
        firebase.database().ref(`TenantRegistration/${id}`).remove()
        navigation.navigate("Home")
    }).catch(err=>{
        console.log(err.messege);
        console.log(err.messege);
    })
}

    return(
<View style={styles.MainView}>
<Text style={styles.nametxt}>
            Hello</Text>
            <Text style={styles.nametxt}>
             {userDetails.name}</Text>

        <View style={{alignItems:'center'}}>
             <Image source={require('../../../../assets/Logo.jpg')} style={styles.logo}/>
    <Grid>
    <Col style={styles.Button}>
<TouchableOpacity onPress={()=>navigation.navigate("agreement",{
     activeUser:id
})}>
    <Image source={require('../../../../assets/agreement.jpg')} style={styles.img}/>
    <Text style={{color:'white'}}>Agreement</Text>
</TouchableOpacity>
    </Col>
    <Col style={styles.Button}>
<TouchableOpacity onPress={()=>navigation.navigate("Camera")}>
    <Image source={require('../../../../assets/FlatPic.jpeg')} style={styles.img}/>
    <Text style={{color:'white'}}>Flat Pics</Text>
</TouchableOpacity>
    </Col>
    </Grid>

    <Grid style={{marginTop:150}}>
    <Col style={styles.Button}>
<TouchableOpacity onPress={()=>navigation.navigate("UploadBill",{
    activeUser:id
})}>
    <Image source={require('../../../../assets/uploadbills.png')} style={styles.img}/>
    <Text style={{color:'white'}}>Upload Bills</Text>
</TouchableOpacity>
    </Col>
    <Col style={styles.Button}>
<TouchableOpacity onPress={()=>navigation.navigate("PreviousBills",{
    activeUser:id
})}>
    <Image source={require('../../../../assets/PreviousBills.png')} style={styles.img}/>
    <Text style={{color:'white'}}>Previous Bills</Text>
</TouchableOpacity>
    </Col>
    </Grid>
        </View>
        <View style={{marginTop:190,marginLeft:110}}>
        
        <TouchableOpacity onPress={removeTanent}>
    <Text style={styles.UnRegister}>Un-Register</Text>
</TouchableOpacity>
        </View>
</View>
    )
}

const styles=StyleSheet.create({
   MainView:{
        flex:1,
        backgroundColor:primaryColor,
    
   },
   UnRegister:{
    color:'black',
    textAlign:'center',
    paddingTop:10,
    backgroundColor:'#ffcc66',
    fontSize:22,
    fontWeight:'bold',
    width:192,
    height:52,
    borderWidth:2,
    borderRadius:2
   },
   Heading:{
        color:'#ffcc66'
   },
   logo:{
       width:120,
       height:150,
     
   },
   nametxt:{
    color:"#ffcc66",
    fontSize:25
},
Button:{
    width:120,
    height:120,
    margin:6
},
img:{
    width:120,
    height:120
}
});

export default In_Flat;