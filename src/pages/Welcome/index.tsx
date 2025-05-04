import React from "react";
import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";

import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Welcome">;

export default function Welcome() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={{ flex:1 }} >
      <View style={{ flex:2 }} className="w-full bg-white flex justify-center items-center px-4">
        <Image source={require('../../assets/img/Logo.png')} className="w-full h-36"></Image>
        <Text className=" color-blue-600 text-2xl">Controle Digital</Text>
      </View>
      <View style={{ flex:2 }} className="w-full bg-blue-500 flex justify-center items-center px-4 gap-3">
        <Text className="color-white font-bold text-3xl">Entrar</Text>
        <Text className="color-white font-bold text-xs">Faça seu login</Text>
        <TouchableOpacity className="bg-white w-3/4 rounded-xl items-center flex-row justify-center h-10 gap-3" onPress={() => navigation.navigate("Login")}>
          <View className="h-8 w-8 bg-blue-500 rounded-full flex justify-center items-center">
            <MaterialIcons name="email" size={24} color="white" />
          </View>
            <Text>Continue com email</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-blue-500 w-2/3 rounded-xl items-center border border-white flex-row justify-center gap-3 h-10" onPress={() => navigation.navigate('Login')}>
          <View className="h-8 w-8 bg-white rounded-full flex justify-center items-center">
            <AntDesign name="googleplus" size={24} color="#1b86ea" />
          </View>
            <Text>Login com o Google</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}
