import React from "react";
import { View, Text, TouchableOpacity, Image, Pressable,TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";
import Constants from "expo-constants";
import AntDesign from '@expo/vector-icons/AntDesign';

const statusBarHeight = Constants.statusBarHeight;
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function Register() {
      const navigation = useNavigation<NavigationProp>();

 return (
   <View style={{ flex: 1, paddingTop:statusBarHeight }} >
    <View className="bg-white w-full ">
      <View className="bg-blue-500 w-2/4 h-24 justify-center items-center rounded-br-full ">
        <Text className="color-white font-bold text-4xl">Cadastro</Text>
      </View>
    </View>
    <View style={{ flex: 2 }} className="w-full h-full bg-white flex justify-center items-center">
      <View className="w-full h-4/6 bg-white flex justify-center items-center px-4 gap-20 bottom-16">
        <View className="w-full items-start justify-center relative">
          <TextInput
            className="w-full border border-blue-500 px-4 rounded-xl bg-white h-11"
            keyboardType="email-address"
            placeholderTextColor="black"
          ></TextInput>
          <View className="px-10 ms-5 absolute bottom-10 rounded-xl py-1 bg-white">
            <Text className="color-blue-500">Nome</Text>
          </View>
        </View>
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
            keyboardType="email-address"
            placeholderTextColor="black"
          ></TextInput>
          <View className="px-10 ms-5 absolute bottom-10 rounded-xl py-1 bg-white">
            <Text className="color-blue-500">Senha</Text>
          </View>
        </View>
                <View className="w-full items-start justify-center relative">
          <TextInput
            className="w-full border border-blue-500 px-4 rounded-xl bg-white h-11"
            keyboardType="email-address"
            placeholderTextColor="black"
          ></TextInput>
          <View className="px-10 ms-5 absolute bottom-10 rounded-xl py-1 bg-white">
            <Text className="color-blue-500">Confirmar senha</Text>
          </View>
        </View>
        <View className="w-full items-start justify-center relative">
          <TextInput
            className="w-full border border-blue-500 px-4 rounded-xl bg-white h-11"
            keyboardType="email-address"
            placeholderTextColor="black"
          ></TextInput>
          <View className="px-10 ms-5 absolute bottom-10 rounded-xl py-1 bg-white">
            <Text className="color-blue-500">Data de nascimento</Text>
          </View>
        </View>
        </View>
      <View className="w-full bg-white flex justify-center items-end px-4 gap-20" >
        <TouchableOpacity onPress={() => navigation.navigate("SearchRegister")}>
          <View className="h-16 w-16 bg-blue-500 rounded-full flex justify-center items-center">
            <AntDesign name="arrowright" size={24} color="white"/>
          </View>
        </TouchableOpacity>
      </View>
    </View>

   </View>
  );
}