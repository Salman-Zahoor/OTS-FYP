import React,{useState,useEffect} from "react";
import { View , Text , TouchableOpacity, ActivityIndicator, TextInput, StyleSheet,Image,Linking} from "react-native"
import firebase from 'firebase';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {vw,vh, primaryColor} from "../../../constants";


const Home=(props)=>{

    useEffect(()=>{
        getUserDetails()

    },[]);

    // Stetes
    const[userDetails,setuserDetails]=useState({})

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

console.log(userDetails.email,"user===>>>");

    
    // console.log("NAMEEE==>",name);
    return(
        <View style={styles.mainview}>
<Grid>
<View style={styles.textview}>
    <Col>
        <Text style={styles.nametxt}>
            Hello</Text>
            <Text style={styles.nametxt}>
             {userDetails.name}</Text>
    </Col>
    <Col style={{marginLeft:125,marginTop:-250}}>
<Image source={require('../../../../assets/Logo.jpg')} style={{width:190,height:190}}/>
</Col>
    </View>
</Grid>

<View style={styles.imagess}>
            <Image source={require('../../../../assets/Home.jpeg')} style={styles.imgstyle}
            />
            </View>

        <View style={styles.innerview}>
        <TouchableOpacity style={[styles.buttonstyle,{marginTop:92}]}
            onPress={() => Linking.openURL(`mailto:${userDetails.email}?subject=Refference Code OTS &body=Refference ${userDetails.refferenceCode} code for OTS app Tenant Login`) }
            title="otsapp@gmail.com" >
                <Text style={styles.signuptxt}>
                    Add New Tenant
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.buttonstyle}
            onPress={()=>props.navigation.navigate("NewRequest")}>
                <Text style={styles.signuptxt}>
                    New Request
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.buttonstyle}
        onPress={()=>props.navigation.navigate("AllTenant")}            >
                <Text style={styles.signuptxt}>
                    All Tenant
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.buttonstyle}
        onPress={()=>props.navigation.navigate("RentSetting")}            >
                <Text style={styles.signuptxt}>
                    Rent Setting
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonstyle}
        onPress={()=>props.navigation.navigate("Account_Details")}            >
                <Text style={styles.signuptxt}>
                    Account Details
                </Text>
            </TouchableOpacity>

            
        </View>

        </View>
    )
}

const styles=StyleSheet.create({
    buttonstyle:{
        alignItems:"center",
        backgroundColor:"#ffcc66",
        marginHorizontal:40,
        marginVertical:10,
        borderRadius:10,
        // marginTop:20,

},
signuptxt:{
    color:"black",
    fontSize:25
},
nametxt:{
    color:"#ffcc66",
    fontSize:25
},
imagess:{
    alignItems:"center",
    marginTop:vh*0.05,
},
imgstyle:{
    height:vh*0.25,
    width:vw*0.90
},

mainview:{
    flex:1,
    backgroundColor:primaryColor,
},
innerview:{
    justifyContent:"center",
    flex:1,
    marginBottom:vh*0.11
},
textview:{
    marginStart:vw*0.10,
    marginTop:vh*0.05,
    width:182
},

inputtxt:{
    marginLeft:10,
    color:"#ffcc66"
}
});

export default Home;