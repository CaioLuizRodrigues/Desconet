import { View, Text, Image, Pressable, ScrollView } from "react-native";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import TabProfile from "../../routes/tabProfile";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/tabProfile";
import { useState } from "react";


const statusBarHeight = Constants.statusBarHeight;
type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Tarefas","Desempenho">;
type TabNames = "Tarefas" | "Desempenho";

export default function Profile() {
   const navigation = useNavigation<NavigationProp>();
 
   const [selectedTab, setSelectedTab] = useState<TabNames>("Tarefas");


   
  return (
    <View style={{ flex: 1 }} className="relative w-full">
      <View className="w-full ">
        <Image
          source={require("../../assets/img/Wallpaper.png")}
          className="w-full h-full"
        ></Image>
      </View>
      <View
        style={{ borderTopLeftRadius: "20%" }}
        className="bg-white w-full h-full absolute top-32"
      >
        <View
          style={{ borderTopLeftRadius: "40%" }}
          className="bg-white w-full fle-row  flex-row justify-between items-center gap-3 rounded-tl-sm  pe-10"
        >
          <View
            style={{ borderTopLeftRadius: "40%" }}
            className="bg-white w-3/5 h-48 flex-row  "
          >
            <Image
              source={require("../../assets/img/Profile.png")}
              className="size-32 rounded-full mt-6 mb-6 ms-3"
            ></Image>
            <View className="bg-white w-1/2 h-4/6 mt-6 ms-3 flex-col justify-between">
              <View>
                <Text className="font-bold text-xl">Luizinho</Text>
                <Text className="text-sm">@alberth-luiz</Text>
              </View>
              <View>
                <Text className="text-sm font-bold">Desempenho atual</Text>
              </View>
            </View>
          </View>
        </View>
        <View className="w-max h-full ms-3 me-3 mt-3 ">
            <TabProfile />
        </View>
      </View>
    </View>
  );
}
