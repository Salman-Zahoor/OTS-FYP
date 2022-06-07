import React,{useState,useEffect} from "react";
import { View , Text , TouchableOpacity, ActivityIndicator, TextInput, StyleSheet,Image} from "react-native"
import firebase from 'firebase';
import {vw,vh} from "../../constants"

const SignUp = (props) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [RefferenceCode, setRefferenceCode] =useState ("")
    const [loading, setLoading] = useState(false)
    const [users,setUsers]=useState({})
    // const [refcode,setRefCode]=useState({})


    console.log(users,"users");
    console.log(users.refferenceCode ,"users ref");
    // console.log(refcode,"REFF code=>>");


    const type=props.route.params.type
    // console.log(type,"type");

        useEffect(()=>{
        allUsers()
    },[])

    const allUsers=()=>{
        firebase.database().ref("userss")
        .on("value",snapshot=>{
                let data=snapshot.val()?snapshot.val():{}
                setUsers(data)    
        })
    }

    const keys=Object.keys(users)
    console.log(keys,"keys");




    let refferenceCode=Math.floor(Math.random()*1000000) +1;
    // console.log(users.LandlordRefference,"LOGGGGG");


    const Code=parseInt(RefferenceCode);
    console.log(Code,"CODEEEEEEEEE");
    const signUpUser = () =>{
        setLoading(true)
        firebase.auth().createUserWithEmailAndPassword(email, password)
        
        .then(response =>{
            let id=firebase.auth()?.currentUser.uid
            
            firebase.database().ref(`userss/${id}`)
            .set({
                uuid:id,
                name,
                email,
                isActive:"true",
                type,
                refferenceCode
            })
            .then(responsee =>{
                firebase.auth().signOut()
                setLoading(false)
                setName("")
                setEmail("")
                setPassword("");
               
                
            // console.log(response,"RESPONSEEEE");
         
            })
            // setLoading(false)
            // // console.log(response,"RESPONSEEEE");
            // setName("")
            // setEmail("")
            // setPassword("")
            // props.navigation.navigate("Login");
        })
        .catch(errr =>{
            setLoading(false)
            alert(errr.message)
            console.log(errr,"ERRRRRRRR");
        })
    }



    const signTanent = () =>{
        {keys.map(values=>{
            console.log(users[values].refferenceCode,"reffffrence");
        if(users[values].refferenceCode==Code){
        setLoading(true)
         firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(response =>{
            let id=firebase.auth()?.currentUser.uid
            
            firebase.database().ref(`userss/${id}`)
            .set({
                uuid:id,
                name,
                email,
                isActive:"true",
                type,
                RefferenceCode:Code,
            })
            .then(responsee =>{
                firebase.auth().signOut()
                setLoading(false)
                setName("")
                setEmail("")
                setPassword("");
               
                
            // console.log(response,"RESPONSEEEE");
         
            })
            // setLoading(false)
            // // console.log(response,"RESPONSEEEE");
            // setName("")
            // setEmail("")
            // setPassword("")
            // props.navigation.navigate("Login");
        })
        .catch(errr =>{
            setLoading(false)
            alert("Something went wrong!")
            console.log(errr,"ERRRRRRRR");
        })
    }
    })}
}




