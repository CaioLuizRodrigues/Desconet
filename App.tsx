import React from "react";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import "./src/styles/global.css";

import Routes from "./src/routes/index";


const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#1b86ea" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
