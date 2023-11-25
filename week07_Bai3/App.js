import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Screen1 from "./component/Screen1";
import Screen2 from "./component/Screen2";
import Screen3 from "./component/Screen3";
import Screen4 from "./component/Screen4";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import store from "./redux/store";
import { Provider } from "react-redux";
const icon = () => {
  return (
    <TouchableOpacity>
      <Image
        style={{ width: 30, height: 30, left: -15 }}
        source={require("./component/img/Search.png")}
      />
    </TouchableOpacity>
  );
};

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Screen1"
            component={Screen1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Shops Near Me"
            component={Screen2}
            options={{
              headerTitleStyle: {
                fontSize: 25,
                fontWeight: 600,
              },
              headerRight: () => icon(),
            }}
          />
          <Stack.Screen
            name="Drinks"
            component={Screen3}
            options={{
              headerTitleStyle: {
                fontSize: 25,
                fontWeight: 600,
              },
              headerRight: () => icon(),
            }}
          />
          <Stack.Screen
            name="Your Orders"
            component={Screen4}
            options={{
              headerTitleStyle: {
                fontSize: 25,
                fontWeight: 600,
              },
              headerRight: () => icon(),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
