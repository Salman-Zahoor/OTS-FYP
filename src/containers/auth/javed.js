import React,{useState} from "react";
import { View,Text,TextInput,TouchableOpacity,StyleSheet,Image } from "react-native";
import firebase from "firebase";
import { vh ,vw} from "../../constants";
const Javed=(props) =>{
return(
    <View style={{flex:1,backgroundColor:'black',alignItems:'center'}}>
    <Image source={require('../../../assets/Logo.jpg')} style={styles.logo} />
     
<TouchableOpacity onPress={()=>props.navigation.navigate('Login', { type: "Landlord" })}>
    <Text style={styles.Btn1}>Landlord </Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>props.navigation.navigate('Login', { type: "Tenant" })}>
    <Text style={styles.Btn2}>Tenant </Text>
</TouchableOpacity>
 </View>
)
}
const styles=StyleSheet.create({
    logo:{
        width:290,height:290,
        marginTop:112
    },
    Btn1:{
        backgroundColor:'#daa520',
        color:"black",
        width:200,
        height:55,
        borderRadius:8,
        paddingTop:6,
        fontWeight:'bold',
        textAlign:'center',
        fontSize:30
    },
    Btn2:{
        backgroundColor:'#daa520',
        color:"black",
        width:200,
        height:55,
        borderRadius:8,
        paddingTop:6,
        fontWeight:'bold',
        textAlign:'center',
        fontSize:30,
        marginTop:25
    },
    ImgLogo:{
        width:32,height:26,marginLeft:32
    }
})
export default Javed