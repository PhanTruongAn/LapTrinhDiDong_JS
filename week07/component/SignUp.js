import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
export default function SignUp({ navigation }) {
  var [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  var listAvatar = [
    "https://res.cloudinary.com/dxyxfr1bj/image/upload/v1698827257/imageTuan7/User1.png",
    "https://res.cloudinary.com/dxyxfr1bj/image/upload/v1698827257/imageTuan7/User2.png",
    "https://res.cloudinary.com/dxyxfr1bj/image/upload/v1698827257/imageTuan7/User3.png",
    "https://res.cloudinary.com/dxyxfr1bj/image/upload/v1698827257/imageTuan7/User4.png",
    "https://res.cloudinary.com/dxyxfr1bj/image/upload/v1698827257/imageTuan7/User5.png",
    "https://res.cloudinary.com/dxyxfr1bj/image/upload/v1698827257/imageTuan7/User6.png",
    "https://res.cloudinary.com/dxyxfr1bj/image/upload/v1698827257/imageTuan7/User7.png",
    "https://res.cloudinary.com/dxyxfr1bj/image/upload/v1698827257/imageTuan7/User8.png",
    "https://res.cloudinary.com/dxyxfr1bj/image/upload/v1698827257/imageTuan7/User10.png",
    "https://res.cloudinary.com/dxyxfr1bj/image/upload/v1698827257/imageTuan7/User10.png",
  ];
  const getRandomAvatar = () => {
    const randomIndex = Math.floor(Math.random() * listAvatar.length);
    return listAvatar[randomIndex];
  };
  useEffect(() => {
    fetch(`https://65420869f0b8287df1ff5d0a.mockapi.io/Users`)
      .then((response) => response.json())
      .then((json) => {
        data = json;
        setData(json);
      });
  }, []);
  const handleSignUp = () => {
    if (name === "" || email === "") {
      alert("Vui lòng nhập đầy đủ thông tin !");
    } else {
      const newUser = {
        name: name,
        avatar: getRandomAvatar(),
        email: email,
        jobs: [],
        id: data.length + 1,
      };
      fetch(`https://65420869f0b8287df1ff5d0a.mockapi.io/Users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((response) => response.json())
        .then((updatedUser) => {
          setData([...data, updatedUser]);
          alert("Đăng ký thành công!");
          navigation.navigate("Screen1", { newData: newUser });
        });
    }
  };
  return (
    <View
      style={{
        marginTop: 50,
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <View
        style={{
          width: 360,
          height: 50,
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Text style={styles.text}>Name: </Text>
        <TextInput
          onChangeText={(text) => setName(text)}
          style={{
            fontSize: 18,
            fontWeight: 600,
            outline: "none",
            backgroundColor: "#d2d5d9",
            alignSelf: "center",
          }}
        ></TextInput>
      </View>
      <View
        style={{
          width: 360,
          height: 50,
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Text style={styles.text}>Email: </Text>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          style={{
            fontSize: 18,
            fontWeight: 600,
            outline: "none",
            backgroundColor: "#d2d5d9",
            alignSelf: "center",
          }}
        ></TextInput>
      </View>
      <TouchableOpacity
        onPress={handleSignUp}
        style={{
          backgroundColor: "#4de2d1",
          width: 100,
          height: 45,
          alignSelf: "center",
          borderRadius: 5,
          justifyContent: "center",
        }}
      >
        <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 600,
    alignSelf: "center",
  },
});
