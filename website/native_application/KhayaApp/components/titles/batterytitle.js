import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const BatteryTitle = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Battery storage</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 30
    },
    text: {
        fontSize: 30
    }
    
});

export default BatteryTitle;
