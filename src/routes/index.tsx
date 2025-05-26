import { StackRouter } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";

import Login from "../pages/Login";
import Welcome from "../pages/Welcome";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Home from "../pages/home/home";
import SearchRegister from "../pages/Register/searchRegister";
import FilterRegister from "../pages/Register/filterRegister";

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Profile: undefined;
  Tarefas: undefined;
  Desempenho: undefined;
  SearchRegister: undefined;
  FilterRegister: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SearchRegister"
        component={SearchRegister}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="FilterRegister"
        component={FilterRegister}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
