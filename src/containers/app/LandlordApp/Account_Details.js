import React, * as react from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState , useEffect} from 'react/cjs/react.development';
import firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';
import { primaryColor } from '../../../constants';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {vw,vh} from "../../../constants";
const Account_Details = () => {
    useEffect(()=>{
        getAccountDetails()

    },[]);
    useEffect(()=>{
        getUserDetails()

    },[]);
    let id = firebase.auth().currentUser.uid

    // states 
    const [IBAN, setIBANNum] = useState("")
    const [BankName, setBankName] = useState("")
    const [Cardnumber, setCardNumber] = useState("")
    const[AccountDetail,setAccountDetails]=useState({})
    const[userDetails,setuserDetails]=useState({})
    const submitRecord = () => {
        firebase.database().ref(`AccountDetail/${id}`)
            .set({
                IBAN,
                BankName,
                Cardnumber,
                landlordRef:userDetails.refferenceCode
            })
            .then(response => {
                // console.log(response,"RESSSSSSSSSS");
                setIBANNum("")
                setBankName("")
                setCardNumber("")
                alert('Changed')
            })
            .catch(eror => {
                console.log(eror, "EERRREERRR");
            })
    }

    const getAccountDetails=()=>{
        firebase.database().ref(`AccountDetail/${id}`)
        .on("value",snapshotttt =>{
            // snapshotttt.forEach(innerproval =>{
            // console.log(innerproval,"Innner  Account");
            setAccountDetails(snapshotttt.val())
            // })
        })
    }

    const getUserDetails=()=>{
        let id=firebase.auth().currentUser.uid
        firebase.database().ref(`userss/${id}`)
        .on("value",snapshotttt =>{
        //  console.log(id,"IDDDDD");
            // console.log(snapshotttt.val(),"Valuee");
            setuserDetails(snapshotttt.val())
        })
    }
    return (
        <View style={styles.MainView}>
            <Grid>
                <Col style={{marginLeft:25,marginTop:15}}>
            <Text style={styles.nametxt}>
            Hello</Text>
            <Text style={styles.nametxt}>
             {userDetails.name}</Text>
             </Col>
             <Col style={{marginLeft:-80,marginTop:-10}}>
            <Image source={require('../../../../assets/Logo.jpg')} style={styles.logo} />
            </Col>
            </Grid>
            <ScrollView>
                <Image source={require('../../../../assets/Card.jpg')} style={styles.logo} />
                <Text style={styles.Heading}>Change Account Information</Text>
                <TextInput
                    placeholder='Enter your IBAN Number'
                    placeholderTextColor={'white'}
                    keyboardType='numeric'
                    style={styles.txtField}
                    value={IBAN}
                    onChangeText={(main) => setIBANNum(main)}
                />
                <TextInput
                    placeholder='Enter your Bank Name'
                    placeholderTextColor={'white'}
                    style={styles.txtField}
                    value={BankName}
                    onChangeText={(main) => setBankName(main)}
                />
                <TextInput
                    placeholder='Enter your Card Number'
                    placeholderTextColor={'white'}
                    keyboardType='numeric'
                    style={styles.txtField}
                    value={Cardnumber}
                    onChangeText={(main) => setCardNumber(main)}
                />
                <TouchableOpacity onPress={submitRecord} >
                    <Text style={styles.btn}>Save</Text>
                </TouchableOpacity>
        <View style={{marginTop:10}}>
        <Text style={[styles.Heading,{textAlign:'center'}]}>Current Account</Text>
        <Text style={styles.txt}>Bank Name: <Text style={styles.txtatribute}>{AccountDetail.BankName}</Text></Text>
        <Text style={styles.txt}>IBAN Number:<Text style={styles.txtatribute}>{AccountDetail.IBAN}</Text></Text>
        <Text style={styles.txt}>Card Number:<Text style={styles.txtatribute}>{AccountDetail.Cardnumber}</Text></Text>
</View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    logo: {
        width: 120,
        height: 150
    },
    txtField: {
        borderBottomWidth: 2,
        borderBottomColor: '#ffcc66',
        width: 275,
        color: 'white'

    },
    btn: {
        marginTop: 22,
        marginLeft:32,
        color: 'white',
        fontSize: 27,
        width: 215,
        borderWidth: 2,
        borderRadius: 15,
        textAlign: 'center',
        backgroundColor: '#ffcc66'
    },
    MainView:
    { flex: 1, 
        backgroundColor: 'black',
         alignItems: 'center',
         backgroundColor:primaryColor
         },
         Heading:
         {
          color: '#ffcc66',
          fontSize: 24, 
          fontWeight: 'bold' 
        },
        nametxt:{
            color:"#ffcc66",
            fontSize:25
        },
        textview:{
            marginStart:vw*0.10,
            marginTop:vh*0.05,
            width:182
        },
        txt:{
            color:'#ffcc66',
            fontSize:16
        },
        txtatribute:{
            color:'white'
        }
})
export default Account_Details