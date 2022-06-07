// import React, { useState, useEffect } from "react";
// import {
//     View,
//     Text,
//     TouchableOpacity,
//     StyleSheet,
//     Image,
//     ScrollView
//         } from "react-native";
// import firebase from "firebase";
// import { Col, Row, Grid } from 'react-native-easy-grid';
// import { globaltextcolor, vh, vw } from "../../constants";


// const PrevoiusBills=(props)=>{
//     // useEffect(()=>{
//     //     getPrevoiusBills()
//     // },[]);
//     // const [getBills,setGetBills]=useState("");

//     // const getPrevoiusBills=()=>{
//     //     let id=firebase.auth().currentUser.uid
//     //     firebase.database().ref(`UploadBill/${id}`)
//     //     .on("value",snapshotttt =>{
//     //         snapshotttt.forEach(innerproval =>{
//     //             // console.log(innerproval.val(),"MID_LEVEL");
//     //                                 // console.log(more.val(),"LAST_VALUE");
//     //                 setGetBills(innerproval.val())
//     //         })
            
//     //     })
//     // }
//     // console.log("BILLLLLLL",getBills);
//     const[array,setArray]=useState([])
//     // use effect for data fetching 
//         useEffect(() =>{
//             let tempArray=[]
//             let id=firebase.auth().currentUser.uid
//             firebase.database().ref(`UploadBill/${id}`)
//             .on("value", snapshot =>{
//                 // console.log(snapshot.val(),"TOP_LEVEL");
//                 snapshot.forEach(innerproval =>{
//                     // console.log(innerproval.val(),"MID_LEVEL");
//                         // console.log(more.val(),"LAST_VALUE");
//                         tempArray.push(innerproval.val())
//                     })
            
//                 // console.log(tempArray,"ALLLL_VALUES");
//                 setArray(tempArray)
//             })
//         },[])
//     console.log(array,"ALLLARAR");
//     return(
//     <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center' }}>
//         <Image source={require('../../../assets/Logo.jpg')} style={styles.logo}/>
//         <Text style={{color:'#ffcc66',fontSize:24,fontWeight:'bold'}}>PrevoiusBills</Text>
//         {array.map(valuess =>{
//             return(
            
//         <View>
//             <TouchableOpacity>
//          <Text style={styles.DateHeading}>Date:{valuess.Maintainence}</Text>  
//          </TouchableOpacity>
//          </View>
// //         <View>
// // <Grid>
// //     <Col>
// //         <Text style={{color:'#ffcc66'}}>Utility Usuage</Text>
// //         <Text style={styles.BillHeading}>Maintainence<Text style={styles.BillTxt}>{valuess.Maintainence}</Text></Text>
// //         <Text style={styles.BillHeading}>MonthlyRent:<Text style={styles.BillTxt}>{valuess.MonthlyRent}</Text></Text>
// //         <Text style={styles.BillHeading}>MonthlyRent:<Text style={styles.BillTxt}>{valuess.MonthlyRent}</Text></Text>
// //     </Col>
// //     <Col>
// //         <Text style={styles.BillHeading}>MonthlyRent:<Text style={styles.BillTxt}>{valuess.MonthlyRent}</Text></Text>
// //         <Text style={styles.BillHeading}>Maintainence<Text style={styles.BillTxt}>{valuess.Maintainence}</Text></Text>
// //         <Text style={styles.BillHeading}>MonthlyRent:<Text style={styles.BillTxt}>{valuess.MonthlyRent}</Text></Text>
// //         <Text style={styles.BillHeading}>MonthlyRent:<Text style={styles.BillTxt}>{valuess.MonthlyRent}</Text></Text>
// //     </Col>
// //              <Text></Text>
// // </Grid>
// //          </View> 
        
//             )})}
//         {/*
//         {/*  */}
//         {/* <Text style={{color:"black"}}>Total:{array.total}</Text> */}
//         {/* <Text style={{color:"black"}}>Total:{array.unit}</Text>
       
//         {/* <Text style={{color:"black",backgroundColor:'yellow'}}>Date:{getBills.date}</Text>
//         <Text style={{color:"black"}}>Bill:{array.gtotal}</Text> */}
//         {/* <Text style={{color:"black"}}>Total:{getBills.total}</Text> */}
//         {/* <Text style={{color:"black"}}>Total:{getBills.unit}</Text> */}
//     </View>
//     )
// }
// const styles=StyleSheet.create({
//     logo: {
//         width: 120,
//         height: 150
//     },
//     DateHeading:{
//         color:"white",
//         backgroundColor:'#ffcc66',
//         width:365,
//         fontSize:24,
//         textAlign:'center',
//         borderWidth:2,
//         borderColor:'black',
//         borderRadius:32
//     },
//     BillHeading:{
//         color:'white',
//         fontSize:18
//     },
//     BillTxt:{
//         color:'#800000',
//         fontSize:14
//     }
// })

// export default PrevoiusBills