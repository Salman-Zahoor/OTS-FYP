import React, { Fragment, Component } from 'react';
import {Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
const Camera=()=>{
var options = {
  title: 'Select Image',
  customButtons: [
    {
      name: 'customOptionKey',
      title: 'Choose Photo from Custom Option'
    },
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};





 // image uploader function
 const uploadImage =() =>{
  console.log("launching ----");
  launchImageLibrary(options, response =>{
      console.log(response.assets[0],"RESSSSSSSSSS");
      const source={
          uri:response.assets[0].uri,
          type:response.assets[0].type,
          name: response.assets[0].fileName
      }
      
      uploadImageToCloudinary(source) 
      console.log(source,"My source");         
  })
}




// const uploadImageToCloudinary=async (file) =>{
//   console.log("uploading------");
//   file=base64
//   const data = new FormData()
//   data.append('file',file)
//   data.append("upload_preset","lc31yhqm")
//   data.append("cloud_name","ddg5474bs")
//   try {
//       const res = await axios("https://api.cloudinary.com/v1_1/ddg5474bs/image/upload",data)
//       console.log(res.data.secure_url,"RESSSSSSSSSSSSSSpppppp");
//       setImage(res.data.secure_url)
//       console.log(res.data);
//   } catch (error) {
//       console.log(error,"ERRRRORRRR");
//   }
// }


const uploadImageToCloudinary=async (e) =>{
  console.log(e, "EEEEEE");
  let apiUrl = 'https://api.cloudinary.com/v1_1/doarv4eiv/image/upload';

  let data = {
      "file": e,
      "upload_preset": "pvkc4z55",
  }
  fetch(apiUrl, {
    body: base64.stringify(data),
    headers: {
        'content-type': 'application/json'
    },
    method: 'POST',
})
 .then(async res => {
  let data = await res.json()
  console.log(data,"res")
  }).catch(err => console.log(err.messege,"errr"))
}



    return (
    <TouchableOpacity onPress={uploadImage}>
      <Text>Upload Image</Text>
    </TouchableOpacity>
    );
};
export default Camera;