import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const api = {
    url: process.env.EXPO_PUBLIC_API_URL,
    key: process.env.EXPO_PUBLIC_API_KEY,
    icons: process.env.EXPO_PUBLIC_ICONS_URL,
};

export default function Weather(props) {

    const [temp, setTemp] = useState(0);
    const [description, setDescription] = useState('');
    const [icon, setIcon] = useState('');

    useEffect(() => {
        const url =
            api.url +
            'lat=' +
            props.latitude +
            '&lon=' +
            props.longitude +
            '&units=metric' +
            '&appid=' +
            api.key;

        fetch(url)
            .then(response => response.json())
            .then((json) => {
                console.log(json);
                setTemp(json.main.temp);
                setDescription(json.weather[0].description);
                setIcon(api.icons + json.weather[0].icon + '@2x.png');
            })
            .catch((error) => {
                console.log('Error retrieving weather data');
                console.log(error);
            });
    }, []);

    const styles = StyleSheet.create({
        temp: {
            fontSize: 16,
            color: '#000d0e',
            fontWeight: 'bold',
            textAlign: 'center',
            fontFamily: 'sans-serif',
            marginBottom: 20,
        },
    });

    return (
        <View>
            <Text style={styles.temp}>{temp}</Text>
            {icon && <Image source={{ uri: icon }} style={{ width: 100, height: 100 }} />}
            <Text>{description}</Text>
        </View>
    );
}