// const keys=Object.keys(users)
// // console.log(keys,"keys");
// // let mykeys=keys.map(value=>{users[resfrence])


    const renderButton = () =>{
        if (loading == true){
            return(
                <ActivityIndicator
                size="large"
                color="white"
                />
            )
        }
        else{
            return(
                <TouchableOpacity style={styles.buttonstyle}
            onPress={signUpUser}
            >
                <Text style={styles.signuptxt}>
                    Sign Up
                </Text>
            </TouchableOpacity>
            )
        }
    }


    const renderTanentButton = () =>{
        if (loading == true){
            return(
                <ActivityIndicator
                size="large"
                color="white"
                />
            )
        }
        else{
            return(
                <TouchableOpacity style={styles.buttonstyle}
            onPress={signTanent}
            >
                <Text style={styles.signuptxt}>
                    Sign Up
                </Text>
            </TouchableOpacity>
            )
        }
    }


    if(type=="Landlord"){
    return(
        <View style={styles.mainview}>
<View style={styles.imagess}>
            <Image source={require('../../../assets/Logo.jpg')} style={styles.imgstyle}
            />
            </View>

        <View style={styles.innerview}>
        <View style={styles.inputView}>
            <TextInput
            placeholder="Name"
            placeholderTextColor="#ffcc66"
            style={styles.inputtxt}
            value={name}
            onChangeText={(main)=>setName(main)}

            />
        </View>

        <View style={styles.inputView}>
            <TextInput
            placeholder="Email Address"
            placeholderTextColor="#ffcc66"
            style={styles.inputtxt}
            value={email}
            onChangeText={(main)=>setEmail(main)}
            />
        </View>

        <View style={styles.inputView}>
            <TextInput
            placeholder="Password"
            placeholderTextColor="#ffcc66"
            style={styles.inputtxt}
            secureTextEntry
            value={password}
            onChangeText={(main)=>setPassword(main)}
            />
        </View>
        

        <TouchableOpacity 
        onPress={()=>props.navigation.navigate("Login")}
        >
            <Text style={{textAlign:"center", marginTop:10, color:"#ffcc66"}}>
             Already Have Account? Login
            </Text>
        </TouchableOpacity>

            {renderButton()}
            
        </View>

        </View>
    )
   }
   else{
    return(
   


        <View style={styles.mainview}>
            
                 <View style={styles.imagess}>
            <Image source={require('../../../assets/Logo.jpg')} style={styles.imgstyle}
            />
            </View>

        <View style={styles.innerview}>
        <View style={styles.inputView}>
            <TextInput
            placeholder="Name"
            placeholderTextColor="#ffcc66"
            style={styles.inputtxt}
            value={name}
            onChangeText={(main)=>setName(main)}

            />
        </View>

        <View style={styles.inputView}>
            <TextInput
            placeholder="Email Address"
            placeholderTextColor="#ffcc66"
            style={styles.inputtxt}
            value={email}
            onChangeText={(main)=>setEmail(main)}
            />
        </View>

        <View style={styles.inputView}>
            <TextInput
            placeholder="Password"
            placeholderTextColor="#ffcc66"
            style={styles.inputtxt}
            secureTextEntry
            value={password}
            onChangeText={(main)=>setPassword(main)}
            />
        </View>
        <View style={styles.inputView}>
            <TextInput
            placeholder="Refference Code"
            placeholderTextColor="#ffcc66"
            style={styles.inputtxt}
            value={RefferenceCode}
            onChangeText={(main)=>setRefferenceCode(main)}
            />
        </View>

        <TouchableOpacity 
        onPress={()=>props.navigation.navigate("Login")}
        >
            <Text style={{textAlign:"center", marginTop:10, color:"#ffcc66"}}>
             Already Have Account? Login
            </Text>
        </TouchableOpacity>

            {renderTanentButton()}
            
        </View>
        

        </View>
    )
   }
}

const styles=StyleSheet.create({
    buttonstyle:{
        alignItems:"center",
        backgroundColor:"#ffcc66",
        marginHorizontal:40,
        marginVertical:10,
        borderRadius:10,
        marginTop:30,

},
signuptxt:{
    color:"black",
    fontSize:25
},
imagess:{
    alignItems:"center",
    marginTop:vh*0.08,
},
imgstyle:{
    height:vh*0.35,
    width:vw*0.65
},

mainview:{
    flex:1,
    backgroundColor:"black",
},
innerview:{
    justifyContent:"center",
    flex:1,
    marginBottom:vh*0.15
},
inputView:{
    height:40,
    borderBottomWidth:2,
    marginHorizontal:25,
    marginTop:10,
    borderBottomColor:'#ffcc66'

},
inputtxt:{
    marginLeft:10,
    color:"#ffcc66"
}
});

export default SignUp