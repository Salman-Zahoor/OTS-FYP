import React, * as react from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState , useEffect} from 'react/cjs/react.development';
import firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';
import { primaryColor } from '../../../constants';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {vw,vh} from "../../../constants";
const NewTenant = () => {
    useEffect(()=>{
        getUserDetails()

    },[]);
    // let id = firebase.auth().currentUser.uid

    const[userDetails,setuserDetails]=useState({})
    const[Email,setEmail]=useState({})
    
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
            <Grid style={{marginTop:2,height:3}}>
                <Col style={{marginLeft:25,marginTop:15}}>
            <Text style={styles.nametxt}>
            Hello</Text>
            <Text style={styles.nametxt}>
             {userDetails.name}</Text>
             </Col>
             <Col style={{marginLeft:-80,marginTop:-20}}>
            <Image source={require('../../../../assets/Logo.jpg')} style={styles.logo} />
            </Col>
            </Grid>
            <ScrollView>
            <View style={{marginTop:22}}>
                <Text style={styles.Heading}>Add New Tenant</Text>
                <TextInput
                    placeholder='Enter Email'
                    placeholderTextColor={'white'}
                    style={styles.txtField}
                    value={Email}
                    onChangeText={(main) => setEmail(main)}
                />
                <TouchableOpacity>
                    <Text style={styles.btn}>Send</Text>
                </TouchableOpacity>
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
        color: 'white',
        borderStyle:'dashed'

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
    { 
        flex: 1, 
        backgroundColor: 'black',
         alignItems: 'center',
         backgroundColor:primaryColor
         },
         Heading:
         {
          color: '#ffcc66',
          fontSize: 24, 
          fontWeight: 'bold' ,
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
export default NewTenant