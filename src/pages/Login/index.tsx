import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Login">;

export default function Login() {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ flex: 2 }}
        className="w-full bg-white flex justify-center items-center px-4"
      >
        <Image
          source={require("../../assets/img/Logo.png")}
          className="w-full h-36 top-10"
          resizeMode="cover"
        ></Image>
        <Text className="color-blue-500 font-bold text-4xl top-10">Login</Text>
      </View>
      <View
        style={{ flex: 2 }}
        className="w-full bg-white flex justify-center items-center px-4 gap-7"
      >
        <View className="w-full items-start justify-center relative">
          <TextInput
            className="w-full border border-blue-500 px-4 rounded-xl bg-white h-11"
            keyboardType="email-address"
            placeholderTextColor="black"
          ></TextInput>
          <View className="px-10 ms-5 absolute bottom-10 rounded-xl py-1 bg-white">
            <Text className="color-blue-500">E-mail</Text>
          </View>
        </View>
        <View className="w-full items-start justify-center relative">
          <TextInput
            className="w-full border border-blue-500 px-4 rounded-xl bg-white h-11"
            secureTextEntry={true}
            placeholderTextColor="black"
          ></TextInput>
          <View className="px-10 ms-5 absolute bottom-10 rounded-xl py-1 bg-white">
            <Text className="color-blue-500">Senha</Text>
          </View>
        </View>
        <TouchableOpacity
          className="bg-blue-500  w-full rounded-xl px-4 flex items-center justify-center h-10"
          onPress={() => navigation.navigate("Home")}
        >
          <Text className="color-white">Login</Text>
        </TouchableOpacity>
        <Text>Não tem conta?</Text>
        <Pressable className="color-blue-400 text-xs">
          <Text
            className="color-blue-400"
            onPress={() => navigation.navigate("Register")}
          >
            Crie sua conta
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
