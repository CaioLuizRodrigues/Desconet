import React from "react";
import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";


type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Login">;

export default function Register() {
      const navigation = useNavigation<NavigationProp>();

 return (
   <View>
    <Text>Cadastro</Text>
   </View>
  );
}