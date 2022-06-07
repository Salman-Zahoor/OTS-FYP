import React,{useState,useEffect} from "react";
import { View , Text , TouchableOpacity, ActivityIndicator, TextInput, StyleSheet,Image} from "react-native"
import firebase from 'firebase';
import {vw,vh, primaryColor} from "../../../constants"
import { Col, Row, Grid } from 'react-native-easy-grid';
const NewRequest=({navigation})=>{

    useEffect(()=>{
        getUserDetails()
        getNewReq()
    },[]);

    // Stetes
    const[userDetails,setuserDetails]=useState({})
    const [array,setArray]=useState({})

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

const getNewReq=()=>{
    firebase.database().ref("TenantRegistration")
    .on("value",snapshot=>{
        // console.log(snapshot.val());
        setArray(snapshot.val())
    })
}
console.log(array,"Data");

const keys=array?Object.keys(array):[]
    console.log(keys,"keys");
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
    <Col style={{marginLeft:82,marginTop:-70}}>
<Image source={require('../../../../assets/Logo.jpg')} style={{width:190,height:190}}/>
</Col>
    </View>
</Grid>


        <View style={styles.innerview}>

            {
              keys.length> 0 ?  keys.map(values=>{
               if(array[values].MyRefferenceCode==userDetails.refferenceCode && array[values].isAccepted==null){
                return(
                    <View style={{margin:35}}>
                        <Text style={{color:"white"}}>New Request</Text>
                        <TouchableOpacity
                        onPress={() => navigation.navigate("RequestDetail", {
                            request: array[values],
                            firebaseKey: values
                        })}
                        style={styles.buttonstyle}
                        >
                        <Text style={{color:"white",fontSize:24}}>
                            {array[values].firstName}
                        </Text>
                        </TouchableOpacity>
                    </View>
                )
            }else {
                <View></View>
            }
                })
                :
                <View>
                    <Text>No Request Found</Text>
                </View>
            }
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
        marginTop:-200,
        height:50,
        paddingTop:10,
},
signuptxt:{
    color:"black",
    fontSize:25
},
nametxt:{
    color:"#ffcc66",
    fontSize:25,
},
imagess:{
    alignItems:"center",
    marginTop:vh*0.08,
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
    // justifyContent:"center",
    flex:1,
    // marginBottom:vh*0.15,
    marginTop:205
},
textview:{
    marginStart:vw*0.10,
    marginTop:vh*0.05,
    width:252
},

inputtxt:{
    marginLeft:10,
    color:"#ffcc66"
}
});

export default NewRequest