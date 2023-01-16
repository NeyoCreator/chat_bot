import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BatteryTitle = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Battery storage</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingvertical:20
    },
    text: {
        fontSize: 30
    }
    
});

export default BatteryTitle;
