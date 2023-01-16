import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import HomePageDisplay from './homepage/hompagedisplay';
import Devicedisplay from './devicepage/devicedisplay';
import BatteryCard from './homepage/cards/batterycard';
 

const App = () => {

  return (
      <HomePageDisplay/>
      // <Devicedisplay/>
      // <BatteryCard/>
    
  );
};

export default App;
