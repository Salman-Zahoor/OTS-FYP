import React, * as react from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { ScrollView } from 'react-native-gesture-handler';
import { Col, Row, Grid } from 'react-native-easy-grid';
import DatePicker from 'react-native-datepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import firebase from 'firebase';
import { primaryColor } from '../../../constants';

const Register = (props) => {
    let id = firebase.auth().currentUser.uid

    const [firstName,setfirstName]=useState('');
    const [fatherName,setfatherName]=useState('');
    const [phoneNumber,setphoneNumber]=useState('');
    const [lastName,setlastName]=useState('');
    const [cnicNumber,setcnicNumber]=useState('');
    const [emailAddress,setemailAddress]=useState('');
    const [Address,setAddress]=useState('');
//Family Members
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [items, setItems] = useState([
        {label: '1', value: '1'},
        {label: '2', value: '2'},
        {label: '3', value: '3'},
        {label: '4', value: '4'},
        {label: '5', value: '5'},
      ]);
      //Room
    const [Flatopen, setFlatOpen] = useState(false);
    const [Flatvalue, setFlatValue] = useState('');
    const [Flatitems, setFlatItems] = useState([
        {label: '1', value: '1'},
        {label: '2', value: '2'},
        {label: '3', value: '3'},
        {label: '4', value: '4'},
        {label: '5', value: '5'},
      ]);
      // Toilet
    const [Toiletopen, setToiletOpen] = useState(false);
    const [Toiletvalue, setToiletValue] = useState('');
    const [Toiletitems, setToiletItems] = useState([
        {label: '1', value: '1'},
        {label: '2', value: '2'},
        {label: '3', value: '3'},
        {label: '4', value: '4'},
        {label: '5', value: '5'},
      ]);
    
      const [DOB, setDob] = useState('01-01-1947');
      const [date, setDate] = useState('01-01-1947');
      const SubmitButton = () => {
        firebase.database().ref(`PropertyRegistration/${id}`)
          .set({
              firstName,
              fatherName,
              phoneNumber,
              Address,
              lastName,
              cnicNumber,
              emailAddress,
              value,
              DOB,
              Flatvalue,
              date
          })
          .then(resp=>{
              setfirstName("")
              setfatherName("")
              setphoneNumber("")
              setAddress("")
              setlastName("")
              setcnicNumber("")
              setemailAddress("")
              setFlatValue("")
              setValue("")
              setDob("01-01-1947")
              setDate("01-01-1948")
              alert("saved")
          })
          .catch(err=>{
              console.log(err,"ERRRRR")
          })

      }
    return(
<View style={styles.MainView}>
    <View style={styles.smallView}>
    <Image source={require('../../../../assets/Logo.jpg')} style={styles.Logo}/>
    </View>
        <Text style={[styles.Heading,{marginBottom:12}]}>Registration Form</Text>
       
<Text style={{color:'#ffcc66',textAlign:'center',fontSize:34}}>Date 
   <DatePicker
          style={[styles.datePickerStyle]}
          date={date} 
           // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="Date of Birth"
          format="DD-MM-YYYY"
          minDate="01-01-1947"
          maxDate="01-01-2022"

          customStyles={{
          
            // dateInput: {
            //   marginLeft: 36,
            // }, 
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        /> 
    </Text>
    <ScrollView>
    <Grid style={{height:470}}>
        <Col>
    <View style={styles.inputtext}>
            <TextInput
            placeholder="First Name"
            placeholderTextColor="#ffcc66"
            style={styles.textstyle}
            value={firstName}
            onChangeText={(ok)=>setfirstName(ok)}
            />
     </View>
    <View style={styles.inputtext}>
            <TextInput
            placeholder="Father Name"
            placeholderTextColor="#ffcc66"
            style={styles.textstyle}
            value={fatherName}
            onChangeText={(ok)=>setfatherName(ok)}
            />
     </View>
     <View style={styles.inputtext}>
            <TextInput
            placeholder="Phone Number"
            placeholderTextColor="#ffcc66"
            style={styles.textstyle}
            keyboardType='numeric'
            value={phoneNumber}
            onChangeText={(ok)=>setphoneNumber(ok)}
            />
     </View>
   
    <View style={styles.inputtext}>
        <Text style={{color:'#ffcc66',marginTop:-2}}>DOB</Text>
    <DatePicker
          style={styles.datePickerStyle}
          date={DOB} 
           // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="Date of Birth"
          format="DD-MM-YYYY"
          minDate="01-01-1947"
          maxDate="01-01-2022"

          customStyles={{
          
            // dateInput: {
            //   marginLeft: 36,
            // }, 
          }}
          onDateChange={(date) => {
            setDob(date);
          }}
        />
     </View>
     <Text style={{marginTop:22 ,color:'#ffcc66',
      textAlign:'center',
      fontSize:24,
      fontWeight:'bold'}}>Property Detail</Text> 

<View style={styles.inputtext}>
            <TextInput
            placeholder="Address"
            placeholderTextColor="#ffcc66"
            style={styles.textstyle}
            value={Address}
            onChangeText={(ok)=>setAddress(ok)}
            />
     </View>
     </Col>
        <Col>
    <View style={styles.inputtext}>
            <TextInput
            placeholder="Last Name"
            placeholderTextColor="#ffcc66"
            style={styles.textstyle}
            value={lastName}
            onChangeText={(ok)=>setlastName(ok)}
            />
     </View>
    <View style={styles.inputtext}>
            <TextInput
            placeholder="CNIC Number"
            placeholderTextColor="#ffcc66"
            style={styles.textstyle}
            keyboardType='number-pad'
            value={cnicNumber}
            onChangeText={(ok)=>setcnicNumber(ok)}
            />
     </View>
     <View style={styles.inputtext}>
            <TextInput
            placeholder="Email Address"
            placeholderTextColor="#ffcc66"
            style={styles.textstyle}
            value={emailAddress}
            onChangeText={(ok)=>setemailAddress(ok)}
            />
     </View>
     <View style={{width:150,marginLeft:22,marginTop:120}}>
     <Text style={{color:'#ffcc66'}}>Total Flats</Text>
     <DropDownPicker
     style={styles.dropPickerStyle}
      open={Flatopen}
      value={Flatvalue}
      items={Flatitems}
      setValue={setFlatValue}
      setItems={setFlatItems}
      setOpen={setFlatOpen}
      // setValue={setFlatValue}
      // setItems={setFlatItems}
      onChangeText={(ok)=>setValue(ok)}
    />
     </View>
     </Col>
     </Grid>
<TouchableOpacity onPress={SubmitButton}>
    <Text style={styles.Btn}>Submit</Text>
</TouchableOpacity>

     </ScrollView>
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
    textstyle:{
        marginLeft:10,
        color:"#ffcc66",
},
inputtext:{
    height:40,
    borderBottomWidth:2,
    marginHorizontal:20,
    marginTop:20,
    borderBottomColor:"#ffcc66",
    width:192
},
smallView:{
    alignItems:'center'
},
datePickerStyle: {
    width: 190,
    height:39,
    marginLeft:-2,
    backgroundColor:'#ffcc66',
  },
dropPickerStyle: {
    width: 170,
    marginTop:2,
    height:46,
    marginLeft:0,
    backgroundColor:'#ffcc66'
  },
  Heading:{
      color:'#ffcc66',
      textAlign:'center',
      fontSize:24,
      fontWeight:'bold'
    },
    Btn:{
        color:'white',
        marginTop:-95,
        paddingTop:12,
        textAlign:'center',
        fontSize:28,
        fontWeight:'bold',
        backgroundColor:'#ffcc66',
        borderWidth:2,
    borderRadius:22
}
})
export default Register;