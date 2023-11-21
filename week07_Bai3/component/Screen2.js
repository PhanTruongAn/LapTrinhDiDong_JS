import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
export default function Screen2({ navigation }) {
  var route = useRoute();
  var [data, setData] = useState(route.params?.newData);
  useEffect(() => {
    if (route.params?.newData) {
      setData(route.params.newData);
    }
  }, [route.params?.newData]);
  useEffect(() => {
    fetch(`https://65420869f0b8287df1ff5d0a.mockapi.io/Bai3`)
      .then((response) => response.json())
      .then((json) => {
        data = json;
        setData(json);
      });
  }, [route.params]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F3F4F6",
      }}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              item.status === "Open"
                ? navigation.navigate("Drinks", { item })
                : alert("Shop closed!")
            }
            style={{
              width: 370,
              height: 230,
              borderRadius: 8,
              flexDirection: "column",
              borderRadius: 8,
              justifyContent: "space-evenly",
              backgroundColor: "white",
            }}
          >
            <Image
              source={{ uri: item.img }}
              style={{ top: -2, width: 370, height: 125, borderRadius: 8 }}
            ></Image>
            <View
              style={{
                width: 370,
                height: 40,
                backgroundColor: "white",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <View
                style={{
                  width: 340,
                  height: 40,
                  backgroundColor: "#F3F4F6",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <Image
                  source={
                    item.status === "Open"
                      ? require("./img/Check.png")
                      : require("./img/Locked.png")
                  }
                  style={{
                    width: 20,
                    height: 16,
                    alignSelf: "center",
                    justifyContent: "center",
                  }}
                ></Image>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    alignSelf: "center",
                    color: item.status === "Open" ? "green" : "red",
                  }}
                >
                  {item.status === "Open"
                    ? "Accepting Orders"
                    : "Tempory Unvailable"}
                </Text>
                <Image
                  style={{ width: 20, height: 20, alignSelf: "center" }}
                  source={require("./img/Clock.png")}
                ></Image>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    alignSelf: "center",
                    color: "red",
                  }}
                >
                  {item.delivery}
                </Text>
              </View>

              <Image
                source={require("./img/Location.png")}
                style={{
                  width: 17,
                  height: 22,
                  alignSelf: "center",
                }}
              ></Image>
            </View>
            <Text style={{ fontSize: 18, fontWeight: 700 }}>{item.name}</Text>
            <Text style={{ fontSize: 14, fontWeight: 400, color: "gray" }}>
              {item.address}
            </Text>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
}
