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
import { useRoute } from "@react-navigation/native";
export default function Screen1({ navigation }) {
  var route = useRoute();
  var [data, setData] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    fetch(`https://65420869f0b8287df1ff5d0a.mockapi.io/Users`)
      .then((response) => response.json())
      .then((json) => {
        data = json;
        setData(json);
      });
  }, []);
  useEffect(() => {
    if (route.params?.newData) {
      setData([...data, route.params.newData]);
    }
  }, [route.params?.newData]);

  const handleLogin = () => {
    if (userName !== "") {
      const user = data.find((user) => user.name === userName);
      if (user) {
        navigation.navigate("Screen2", { userLogin: user });
      } else {
        alert("Your name is not exist!");
      }
      console.log(user);
    } else {
      alert("Please input your name!");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./image/noteandpen.PNG")}
        style={{ width: 271, height: 271, marginTop: 50 }}
      ></Image>
      <Text
        style={{
          width: 390,
          height: 72,
          marginTop: 20,
          textAlign: "center",
          color: "#8353E2",
          fontFamily: "Epilogue",
          fontSize: 24,
          fontWeight: 700,
        }}
      >
        {" "}
        MANAGE YOUR{<br></br>} TASK{" "}
      </Text>
      <View style={styles.viewEmail}>
        <Image
          source={require("./image/IconEmail.PNG")}
          style={{ width: 20, height: 20, left: 10 }}
        ></Image>
        <TextInput
          placeholder="Enter Your Name"
          style={{
            marginLeft: 30,
            width: 250,
            height: 43,
            fontSize: 18,
            fontWeight: 400,
            color: "gray",
            outline: "none",
          }}
          onChangeText={(text) => setUserName(text)}
        ></TextInput>
      </View>
      <Pressable onPress={handleLogin} style={styles.btn}>
        <Text
          style={{
            alignSelf: "center",
            fontWeight: 600,
            fontSize: 20,
            color: "white",
          }}
        >
          Get Started
        </Text>
      </Pressable>

      <TouchableOpacity
        onPress={() => navigation.navigate("SignUp")}
        style={{ marginTop: 20, alignSelf: "center", alignItems: "center" }}
      >
        <Text
          style={{
            alignSelf: "center",
            fontSize: 20,
            fontWeight: 600,
            color: "blue",
          }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "column",
  },
  viewEmail: {
    width: 334,
    height: 43,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 15,
    borderColor: "grey",
    borderWidth: 2,
    marginTop: 40,
  },
  btn: {
    marginTop: 40,
    width: 190,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00BDD6",
    color: "white",
    borderRadius: 15,
  },
});
