import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import "./src/styles/global.css"


import Routes from './src/routes/index'


const App = () => {

  return (
    <NavigationContainer>
      <StatusBar  backgroundColor='#5e17eb' barStyle='light-content'/>
      <Routes/> 
    </NavigationContainer>
  );
};



export default App;
