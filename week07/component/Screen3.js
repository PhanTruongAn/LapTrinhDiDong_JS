import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";

export default function Screen3() {
  return (
    <View style={styles.container}>
      <View style={styles.viewAvatar}>
        <Image
          source={require("./image/Avatar.PNG")}
          style={{ height: 50, width: 50 }}
        ></Image>
        <View style={styles.viewTextAvatar}>
          <Text
            style={{
              width: 101,
              height: 30,
              marginLeft: 10,
              fontFamily: "Epilogue",
              fontSize: 14,
              fontWeight: 700,
              marginTop: 20,
            }}
          >
            Hi Twinkle
          </Text>
          <Text>Have agrate day a head</Text>
        </View>
      </View>
      <Text
        style={{
          width: "80%",
          height: 48,
          fontFamily: "Epilogue",
          fontSize: 32,
          fontWeight: 700,
          textAlign: "center",
          marginTop: 30,
        }}
      >
        ADD YOUR JOB
      </Text>
      <View style={styles.viewInputJob}>
        <Image
          source={require("./image/IconInPutJob.png")}
          style={{ width: 20, height: 20, marginLeft: -100 }}
        ></Image>
        <TextInput
          defaultValue="input your job"
          style={{ marginLeft: 10 }}
        ></TextInput>
      </View>
      <Pressable style={styles.btn}>Finish -{">"}</Pressable>
      <Image
        source={require("./image/noteandpen.PNG")}
        style={{ width: 190, height: 170, marginTop: 50 }}
      ></Image>
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
  viewAvatar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: 100,
    marginLeft: -150,
  },
  viewInputJob: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "grey",
    width: 334,
    height: 44,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});