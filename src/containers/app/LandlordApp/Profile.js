import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView
        } from "react-native";
import firebase from "firebase";
import { globaltextcolor, primaryColor, vh, vw } from "../../../constants";

const Profile=()=>{

    useEffect(()=>{
        getUserDetails()
        getProducts()

    },[]);

const[userDetails,setuserDetails]=useState({})
const[userProperty,setUserProperty]=useState([])

const getUserDetails=()=>{
    let id=firebase.auth().currentUser.uid
    firebase.database().ref(`userss/${id}`)
    .on("value",snapshotttt =>{
   
        setuserDetails(snapshotttt.val())
    })
}

const getProducts=()=>{
    let id=firebase.auth().currentUser.uid
    firebase.database().ref(`PropertyRegistration/${id}`)
    .on("value",snapshot=>{
       
        let data=snapshot.val() ?snapshot.val() : {}
        setUserProperty(data)
    })

}

const logOut=()=>{
    firebase.auth().signOut()
}

let keys=Object.keys(userProperty)

return(
    <ScrollView style={styles.mainvie}>
<View style={styles.headingview}>
        <Text style={styles.heading}>
        Profile
        </Text>
    </View>
    <View>
        <Image source={require('../../../../assets/Logo.jpg')} style={{ marginLeft:72,height:vh*0.35,width:vw*0.65}}/>
    </View>


    <View style={styles.textview}>
        <Text style={styles.text}>
            Name: {userDetails.name}</Text>
    </View>

    <View style={styles.textview}>
        <Text style={styles.text}>
            Email: {userDetails.email}</Text>
    </View>

    <View style={styles.textview}>
        <Text style={styles.text}>
            Active Status:{userDetails.isActive}</Text>
    </View>

    <TouchableOpacity onPress={logOut}
    style={styles.button}>
            <Text style={styles.buttontxt}>
                LogOut
            </Text>
        </TouchableOpacity>
    </ScrollView>
)
}
const styles=StyleSheet.create({
    mainvie:{
        flex:1,
        backgroundColor:primaryColor
    },
    textview:{
        marginLeft:vw*0.05,
        marginVertical:vh*0.01,
        borderBottomWidth:1,
        borderBottomColor:"#ffcc66"

    },
    headingview:{
        alignItems:"center",
        marginTop:vh*0.02

    },
    heading:{
        fontSize:30,
        color:"#ffcc66"
    },
    text:{
        color:"#ffcc66",
        fontSize:19,
    },
    button:{
        alignItems:"center",
        backgroundColor:"#ffcc66",
        marginHorizontal:60,
        marginVertical:10,
        borderRadius:50,
        marginTop:30,
        height:40
    },
    buttontxt:{
    color:"white",
    fontSize:25,
    fontWeight:'bold',
    justifyContent:"center",
    textAlign:"center"
    },
cartstyle:{
    flex:1,
    marginTop:10,
    marginHorizontal:20,
    borderWidth:1,
    borderRadius:10,
    backgroundColor:"#ffcc66",
    flexDirection:"row"
},
textstyle:{
    color:"black",
    fontSize:16,
    marginLeft:10,
    fontWeight:"bold",
    marginVertical:2
},
imagestyle:{
    height:100,
    width:100,
    marginTop:10,
    marginLeft:10,
    borderRadius:10
},
detailstyle:{
    flex:1,
    flexDirection:"column",
    paddingVertical:10,   
},
dlt:{
    alignItems:"flex-end",
    justifyContent:"center",
    },
dltext:{
    color:"red",
    marginRight:vw*0.02
}    
    
});
export default Profile 