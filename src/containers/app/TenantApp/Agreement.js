import React,{useState,useEffect} from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { primaryColor } from "../../../constants";
const Agreement = (props) => {
    useEffect(()=>{
        getRegistrationDetails()
        // getLandlordRegistrationDetails()
    },[]);
    useEffect(()=>{
        // getRegistrationDetails()
        getLandlordRegistrationDetails()
    },[]);

    // Stetes
    const[TenantRegistration,setTenantRegistration]=useState({})
    const[PropertyRegistration,setPropertyRegistration]=useState({})
    // const[PropertyRegistration,setPropertyRegistration]=useState({})
    // User details fetching fnc
const getRegistrationDetails=()=>{
    let id=firebase.auth().currentUser.uid
    firebase.database().ref(`TenantRegistration/${id}`)
    // firebase.database().ref(`PropertyRegistration/${id}`)
    .on("value",snapshotttt =>{
    //  console.log(id,"IDDDDD");
        // console.log(snapshotttt.val(),"Valuee");
        setTenantRegistration(snapshotttt.val())
        // setPropertyRegistration(snapshotttt.val())
    })
}
const getLandlordRegistrationDetails=()=>{
    firebase.database().ref(`PropertyRegistration`)
    .on("value",snapshotttt =>{
        snapshotttt.forEach(innerproval =>{
        console.log(innerproval,"Innner  Account");
        setPropertyRegistration(innerproval.val())
        })
    })
}
    return (
        <View style={styles.MainView}>
            <View style={{ alignItems: 'center' }}>
                <Image source={require('../../../../assets/Logo.jpg')} style={styles.logo} />
                <Text style={{ color: "#ffcc66", fontSize: 24, fontWeight: 'bold' }}>RENT AGREEMENT</Text>
            </View>
            {/* <Text style={{color:'white',fontSize:22}}>{PropertyRegistration.father}</Text> */}
<Text style={{color:'white'}}>This Rent Agreement is made on this 
    <Text style={styles.pointed}> {PropertyRegistration.date} </Text>
    (date of rent agreement)by 
    <Text style={styles.pointed}>  </Text>
    (name of the landlord)<Text style={styles.pointed}>{PropertyRegistration.firstName} </Text> S/O
    <Text style={styles.pointed}>{PropertyRegistration.fatherName} </Text>
    (father's name of the landlord),Address:
    <Text style={styles.pointed}> {PropertyRegistration.Address} </Text>
    (Residential Address of the landlord)
    </Text>


            <Text style={{color:'white',fontSize:22,margin:5}}>AND</Text>
<Text style={{color:'white'}}>
    The Tenant Mr.
    <Text style={styles.pointed}>{TenantRegistration.firstName} </Text>
    has agreed to let out the 
    <Text style={styles.pointed}> {TenantRegistration.Roomvalue} </Text>
    official room
    <Text style={styles.pointed}> {TenantRegistration.Toiletvalue} </Text>
    toilet&bathroom set on said property,to the tenant has agreed to take the same on rent of Rs.
    <Text style={styles.pointed}>{TenantRegistration.monthlyRent} </Text>
    per month.
    
    We are total 
    <Text style={styles.pointed}> {TenantRegistration.value} </Text>
    Family Members.
    </Text>

<Text style={{color:'#ffcc66',fontWeight:'bold',fontSize:18,marginTop:5}}>Term And Conditions</Text>
<Text style={{color:'white'}}>1. That the Tenant will pay the water and electricity charges on the bases of consumption to the landlord/owner </Text>
<Text style={{color:'white'}}>2. That the Tenant will not be permitted to do a construction in the rented premises. Besides, he/she could do the installation of temporary decoration, wooden partition/cabin, air conditioners etc. without seeking the permission of the landlord.</Text>
<Text style={{color:'white'}}>3. That the Tenant will keep the premises clean and will not involve in any activity that causes problems to neighbours.</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    MainView: {
        flex: 1,
        backgroundColor: primaryColor
    },
    logo: {
        width: 120,
        height: 150,

    },
    pointed:{
        color:'#ffcc66',
        borderBottomWidth:5,
        borderBottomColor:'#ffcc66',
        fontSize:18
    }
})
export default Agreement;