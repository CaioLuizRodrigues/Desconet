import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  TextInput,
  StyleSheet,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";
import Constants from "expo-constants";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";



type NavigationProp = NativeStackNavigationProp<RootStackParamList>;


export default function ConnectionRegister() {
    const navigation = useNavigation<NavigationProp>();
  const data = [
    { id: "1", name: "Joana Bezerra", code: "Cod 123" },
    { id: "2", name: "Joana Bezerra", code: "Cod 123" },
    { id: "3", name: "Joana Bezerra", code: "Cod 123" },
    { id: "4", name: "Joana Bezerra", code: "Cod 123" },
  ];

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>Cadastro</Text>
      </View>


      <View style={styles.searchContainer}>
        <Text style={styles.label}>Estabeleça uma conexão</Text>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="Codigo da conta da vitima ex:123"
            placeholderTextColor="#000"
            style={styles.input}
          />
          <Feather name="search" size={20} color="#3B82F6" />
        </View>
      </View>


      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        style={styles.list}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/women/44.jpg",
              }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.code}>{item.code}</Text>
            </View>
          </View>
        )}
      />

      <TouchableOpacity style={styles.buttonNext} onPress={() => navigation.navigate("Login")}>
        <Feather name="arrow-right" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  searchContainer: {
    marginTop: 30,
    backgroundColor: "#fff",
    borderColor: "#3B82F6",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    color: "#000",
    marginBottom: 8,
    fontWeight: "600",
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#3B82F6",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    height: 40,
    color: "#000",
  },
  list: {
    marginTop: 20,
  },
  item: {
    backgroundColor: "#3B82F6",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    marginRight: 10,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  code: {
    color: "#fff",
    fontSize: 12,
  },
  buttonNext: {
    backgroundColor: "#3B82F6",
    width: 60,
    height: 60,
    borderRadius: 9999,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    right: 20,
  },
});
