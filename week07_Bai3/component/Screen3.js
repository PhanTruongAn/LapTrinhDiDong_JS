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
export default function Screen3({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F3F4F6",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <View
        style={{
          width: 350,
          height: 65,
          backgroundColor: "white",
          alignSelf: "center",
          flexDirection: "row",
        }}
      >
        <Image
          source={require("./img/Drink.png")}
          style={{ width: 65, height: 65, alignSelf: "center" }}
        ></Image>
        <View
          style={{
            width: 150,
            height: 65,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 400 }}>Milk</Text>
          <Text>$25</Text>
        </View>
        <View
          style={{
            width: 135,
            height: 65,
            borderRadius: 8,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Image
            source={require("./img/Tru.png")}
            style={{ width: 20, height: 20, alignSelf: "center" }}
          ></Image>
          <Image
            source={require("./img/Cong.png")}
            style={{ width: 20, height: 20, alignSelf: "center" }}
          ></Image>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: 370,
          height: 50,
          backgroundColor: "#EFB034",
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 17,
            fontWeight: 500,
            color: "white",
            alignSelf: "center",
          }}
        >
          ADD TO CART
        </Text>
      </TouchableOpacity>
    </View>
  );
}
