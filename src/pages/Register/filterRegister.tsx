import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  TextInput,
  StyleSheet,
  FlatList 
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Constants from "expo-constants";
import { useState } from "react";

const statusBarHeight = Constants.statusBarHeight;

export default function FilterRegister() {
 const items: string[] = [
    'Academia', 'Filmes',
    'Yoga', 'Séries',
    'Corrida', 'Bicicleta',
    'Parques', 'Futebol',
    'Cinema', 'Música',
    'Dança', 'Animais',
    'Caminhada', 'Comer',
    'Shows', 'Bares',
  ];

const [selected, setSelected] = useState<string[]>([]);

  const toggleSelect= (item: string) =>{
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  return (
    <View style={{ flex: 1, paddingTop: statusBarHeight }}>
      <View className="bg-white w-full ">
        <View className="bg-blue-500 w-2/4 h-24 justify-center items-center rounded-br-full ">
          <Text className="color-white font-bold text-4xl">Cadastro</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Me conte mais sobre as atividades que você gosta.</Text>
      <FlatList
        data={items}
        numColumns={2}
        keyExtractor={(item) => item}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.chip,
              selected.includes(item) && styles.chipSelected,
            ]}
            onPress={() => toggleSelect(item)}
          >
            <Text style={[
              styles.chipText,
              selected.includes(item) && styles.chipTextSelected,
            ]}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.list}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingTop: 50,
    paddingLeft: 30,
    backgroundColor: '#fff',
    display: "flex",
    alignItems: "flex-start",
    justifyContent: 'flex-start'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: '#007AFF',
    fontWeight: '600',
    marginBottom: 20,
  },
  list: {
    paddingHorizontal: 20,
  },
  row: {
    display:'flex',
    justifyContent: 'space-evenly',
    marginBottom: 12,
  },
  chip: {
    backgroundColor: '#F2F2F2',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: '#F2F2F2',
    minWidth: 120,
    alignItems: 'center',
  },
  chipSelected: {
    backgroundColor: '#007AFF20',
    borderColor: '#007AFF',
  },
  chipText: {
    color: '#333',
    fontSize: 14,
    fontWeight: '500',
  },
  chipTextSelected: {
    color: '#007AFF',
    fontWeight: '600',
  },
});
