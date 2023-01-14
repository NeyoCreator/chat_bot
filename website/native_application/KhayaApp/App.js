import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Display from './components/display';

const App = () => {
  // const [showText, setShowText] = useState(true);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Display/>
    </View>
  );
};

export default App;
