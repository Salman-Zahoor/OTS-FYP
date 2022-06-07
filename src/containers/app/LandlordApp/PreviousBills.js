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
import { globaltextcolor, primaryColor, vh, vw } from "../../../constants";


const PrevoiusBills=({route})=>{

    const user=route.params
    const id=user.activeUser
    const[array,setArray]=useState([])
        useEffect(() =>{
            let tempArray=[]
            let id=firebase.auth().currentUser.uid
            firebase.database().ref(`UploadBill/${id}`)
            .on("value", snapshot =>{
                snapshot.forEach(innerproval =>{
                        tempArray.push(innerproval.val())
                    })
                setArray(tempArray)
            })
        },[])
  
    return(
    <View style={{ flex: 1, backgroundColor: primaryColor, alignItems: 'center' }}>
        {/* <Image source={require('../../../assets/Logo.jpg')} style={styles.logo}/> */}
        <Text style={{color:'#ffcc66',fontSize:24,fontWeight:'bold'}}>PrevoiusBills</Text>
        {array.map(valuess =>{
            if(id==valuess.tenantId){
                return(
                    <ScrollView>
                <View>
                 <Text style={styles.DateHeading}>Date:{valuess.date}</Text>  
                 </View>
                 <View>
        <Grid>
            {/* <Col style={{width:172}}>
            <Text></Text>
                <Text style={styles.BillHeading}>MonthlyRent<Text style={styles.BillTxt}>{valuess.MonthlyRent}</Text></Text>
                <Text style={styles.BillHeading}>Maintainence Charges<Text style={styles.BillTxt}>{valuess.Maintainence}</Text></Text>
                <Text></Text>
                <Text style={styles.BillHeading}>Security      Charges:<Text style={styles.BillTxt}>{valuess.MonthlyRent}</Text></Text>
                <Text style={styles.BillHeading}>Trash          Charges:<Text style={styles.BillTxt}>{valuess.MonthlyRent}</Text></Text>
            </Col> */}
            <Col style={{width:172,marginTop:8,borderRightWidth:2,borderRightColor:'#ffcc66'}}>
                <Text style={{color:'#ffcc66',textAlign:'center'}}>K-Electric</Text>
                <Text style={styles.BillHeading}>Current Reading:<Text style={styles.BillTxt}>{valuess.CurrentReadingk}</Text></Text>
                <Text style={styles.BillHeading}>Previous  Reading:<Text style={styles.BillTxt}>{valuess.PreviousReadingk}</Text></Text>
                <Text style={styles.BillHeading}>Per Unit:<Text style={styles.BillTxt}>{valuess.Unit}</Text></Text>
                </Col>
                <Col style={{width:172,marginTop:8}}>
                <Text style={{color:'#ffcc66',textAlign:'center'}}>SSGC</Text>
                <Text style={styles.BillHeading}>Current Reading:<Text style={styles.BillTxt}>{valuess.CurrentReadings}</Text></Text>
                <Text style={styles.BillHeading}>Previous   Reading:<Text style={styles.BillTxt}>{valuess.PreviousReadings}</Text></Text>
                <Text style={styles.BillHeading}>Per Unit:<Text style={styles.BillTxt}>{valuess.SSGUnit}</Text></Text>
            </Col>            
        </Grid>
        <Text style={styles.BillHeading}>MonthlyRent:<Text style={styles.BillTxt}>{valuess.Monthlyrent}</Text></Text>
        <Text style={{color:'#ffcc66',fontSize:24,textAlign:'center'}}>Total Bill:{valuess.gtotal}</Text>
                 </View>
                 </ScrollView>
                    ) 
            }
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

export default PrevoiusBills