import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from 'firebase'
// import { headerbackground } from "../../../constants";
const ChatBox = ({ userId, msg, img, onImgTap }) => {
  console.log(userId, "IDDDDDDDDDDDDDD");
  let isCurrentUser = userId === firebase.auth().currentUser.uid ? true : false;
  console.log(userId,"iddd");
  return (
    <View
      style={{
        maxWidth: 200 / 2 + 20,
        alignSelf: isCurrentUser ? "flex-end" : "flex-start",
      }}
    >
      <View
        style={[
          styles.chatContainer,
          isCurrentUser && {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 0,
            backgroundColor:"black",
          },
        ]}
      >
        {img ? (
          <View cardBody>
            <TouchableOpacity onPress={onImgTap}>
              <Image
                source={{ uri: img }}
                resizeMode="cover"
                style={{ height: 200, width: deviceWidth / 2 }}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <Text
            style={[styles.chatTxt, isCurrentUser && { color: "white" }]}
          >
            {msg}
          </Text>
        )}
      </View>
    </View>
  );
};

export default ChatBox;

const styles = {
  chatContainer: { backgroundColor:"black", borderTopRightRadius: 20 },
  chatTxt: {
    color: "black",
    fontSize: 18,
    marginVertical: 5,
    fontWeight: "500",
    padding: 8,
  },
}
