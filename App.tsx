import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import "./src/styles/global.css"


import Routes from './src/routes/index'
import Profile from './src/pages/Profile';


const App = () => {

  return (
    //<NavigationContainer>
      //<StatusBar  backgroundColor='#5e17eb' barStyle='light-content'/>
      //<Routes/> 
    //</NavigationContainer>
    <NavigationContainer>
      <Profile/>
    </NavigationContainer>
  );
};



export default App;