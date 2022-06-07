import React,{useState,useEffect} from "react";
import { View , Text , TouchableOpacity, ActivityIndicator, TextInput, StyleSheet,Image} from "react-native"
import firebase from 'firebase';
import {vw,vh, primaryColor} from "../../../constants";
import { Col, Row, Grid } from 'react-native-easy-grid';
const TenantHome=(props)=>{
    useEffect(()=>{
        getUserDetails()

    },[]);
    useEffect(()=>{
        getAccountDetails()

    },[]);
    // Stetes
    const[userDetails,setuserDetails]=useState({})
    const[AccountDetail,setAccountDetails]=useState({})

    // User details fetching fnc
const getUserDetails=()=>{
    let id=firebase.auth().currentUser.uid
    firebase.database().ref(`userss/${id}`)
    .on("value",snapshotttt =>{
    //  console.log(id,"IDDDDD");
        // console.log(snapshotttt.val(),"Valuee");
        setuserDetails(snapshotttt.val())
    })
}
console.log(AccountDetail);
const getAccountDetails=()=>{
    firebase.database().ref(`AccountDetail`)
    .on("value",snapshotttt =>{
        snapshotttt.forEach(innerproval =>{
        console.log(innerproval,"Innner  Account");
        setAccountDetails(innerproval.val())
        })
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
{/* <Text style={styles.Heading}>javed samejo</Text> */}

    <Grid style={{marginTop:25}}>
    <Col style={{width:120,height:120,margin:6}}>
<TouchableOpacity onPress={()=>props.navigation.navigate("Agreement")}>
    <Image source={require('../../../../assets/agreement.jpg')} style={{width:120,height:120}}/>
    <Text style={{color:'white'}}>Agreement</Text>
</TouchableOpacity>
    </Col>
    <Col style={{width:120,height:120,margin:6}}>
<TouchableOpacity>
    <Image source={require('../../../../assets/FlatPic.jpeg')} style={{width:120,height:120}}/>
    <Text style={{color:'white'}}>Flat Condition</Text>
</TouchableOpacity>
    </Col>
    </Grid>

    <Grid style={{marginTop:150}}>
    <Col style={{width:120,height:120,margin:6}}>
<TouchableOpacity onPress={()=>props.navigation.navigate("Bill")}>
    <Image source={require('../../../../assets/PreviousBills.png')} style={{width:120,height:120}}/>
    <Text style={{color:'white'}}>My Bill</Text>
</TouchableOpacity>
    </Col>

    <Col style={{width:120,height:120,margin:6}}>
<TouchableOpacity onPress={()=>props.navigation.navigate("OnlinePayment")}>
    <Image source={require('../../../../assets/uploadbills.png')} style={{width:120,height:120}}/>
    <Text style={{color:'white'}}>Online Payment</Text>
</TouchableOpacity>
    </Col>
    
    </Grid>
    
        </View>

</View>
    )
}

const styles=StyleSheet.create({
   MainView:{
        flex:1,
        backgroundColor:primaryColor,
    
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
});

export default TenantHome
