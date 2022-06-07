import React, { useState, useEffect } from 'react'
import { View, FlatList, SafeAreaView, ActivityIndicator,ScrollView,Text } from 'react-native'
import firebase from 'firebase'
// import Profile from '../Reuseable/profile'
import ShowUsers from './Users'
import Header from "../../../../components/Header"



// const ActiveUserId = firebase.auth().currentUser.uid
const Conversation = ({ navigation }) => {


    
    const [userDetails, setuserDetails] = useState({
        id: '',
        name: '',
        iamge: '',
    })
    const { name, profileImg } = userDetails
    const [allUsers, setallUsers] = useState([])
    const [laoder, setLoader] = useState(true)
    const[activeUser,setActiveUser]=useState({})


    useEffect(()=>{
        getUserDetails()
    },[])

    const getUserDetails=()=>{
        let id=firebase.auth().currentUser.uid
        firebase.database().ref(`userss/${id}`)
        .on("value",snapshotttt =>{
        //  console.log(id,"IDDDDD");
            // console.log(snapshotttt.val(),"Valuee");
            setActiveUser(snapshotttt.val())
        })
       }
       
       console.log(activeUser.refferenceCode,"user===>>>");
       
    useEffect(() => {
        try {
            firebase.database().ref('userss').on('value', (datasnapShot) => 
            {console.log(datasnapShot,"Snappppppp");
                let users = [];
                let currentUser = {
                    id: '',
                    name: '',
                    // image: ''
                }
                datasnapShot.forEach((child) => {
                    console.log(child, "childchildchild");
                    if (activeUser.refferenceCode===child.val().RefferenceCode) {
                        console.log('if')
                        // currentUser.id = child.val().uuid;
                        // currentUser.name = child.val().name;
                        // currentUser.image = child.val().image
                        users.push({
                            id: child.val().uuid,
                            name: child.val().name,
                            // image:child.val().image
                        })
                    }
                    else {
                        console.log('else')
                        return(
                        <View><Text>No Tanents available</Text>
                        </View>
                        )
                        // users.push({
                        //     id: child.val().uuid,
                        //     name: child.val().name,
                        //     // image:child.val().image
                        // })

                    }
                })
                setLoader(false)
                setuserDetails(currentUser)
                setallUsers(users)
            })
        } catch (error) {
            console.log(error);
        }
    }, [navigation])

    const onImgTap = (profileImg, name) => {
        // navigation.navigate("userImage", { profileImg, name })
    }
    const ActiveUserId = firebase.auth().currentUser.uid

    const onNameTap = (name, guestId,image) => {
        console.log(image, name, guestId, "THINGSSSSSSSSSSSSSSSSSS");
        navigation.navigate("ChatNow", { name, guestId, ActiveUserId})
    }

    console.log(allUsers, "USSSSSSSSSSSSS");

    return (
        
        <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
            <Header heading="Chats"/>
            {laoder == false ?
                <FlatList
                    alwaysBounceVertical={false}
                    data={allUsers}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item }) =>
                    (
                        <ShowUsers
                        
                            name={item.name}
                            // img={item.image}
                            // onImgTap={() => onImgTap(item.profileImg, item.name)}
                            onNameTap={() => onNameTap(item.name, item.id,)}

                        />
                    )}
                />
                :
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator
                        color="white"
                    />
                </View>}
        </SafeAreaView>
    )
}





export default Conversation