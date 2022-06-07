import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput,Alert } from "react-native";
import { Col, Row, Grid } from 'react-native-easy-grid';
import DatePicker from 'react-native-datepicker';

import firebase from 'firebase';
import { primaryColor } from '../../../constants';

const UploadBill = ({route}) => {
  useEffect(()=>{
    getRentSetting()

},[]);
const user=route.params
const tenantId=user.activeUser

  let id = firebase.auth().currentUser.uid
  const[RentSetting,setRentSetting]=useState({})
  const [date, setDate] = useState('01-01-2022');
  const [CurrentReadingk, setCurrentReadingk] = useState(0);
  const [PreviousReadingk, setPreviousReadingk] = useState(0);
  const [total, setTotal] = useState(null);
  const [CurrentReadings, setCurrentReadings] = useState(0);
  const [PreviousReadings, setPreviousReadings] = useState(0);
  const [gtotal, setgTotal] = useState(0);
  const [Unit, setUnit] = useState(0);
  const [SSGUnit, setSSGUnit] = useState(0);
  const [SSGC, setSSGTotal] = useState(null);

  // const [MonthlyRent, setMonthlyRent] = useState(0);
  // const [Maintainence, setMaintainence] = useState(0);
  // const [Security, setSecurity] = useState(0);
  // const [Trash, setTrash] = useState(null);
  console.log(RentSetting.MonthlyRent)
  const submitRecord = () => {
    firebase.database().ref(`UploadBill/${id}`)
    .push({
        date,
        total,
        gtotal,
        Unit,
        SSGUnit,
        SSGC,
        CurrentReadingk,
        PreviousReadingk,
        CurrentReadings,
        PreviousReadings,
        tenantId
    })
    .then(response =>{
        setDate("")
        setTotal("")
        setgTotal("")
        setUnit("")
        setSSGUnit("")
        setSSGTotal("")
        // setMonthlyRent("")
        // setMaintainence("")
        // setSecurity("")
        // setTrash("")
        setCurrentReadingk("")
        setPreviousReadingk("")
        setCurrentReadings("")
        setPreviousReadings("")
        alert('saved')
    })
    .catch(eror =>{
        // console.log(eror,"EERRREERRR");
    }) 
}
 
  function subTogether() {
    let newTotal = CurrentReadingk - PreviousReadingk;
      setTotal(newTotal);
        
    }
  function SSGCsub() {
    let SSGCTotal = CurrentReadings - PreviousReadings;
      setSSGTotal(SSGCTotal);
    }
    const getRentSetting=()=>{
      firebase.database().ref(`RentSetting`)
      .on("value",snapshotttt =>{
          snapshotttt.forEach(innerproval =>{
          setRentSetting(innerproval.val())
          console.log(innerproval);
          })
      })
  }

  
  
  return (
    <View style={styles.View1}>
      <Image source={require('../../../../assets/Logo.jpg')} style={styles.logo} />
      <Text style={styles.Heading}>Upload Bill</Text>
      <Text style={{ color: '#ffcc66', marginLeft: -200 }}>Select Date</Text>
      <DatePicker
        style={styles.datePickerStyle}
        date={date} // Initial date from state
        mode="date" // The enum of date, datetime and time
        // placeholder="select date"
        format="DD-MM-YYYY"
        minDate="01-01-2000"
        maxDate="01-01-2025"
        //   confirmBtnText="Confirm"
        //   cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            //display: 'none',
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
            placeholderTextColor:"white"
          },

        }}
        onDateChange={(date) => {
          setDate(date);
        }}
        
      />
      <ScrollView>
        <Grid>
          <Col style={styles.colStyle}>
            <Text style={styles.subHeading}>K-ELECTRIC</Text>
            <TextInput
              placeholder='Current Reading'
              placeholderTextColor={'white'}
              keyboardType='numeric'
              style={styles.txtInput}
              value={CurrentReadingk}
              onChangeText={v => {
                setCurrentReadingk(Number.parseInt(v)); // Use parsed value from onChangeText
            }}
            />
            <TextInput 
            placeholder='Previous Reading' 
            placeholderTextColor={'white'} 
            keyboardType='numeric' 
            style={styles.txtInput} 
            value={PreviousReadingk}
            onChange={e => {
              setPreviousReadingk(Number.parseInt(e.nativeEvent.text)); // or get correct value from nativeEvent onChange
          }}
            />
            <TouchableOpacity onPress={subTogether}>
              <Text style={styles.Btn}>Calculate</Text>
            </TouchableOpacity>
            <TextInput 
            placeholder='Per Unit' 
            placeholderTextColor={'white'} 
            keyboardType='numeric' 
            style={styles.txtInput} 
            value={ Unit }
              onChangeText={u => {
                setUnit(Number.parseInt(u)); // Use parsed value from onChangeText
            }}
            />
            
           <Text style={{color:'white',marginLeft:20}}>Total Unit:<Text style={styles.txtStyle}> {total}</Text></Text>
           <Text style={{color:'white',marginLeft:20}}>K-Electric Bill:<Text style={styles.txtStyle}> {total*Unit}</Text></Text>
          </Col>
          <Col style={styles.colStyle}>
            <Text style={[styles.subHeading, { marginLeft: 52 }]}>SSGC</Text>
            <TextInput 
            placeholder='Current Reading' 
            placeholderTextColor={'white'} 
            keyboardType='numeric' 
            style={styles.txtInput} 
            value={ CurrentReadings }
              onChangeText={v => {
                setCurrentReadings(Number.parseInt(v)); // Use parsed value from onChangeText
            }}
            />
            <TextInput 
            placeholder='Previous Reading' 
            placeholderTextColor={'white'} 
            keyboardType='numeric' 
            style={styles.txtInput} 
            value={ PreviousReadings }
            onChange={e => {
              setPreviousReadings(Number.parseInt(e.nativeEvent.text)); // or get correct value from nativeEvent onChange
          }}
            />
            <TouchableOpacity onPress={SSGCsub}>
              <Text style={styles.Btn}>Calculate</Text>
            </TouchableOpacity>
            <TextInput 
            placeholder='Per Unit' 
            placeholderTextColor={'white'} 
            keyboardType='numeric' 
            style={styles.txtInput} 
            value={ SSGUnit }
              onChangeText={ss => {
                setSSGUnit(Number.parseInt(ss)); // Use parsed value from onChangeText
            }}
            />
            <Text style={{color:'white',marginLeft:15}}>Total Unit:<Text style={styles.txtStyle}> {SSGC}</Text></Text>
            <Text style={{color:'white',marginLeft:15}}>SSGC Bill:<Text style={styles.txtStyle}>{SSGC*SSGUnit}</Text></Text>
          </Col>
        </Grid>
        {/* <Text style={[styles.subHeading, { marginLeft: 17 }]}>Monthly Dues</Text> */}
        {/* <Grid>
          <Col style={{ height: 150, width: 180 }}>
            <TextInput 
            placeholder='Monthly Rent' 
            placeholderTextColor={'white'} 
            keyboardType='numeric' 
            value={ MonthlyRent }
            onChangeText={mn => {
              setMonthlyRent(Number.parseInt(mn)); // Use parsed value from onChangeText
          }}
            style={[styles.txtInput, { height: 72 }]} 
            />
            <TextInput 
            placeholder='Security charges' 
            placeholderTextColor={'white'} 
            keyboardType='numeric' 
            value={ Security }
            onChangeText={security => {
              setSecurity(Number.parseInt(security)); // Use parsed value from onChangeText
          }}
            style={styles.txtInput} 
            />
          </Col>
          <Col style={{ height: 150, width: 180 }}>
            <TextInput 
            placeholder='Maintainence Charges' 
            placeholderTextColor={'white'} 
            keyboardType='numeric' 
            value={ Maintainence }
            onChangeText={mnt => {
              setMaintainence(Number.parseInt(mnt)); // Use parsed value from onChangeText
          }}
            style={[styles.txtInput, { height: 72 }]} 
            />
            <TextInput 
            placeholder='Trash Charges' 
            placeholderTextColor={'white'} 
            keyboardType='numeric' 
            value={ Trash }
            onChangeText={trash => {
              setTrash(Number.parseInt(trash)); // Use parsed value from onChangeText
          }}
            style={styles.txtInput} 
            />
          </Col>
        </Grid> */}
        <Text style={{color:'#ffcc66',textAlign:'center',fontSize:24}}>{gtotal}</Text>
        <TouchableOpacity onPress={() =>{setgTotal(SSGC*SSGUnit+total*Unit+RentSetting.MonthlyRent+RentSetting.MaintananceCharges+RentSetting.SecurityCharges+RentSetting.TrashCharges)}}>
          <Text style={styles.btn}>Total Bill</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={submitRecord}>
          <Text style={[styles.btn, { width: 212, marginLeft: 80, marginTop: 10 }]}>Post Bill</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  View1: {
    flex: 1,
    backgroundColor: primaryColor,
    alignItems: 'center'
  },
  logo: {
    width: 120,
    height: 120,
  },
  Heading: {
    color: '#ffcc66',
    fontSize: 24,
    fontWeight: 'bold'
  },
  subHeading: {
    color: '#ffcc66',
    marginTop: 22,
    marginLeft: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  txtInput: {
    borderBottomWidth: 2,
    borderBottomColor: '#ffcc66',
    width: 135,
    marginLeft: 15,
    marginTop: 2,
    color: 'white'
  },
  btn: {
    fontSize: 18,
    color: 'white',
    backgroundColor: '#ffcc66',
    width: 122,
    marginLeft: 122,
    textAlign: 'center',
    fontWeight: 'bold',
    height: 42,
    borderWidth: 2,
    borderRadius: 22,
    paddingTop: 10
  },
  txtStyle:{
    color:'#ffcc66',
    fontSize:18,
    marginLeft:72,
    marginTop:12
  },
  Btn:{
    color: 'white', 
    backgroundColor: '#ffcc66', 
    width: 117, 
    marginTop: 8, 
    marginLeft: 30, 
    height: 30, 
    paddingLeft: 6, 
    fontSize: 14, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    borderWidth: 2, 
    borderRadius: 22 
  },
  colStyle:{
    borderWidth: 2, 
    borderColor: '#ffcc66', 
    height: 340, 
    width: 180 
  },

  container: {
    flex: 1,
    // padding: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  datePickerStyle: {
    width: 200,
    // marginTop: 20,
    marginLeft: -152,
    backgroundColor:'yellow',
  }

});
export default UploadBill