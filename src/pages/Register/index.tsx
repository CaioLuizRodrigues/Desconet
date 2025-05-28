import React from "react";
import { View, Text, TouchableOpacity, Image, Pressable,TextInput, StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";
import Constants from "expo-constants";
import AntDesign from '@expo/vector-icons/AntDesign';

const statusBarHeight = Constants.statusBarHeight;
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function Register() {
  const navigation = useNavigation<NavigationProp>();

  const renderInput = (label: string) => (
  <View style={styles.inputWrapper}>
    <TextInput
      placeholderTextColor="black"
      style={styles.input}
      keyboardType="email-address"
    />
    <View style={styles.labelWrapper}>
      <Text style={styles.label}>{label}</Text>
    </View>
  </View>
);


  return (
    <View style={[styles.container]}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Cadastro</Text>
        </View>
      </View>


      <View style={styles.formContainer}>
        <View style={styles.inputsArea}>
          {renderInput("Nome")}
          {renderInput("E-mail")}
          {renderInput("Senha")}
          {renderInput("Confirmar senha")}
          {renderInput("Data de nascimento")}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("SearchRegister")}
          >
            <View style={styles.button}>
              <AntDesign name="arrowright" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop:statusBarHeight
  },
  headerContainer: {
    width: "100%",
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#3B82F6",
    width: "50%",
    height: 96,
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 9999,
  },
  headerText: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  formContainer: {
    flex: 2,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  inputsArea: {
    width: "100%",
    height: "70%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 30,
    bottom: 16,
  },
  inputWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    position: "relative",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#3B82F6",
    borderRadius: 12,
    backgroundColor: "#fff",
    height: 44,
    paddingHorizontal: 16,
    color: "#000",
  },
  labelWrapper: {
    position: "absolute",
    bottom: 44,
    left: 20,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 8,
  },
  label: {
    color: "#3B82F6",
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 16,
  },
  button: {
    height: 64,
    width: 64,
    backgroundColor: "#3B82F6",
    borderRadius: 9999,
    justifyContent: "center",
    alignItems: "center",
  },
});
