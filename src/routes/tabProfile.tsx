import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, SafeAreaView } from 'react-native';



import Tarefas from "../pages/Profile/tarefas";
import Desempenho from "../pages/Profile/desempenho";

export type RootStackParamList = {
  Tarefas: undefined;
  Desempenho: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function TabProfile() {
  return ( 
    <Stack.Navigator>
      <Stack.Screen
        name="Tarefas"
        component={Tarefas}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Desempenho"
        component={Desempenho}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}
