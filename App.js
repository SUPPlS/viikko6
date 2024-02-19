import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Position from './components/Position';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Current Weather</Text>
            <Position />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00a388',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
      fontSize: 16,
      color: '#000d0e',
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: 'sans-serif',  
      marginBottom: 20,
  },
});