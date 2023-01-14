import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LoadSheddingTittle = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Load Shedding schedule</Text>
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

export default LoadSheddingTittle;