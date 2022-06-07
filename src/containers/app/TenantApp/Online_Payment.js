import React,{useState,useEffect} from "react";
import { View , Text , TouchableOpacity, ActivityIndicator, TextInput, StyleSheet,Image} from "react-native"
import firebase from 'firebase';
import {vw,vh, primaryColor} from "../../../constants";
import { Col, Row, Grid } from 'react-native-easy-grid';
const OnlinePayment=(props)=>{
   const[userDetails,setuserDetails]=useState({})
    const[AccountDetail,setAccountDetails]=useState({})
    useEffect(()=>{
        getAccountDetails()

    },[]);
    useEffect(()=>{
        getUserDetails()

    },[]);

    const getUserDetails=()=>{
        let id=firebase.auth().currentUser.uid
        firebase.database().ref(`userss/${id}`)
        .on("value",snapshotttt =>{
        //  console.log(id,"IDDDDD");
            // console.log(snapshotttt.val(),"Valuee");
            setuserDetails(snapshotttt.val())
        })
    }

  const getAccountDetails=()=>{
    firebase.database().ref(`AccountDetail`)
    .on("value",snapshotttt =>{
        console.log(snapshotttt.val(),"snappppp");
        let data=snapshotttt.val()?snapshotttt.val():{}
        setAccountDetails(data)
        
    })
}
    console.log(AccountDetail,"object");
    let mykeys=Object.keys(AccountDetail)
    console.log(mykeys,"keys");

    return(
<View style={styles.MainView}>
    {mykeys.map(values=>{
        if (AccountDetail[values].landlordRef==userDetails.RefferenceCode ) {
            return(
                <>
                <View style={{flex:1}}>
           <Grid>
                <Col style={{marginLeft:25,marginTop:35}}>
            <Text style={styles.nametxt}>
            Hello</Text>
            <Text style={styles.nametxt}>
             {userDetails.name}</Text>
             </Col>
             <Col style={{marginLeft:-50,marginTop:-10}}>
            <Image source={require('../../../../assets/Logo.jpg')} style={styles.logo} />
            </Col>
            </Grid>
</View>
   <View style={{flex:2,justifyContent:'center'}}>
       <Text style={{color:'#ffcc66',fontSize:24,textAlign:'center',textDecorationLine:'underline'}}>Account Detail</Text>
<Text style={{color:'#ffcc66',textAlign:'center'}}>Card Number:<Text style={{color:'white',fontSize:24}}>{AccountDetail[values].Cardnumber}</Text></Text>
<Text style={{color:'#ffcc66',textAlign:'center'}}>Bank Name:<Text style={{color:'white',fontSize:24}}>{AccountDetail[values].BankName}</Text></Text>
<Text style={{color:'#ffcc66',textAlign:'center'}}>IBAN Number:<Text style={{color:'white',fontSize:24}}>{AccountDetail[values].IBAN}</Text></Text>
   </View>
   </>
            )

        } else {
            return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                {/* <Text style={{color:'white',textAlign:'center'}}>
                    No data found
                </Text> */}
            </View>
            )
        }
                })}
    
   </View>
    )
}



const styles=StyleSheet.create({
    MainView:{
        flex:1,
        backgroundColor:primaryColor
    },
    Logo:{
        width:190,
        height:190
    },
   
smallView:{
    alignItems:'center'
},

    Btn:{
        color:'white',
        marginTop:-62,
        paddingTop:12,
        textAlign:'center',
        fontSize:28,
        fontWeight:'bold',
        backgroundColor:'#ffcc66',
        borderWidth:2,
    borderRadius:22
},
nametxt:{
    color:"#ffcc66",
    fontSize:25
},
logo: {
    width: 120,
    height: 150
},
})
export default OnlinePayment;
