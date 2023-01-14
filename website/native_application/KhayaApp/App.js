import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Display from './components/display';
import BatteryTitle from './components/titles/batterytitle';
import BatteryCard from './components/cards/batterycard';
import LoadSheddingTittle from './components/titles/loadsheddingtitle';
import LoadSheddingCard from './components/cards/loadsheddingcard';

const App = () => {
  // const [showText, setShowText] = useState(true);

  return (
      <View>

      {/* 1.BATTERY INFORMATION */}
      <br></br>
      {/* <BatteryTitle/>
      <br></br>
      <BatteryCard/> */}

      <br></br>
      <br></br>

      {/* 2.LOADSHEDDING DATA */}
      {/* <LoadSheddingTittle/>
      <br></br>
      <LoadSheddingCard/> */}

     <h1>Hello</h1>


      </View>
    
  );
};

export default App;
