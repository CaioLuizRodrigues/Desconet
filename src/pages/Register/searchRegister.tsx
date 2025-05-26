import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  TextInput,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Constants from "expo-constants";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import { RootStackParamList } from "../../routes";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const statusBarHeight = Constants.statusBarHeight;

export default function SearchRegister() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Ajudar um familiar ou amigo", value: "ajudar" },
    { label: "Me desconectar", value: "me_desconectar" },
    { label: "Buscar informações", value: "informacoes" },
  ]);

  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={{ flex: 1, paddingTop: statusBarHeight }}>
      <View className="bg-white w-full ">
        <View className="bg-blue-500 w-2/4 h-24 justify-center items-center rounded-br-full ">
          <Text className="color-white font-bold text-4xl">Cadastro</Text>
        </View>
      </View>
      <View
        style={{ flex: 2 }}
        className=" bg-white flex justify-start items-start px-8"
      >
        <Text className="color-blue-500 font-bold text-2xl p-3">
          O que você busca no Desconet
        </Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Selecione uma opção"
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          placeholderStyle={styles.placeholder}
          textStyle={styles.textStyle}
        />
      </View>
      <View className="w-full bg-white flex justify-center items-end px-4 gap-20">
        <TouchableOpacity onPress={() => navigation.navigate("FilterRegister")}>
          <View className="h-16 w-16 bg-blue-500 rounded-full flex justify-center items-center">
            <AntDesign name="arrowright" size={24} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  label: {
    marginBottom: 8,
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
  dropdown: {
    borderColor: "#007AFF",
    borderWidth: 1.5,
    borderRadius: 12,
    width: 280,
    backgroundColor: "#fff",
  },
  dropdownContainer: {
    borderColor: "#007AFF",
    borderWidth: 1.5,
    borderRadius: 12,
    width: 280,
    backgroundColor: "#fff",
  },
  placeholder: {
    color: "#999",
    fontWeight: "400",
  },
  textStyle: {
    fontSize: 14,
    color: "#333",
  },
});
