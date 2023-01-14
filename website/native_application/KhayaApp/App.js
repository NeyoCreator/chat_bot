import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
  const [showText, setShowText] = useState(true);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {showText && <Text>Hello World</Text>}
      <Button title="Toggle Text" onPress={() => setShowText(!showText)} />
    </View>
  );
};

export default App;
