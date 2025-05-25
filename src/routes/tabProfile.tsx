import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Tarefas from "../pages/Profile/tarefas";
import Desempenho from "../pages/Profile/desempenho";

export type RootStackParamList = {
  Tarefas: undefined;
  Desempenho: undefined;
};

const Tab = createMaterialTopTabNavigator<RootStackParamList>();

export default function TabProfile() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Tarefas" 
        component={Tarefas} 
      />

      <Tab.Screen 
        name="Desempenho" 
        component={Desempenho} />
    </Tab.Navigator>
  );
}
