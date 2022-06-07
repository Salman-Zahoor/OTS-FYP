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
import { Col, Row, Grid } from 'react-native-easy-grid';
import { globaltextcolor, vh, vw } from "../../../constants";


const PrevoiusBills=(props)=>{
    useEffect(()=>{
        getPreviousbills()
        // getLandlordRegistrationDetails()
    },[]);

    useEffect(()=>{
        getRentSetting()
    
    },[]);
    const getRentSetting=()=>{
        firebase.database().ref(`RentSetting`)
        .on("value",snapshotttt =>{
            snapshotttt.forEach(innerproval =>{
            console.log(innerproval,"Innner  RentSetting");
            setRentSetting(innerproval.val())
            })
        })
    }

    const [valuess,setvaluess]=useState([])
    const [RentSetting,setRentSetting]=useState('')
    // const[array,setArray]=useState([])
    const getPreviousbills=()=>{
        let tempArray=[]
        firebase.database().ref(`UploadBill`)
        .on("value",snapshotttt =>{
            snapshotttt.forEach(innerproval =>{
                innerproval.forEach(value =>{
                    tempArray.push(value.val())
                    })
                    setvaluess(tempArray)
 
            })
            
        })
    }
    let currentUser=firebase.auth().currentUser.uid
    console.log(currentUser,"MY IDDDDDDDDDD");
    // console.log(valuess,"BIll Data=============>");
    return(
    <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center' }}>
        {valuess.map(value =>{
            if(value.tenantId==currentUser){
            return(
            <ScrollView>
        <View>
         <Text style={styles.DateHeading}>Date:{value.date}</Text>  
         </View>
         <View>
<Grid>
    {/* <Col style={{width:172}}>
    <Text></Text>
        <Text style={styles.BillHeading}>MonthlyRent<Text style={styles.BillTxt}>{valuess.MonthlyRent}</Text></Text>
        <Text style={styles.BillHeading}>Maintainence Charges<Text style={styles.BillTxt}>{value.Maintainence}</Text></Text>
        <Text></Text>
        <Text style={styles.BillHeading}>Security      Charges:<Text style={styles.BillTxt}>{value.MonthlyRent}</Text></Text>
        <Text style={styles.BillHeading}>Trash          Charges:<Text style={styles.BillTxt}>{value.MonthlyRent}</Text></Text>
    </Col> */}
    <Col style={{width:172,marginTop:8}}>
        <Text style={{color:'#ffcc66',textAlign:'center'}}>K-Electric</Text>
        <Text style={styles.BillHeading}>Current Reading:<Text style={styles.BillTxt}>{value.CurrentReadingk}</Text></Text>
        <Text style={styles.BillHeading}>Previous  Reading:<Text style={styles.BillTxt}>{value.PreviousReadingk}</Text></Text>
        <Text style={styles.BillHeading}>Per Unit:<Text style={styles.BillTxt}>{value.Unit}</Text></Text>
        </Col>
        <Col style={{width:172,marginTop:8}}>
        <Text style={{color:'#ffcc66',textAlign:'center'}}>SSGC</Text>
        <Text style={styles.BillHeading}>Current Reading:<Text style={styles.BillTxt}>{value.CurrentReadings}</Text></Text>
        <Text style={styles.BillHeading}>Previous   Reading:<Text style={styles.BillTxt}>{value.PreviousReadingS}</Text></Text>
        <Text style={styles.BillHeading}>Per Unit:<Text style={styles.BillTxt}>{value.SSGUnit}</Text></Text>
    </Col>           
</Grid>

<Grid>
    <Col>
<Text style={{color:'#ffcc66',textAlign:'center'}}>Monthly Rent</Text>
    <Text style={styles.BillHeading}>Monthly Rent:<Text style={styles.BillTxt}>{RentSetting.MonthlyRent}</Text></Text>
</Col>
<Col>
<Text style={{color:'#ffcc66',textAlign:'center'}}></Text>
<Text style={styles.BillHeading}>Security Charges:<Text style={styles.BillTxt}>{RentSetting.SecurityCharges}</Text></Text>
</Col>
</Grid>
<Grid>
<Col>
<Text style={styles.BillHeading}>Trash Charges:<Text style={styles.BillTxt}>{RentSetting.TrashCharges}</Text></Text>
</Col>
<Col>
<Text style={styles.BillHeading}>Advance:<Text style={styles.BillTxt}>{RentSetting.Advance}</Text></Text>
</Col>
</Grid>
<Grid>
<Col>
<Text style={styles.BillHeading}>Maintanance Charges:<Text style={styles.BillTxt}>{RentSetting.MaintananceCharges}</Text></Text>
</Col>
</Grid>

         </View>
         <Text style={{color:'#ffcc66',fontSize:24,textAlign:'center'}}>Total Bill:{value.gtotal}</Text>
         </ScrollView>
            )}
            })} 
        {/*
        {/*  */}
        {/* <Text style={{color:"black"}}>Total:{array.total}</Text> */}
        {/* <Text style={{color:"black"}}>Total:{array.unit}</Text>
       
        {/* <Text style={{color:"black",backgroundColor:'yellow'}}>Date:{getBills.date}</Text>
        <Text style={{color:"black"}}>Bill:{array.gtotal}</Text> */}
        {/* <Text style={{color:"black"}}>Total:{getBills.total}</Text> */}
        {/* <Text style={{color:"black"}}>Total:{getBills.unit}</Text> */}
    </View>
    )
}
const styles=StyleSheet.create({
    logo: {
        width: 120,
        height: 150
    },
    DateHeading:{
        color:"white",
        backgroundColor:'#ffcc66',
        width:365,
        fontSize:24,
        textAlign:'center'
    },
    BillHeading:{
        color:'white',
        fontSize:18,
        borderBottomWidth:2,
        borderBottomColor:'white'
    },
    BillTxt:{
        color:'#ffcc66',
        fontSize:14
    }
})

export default PrevoiusBills;