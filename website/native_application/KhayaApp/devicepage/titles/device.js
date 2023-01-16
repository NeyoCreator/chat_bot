import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DeviceTitle = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Connect Device to internet</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 30

    },
    text: {
        fontSize: 30
    }
    
});

export default DeviceTitle;
