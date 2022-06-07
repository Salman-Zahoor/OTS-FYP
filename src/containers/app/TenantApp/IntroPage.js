import React, * as react from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState,useEffect } from 'react/cjs/react.development';
import { ScrollView } from 'react-native-gesture-handler';
import { Col, Row, Grid } from 'react-native-easy-grid';
import DatePicker from 'react-native-datepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import firebase from 'firebase';
import { primaryColor } from '../../../constants';

const IntroPage = (props) => {
  useEffect(()=>{
    getRentSetting()

},[]);
  useEffect(()=>{
    getUserDetails()

},[]);
const getUserDetails=()=>{
  let id=firebase.auth()?.currentUser.uid
  firebase.database().ref(`userss/${id}`)
  .on("value",snapshotttt =>{
  //  console.log(id,"IDDDDD");
      // console.log(snapshotttt.val(),"Valuee");
      setuserDetails(snapshotttt.val())
  })
}
const [RentSetting,setRentSetting]=useState({});

  const getRentSetting=()=>{
    firebase.database().ref(`RentSetting`)
    .on("value",snapshotttt =>{
        console.log(snapshotttt.val(),"snappppp");
        let data=snapshotttt.val()?snapshotttt.val():{}
        setRentSetting(data)
        
    })
}

console.log(RentSetting,"object");
let mykeys=Object.keys(RentSetting)
console.log(mykeys,"keys");
    // let id = firebase.auth().currentUser.uid

//     const [firstName,setfirstName]=useState('');
//     const [fatherName,setfatherName]=useState('');
//     const [phoneNumber,setphoneNumber]=useState('');
//     const [advance,setadvance]=useState('');
//     const [permenantAddress,setpermenantAddress]=useState('');
//     const [lastName,setlastName]=useState('');
//     const [cnicNumber,setcnicNumber]=useState('');
//     const [emailAddress,setemailAddress]=useState('');
//     const [monthlyRent,setmonthlyRent]=useState('');
    const [userDetails,setuserDetails]=useState({});
    
// //Family Members
//     const [open, setOpen] = useState(false);
//     const [value, setValue] = useState('');
//     const [items, setItems] = useState([
//         {label: '1', value: '1'},
//         {label: '2', value: '2'},
//         {label: '3', value: '3'},
//         {label: '4', value: '4'},
//         {label: '5', value: '5'},
//       ]);
//       //Room
//     const [Roomopen, setRoomOpen] = useState(false);
//     const [Roomvalue, setRoomValue] = useState('');
//     const [Roomitems, setRoomItems] = useState([
//         {label: '1', value: '1'},
//         {label: '2', value: '2'},
//         {label: '3', value: '3'},
//         {label: '4', value: '4'},
//         {label: '5', value: '5'},
//       ]);
//       // Toilet
//     const [Toiletopen, setToiletOpen] = useState(false);
//     const [Toiletvalue, setToiletValue] = useState('');
//     const [Toiletitems, setToiletItems] = useState([
//         {label: '1', value: '1'},
//         {label: '2', value: '2'},
//         {label: '3', value: '3'},
//         {label: '4', value: '4'},
//         {label: '5', value: '5'},
//       ]);
    
//       const [DOB, setDob] = useState('01-01-1947');
//       const [date, setDate] = useState('01-01-1947');
      // const SubmitButton = () => {
      //   firebase.database().ref(`TenantRegistration/${id}`)
      //     .set({
      //         // firstName,
      //         // fatherName,
      //         // phoneNumber,
      //         // advance,
      //         // permenantAddress,
      //         // lastName,
      //         // cnicNumber,
      //         // emailAddress,
      //         // monthlyRent,
      //         // previousAddress,
      //         // value,
      //         // DOB,
      //         // Roomvalue,
      //         // Toiletvalue,
      //         // date,
      //         // uuid:id,
      //     })
      //     .then(resp=>{
      //         // setfirstName("")
      //         // setfatherName("")
      //         // setphoneNumber("")
      //         // setadvance("")
      //         // setpermenantAddress("")
      //         // setlastName("")
      //         // setcnicNumber("")
      //         // setemailAddress("")
      //         // setmonthlyRent("")
      //         // setpreviousAddress("")
      //         // setValue("")
      //         // setDob("01-01-1947")
      //         // setDate("01-01-1948")
      //         // alert("saved")
      //     })
      //     .catch(err=>{
      //         console.log(err,"ERRRRR")
      //     })

      // }
    return(
<View style={styles.MainView}>
    {mykeys.map(values=>{
        if (RentSetting[values].landlordRef==userDetails.RefferenceCode ) {
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
   <View style={{flex:2}}>
<Text style={{color:'#ffcc66',textAlign:'center'}}>Monthly Rent:<Text style={{color:'white',fontSize:24}}>{RentSetting[values].MonthlyRent}</Text></Text>
<Text style={{color:'#ffcc66',textAlign:'center'}}>Security Charges:<Text style={{color:'white',fontSize:24}}>{RentSetting[values].SecurityCharges}</Text></Text>
<Text style={{color:'#ffcc66',textAlign:'center'}}>Trash Charges:<Text style={{color:'white',fontSize:24}}>{RentSetting[values].TrashCharges}</Text></Text>
<Text style={{color:'#ffcc66',textAlign:'center'}}>Advance:<Text style={{color:'white',fontSize:24}}>{RentSetting[values].Advance}</Text></Text>
<Text style={{color:'#ffcc66',textAlign:'center'}}>Maintanance Charges:<Text style={{color:'white',fontSize:24}}>{RentSetting[values].MaintananceCharges}</Text></Text>
<TouchableOpacity onPress={()=>props.navigation.navigate("Register")}>
           <Text style={{color:'black',marginTop:22,marginLeft:122,paddingLeft:32,paddingTop:10,backgroundColor:'#ffcc66',width:152,height:42}}>Get Register</Text>
       </TouchableOpacity>
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
export default IntroPage;