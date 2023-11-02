import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { useEffect,useState } from "react";
import { useRoute } from "@react-navigation/native";
export default function Screen3({navigation}) {
  var [data,setData] = useState([]);
  const [job,setJob] = useState('');
  useEffect(() => {
    setData(route.params.insertJob);
},[]);
var route = useRoute();
var handleInsertJob = () => {
  if (job !== "") {
    data.jobs.push(job);
    fetch(`https://65420869f0b8287df1ff5d0a.mockapi.io/Users/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((updatedUser) => {
        setData(updatedUser);
      });
    navigation.navigate("Screen2");
  } else {
    alert("Please input 1 job!");
  }
};

console.log(data)
  return (
    <View style={styles.container}>
      <View style={styles.viewAvatar}>
        <Image
          source={{uri:data.avatar}}
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
            Hi {data.name}
          </Text>
          <Text style={{fontWeight:500,top:-12,left:10}}>Have a great day a head</Text>
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
          style={{ width: 20, height: 20,left:10 }}
        ></Image>
        <TextInput
        onChangeText={(text) =>setJob(text)}
          placeholder="Input your job"
          style={{marginLeft:30,width:250,height:43,fontSize:18,fontWeight:400,color:'gray'}}
        ></TextInput>
      </View>
      <Pressable 
      onPress={handleInsertJob}
      style={styles.btn}>
        
       <Text style={{fontSize:25,fontWeight:600,alignSelf:'center',color:'white'}}>Finish</Text>
      </Pressable>
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