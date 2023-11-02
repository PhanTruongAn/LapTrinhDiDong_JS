import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screen1 from "./component/Screen1";
import Screen2 from "./component/Screen2";
import Screen3 from "./component/Screen3";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} options={{headerShown:false}}/>
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
    // <Screen2/>
  );
}