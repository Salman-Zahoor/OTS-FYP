import React, * as react from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState , useEffect} from 'react/cjs/react.development';
import firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';
import { primaryColor } from '../../../constants';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {vw,vh} from "../../../constants";
const RentSetting = () => {
    useEffect(()=>{
        getRentSetting()

    },[]);
    useEffect(()=>{
        getUserDetails()

    },[]);
    let id = firebase.auth().currentUser.uid

    // states 
    const [MonthlyRent, setMonthlyRent] = useState(0)
    const [MaintananceCharges, setMaintananceCharges] = useState(0)
    const [SecurityCharges, setSecurityCharges] = useState(0)
    const [TrashCharges, setTrashCharges] = useState(0)
    const [Advance, setAdvance] = useState(0)
    const[RentSetting,setRentSetting]=useState({})
    const[userDetails,setuserDetails]=useState({})
    const submitRecord = () => {

      
       console.log(userDetails.refferenceCode,"user===>>>");

        firebase.database().ref(`RentSetting/${id}`)
            .set({
                MonthlyRent:Mr,
                MaintananceCharges:Mc,
                SecurityCharges:Sc,
                TrashCharges:Tc,
                Advance:Ac,
                id,
                landlordRef:userDetails.refferenceCode
            })
            .then(response => {
                // console.log(response,"RESSSSSSSSSS");
                setMonthlyRent()
                setMaintananceCharges()
                setSecurityCharges()
                setTrashCharges()
                setAdvance()
                alert('Saved')
            })
            .catch(eror => {
                console.log(eror, "EERRREERRR");
            })
    }

    const getRentSetting=()=>{
        firebase.database().ref(`RentSetting/${id}`)
        .on("value",snapshotttt =>{
            setRentSetting(snapshotttt.val())
            
        })
    }

    const getUserDetails=()=>{
        let id=firebase.auth().currentUser.uid
        firebase.database().ref(`userss/${id}`)
        .on("value",snapshotttt =>{
            setuserDetails(snapshotttt.val())
        })
    }
    let Mr=parseInt(MonthlyRent)
    let Mc=parseInt(MaintananceCharges)
    let Sc=parseInt(SecurityCharges)
    let Tc=parseInt(TrashCharges)
    let Ac=parseInt(Advance)
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
            
                {/* <Image source={require('../../../../assets/Card.jpg')} style={styles.logo} /> */}
                <Text style={styles.Heading}>Monthly Rent</Text>
                <TextInput
                    placeholder='Monthly Rent'
                    placeholderTextColor={'white'}
                    keyboardType='numeric'
                    style={styles.txtField}
                    value={MonthlyRent}
                    onChangeText={(main) => setMonthlyRent(main)}
                />
                <TextInput
                    placeholder='Maintainance Charges'
                    placeholderTextColor={'white'}
                    style={styles.txtField}
                    value={MaintananceCharges}
                    onChangeText={(main) => setMaintananceCharges(main)}
                />
                <TextInput
                    placeholder='Security Charges'
                    placeholderTextColor={'white'}
                    keyboardType='numeric'
                    style={styles.txtField}
                    value={SecurityCharges}
                    onChangeText={(main) => setSecurityCharges(main)}
                />
                <TextInput
                    placeholder='Trash Charges'
                    placeholderTextColor={'white'}
                    keyboardType='numeric'
                    style={styles.txtField}
                    value={TrashCharges}
                    onChangeText={(main) => setTrashCharges(main)}
                />
                <TextInput
                    placeholder='Advance'
                    placeholderTextColor={'white'}
                    keyboardType='numeric'
                    style={styles.txtField}
                    value={Advance}
                    onChangeText={(main) => setAdvance(main)}
                />
                <TouchableOpacity onPress={submitRecord} >
                    <Text style={styles.btn}>Save</Text>
                </TouchableOpacity>
        <View style={{marginTop:10}}>
        <Text style={[styles.Heading,{textAlign:'center'}]}>Current Account</Text>
        {/* <Text style={{color:'#ffcc66',fontSize:16}}>Monthly Rent: <Text style={{color:'white'}}>{RentSetting.MonthlyRent}</Text></Text>
        <Text style={{color:'#ffcc66',fontSize:16}}>Advance:<Text style={{color:'white'}}>{RentSetting.Advance}</Text></Text>
        <Text style={{color:'#ffcc66',fontSize:16}}>Security Charges:<Text style={{color:'white'}}>{RentSetting.SecurityCharges}</Text></Text>
        <Text style={{color:'#ffcc66',fontSize:16}}>Trash Charges:<Text style={{color:'white'}}>{RentSetting.TrashCharges}</Text></Text>
        <Text style={{color:'#ffcc66',fontSize:16}}>Maintanance Charges:<Text style={{color:'white'}}>{RentSetting.MaintananceCharges}</Text></Text> */}
</View>
            
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
          fontWeight: 'bold',
          textAlign:'center'
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
})
export default RentSetting