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
        paddingTop:40,
        paddingBottom:15,
        paddingLeft: 30
        
    },
    text: {
        fontSize: 30
    }
    
});

export default BatteryTitle;
