import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable ,FlatList} from 'react-native';
import { useEffect,useState } from "react";
import { useRoute } from "@react-navigation/native";

export default function Screen2(navigation) {
  var [data,setData] = useState([]);
  useEffect(() => {
      setData(route.params.userLogin);
},[]);
  const route = useRoute();
  console.log(data);
    return ( 
        <View style = { styles.container } >
        <View style={styles.viewAvatar}>
        <Image 
        source={{uri:data.avatar}} 
        style={{height:50,width:50}}
        ></Image>
        
        <View style={styles.viewTextAvatar}>
        <Text style={{width:101,height:30,marginLeft:10,fontFamily:"Epilogue",fontSize:14,fontWeight:700,marginTop:20}}>Hi {data.name}</Text>
        <Text>Have a great day a head</Text>
        </View>
        </View>
        <View style={styles.viewSearch}>
        <Image source={require("./image/IconSearch.PNG")} style={{width:20,height:20,marginLeft:-100}}></Image>
        <TextInput defaultValue='Search'></TextInput>
        </View>

        <View
        style={{
          width: "100%",
          height: 400,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
          <FlatList
            data={data.jobs}
            renderItem={({item})=>(
        <View style={styles.viewJob}>
        <Image
          source={require("./image/IconCheck.PNG")}
          style={{ width: 20, height: 20, marginLeft: -50 }}
        ></Image>
        <Text style={{ marginLeft: 20 }}>{item}</Text>
        <Image
          source={require("./image/IconEdit.PNG")}
          style={{ width: 20, height: 20, marginLeft: 20 }}
        ></Image>
        </View>
      )}
      />
      </View>
        <Pressable style={styles.btn}>
           <Text style={{alignSelf:"center"}}>+</Text>
        </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection:"column",
    },
    btn:{
      marginTop: -50,
      width: 60,
      height: 60,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#00BDD6",
      borderRadius: 30,
      color: "white",
      fontSize: 30,
      fontWeight: 600,
    },
    viewAvatar:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",
        height:80,
        width:100
    },
    viewSearch:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",
        width:334,
        height:44,
        marginTop:40,
        borderRadius:5,
        borderWidth:2
    },
    viewJob:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",
        // marginTop:4,
        width:335,
        height:48,
        backgroundColor:"grey",
        borderRadius:25,
        alignSelf:'center',
      justifyContent:'center',
      marginVertical:10,
      marginHorizontal:10,
      flexDirection:'row',
    }, 

});