import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BatteryCard = () => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.card}>
                <Text style={styles.title}>92% Battery storage</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        paddingLeft: 30,
        paddingTop: 30
    },
    card: {
        backgroundColor: 'white',
        shadowColor: '#ccc',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 2},
        elevation: 2
    },
    title: {
        fontSize: 20,
        padding: 10,
    },
});

export default BatteryCard;
