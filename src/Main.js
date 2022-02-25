import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const Main = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.h1}>Hello World!</Text>
            <Text style={styles.paragraph}>This is my app</Text>
            <Image source={require('../assets/images/hello-world.jpg')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    h1: {
        fontSize: 48,
        fontWeight: 'bold'
    },
    paragraph: {
        marginTop: 24,
        marginBottom: 24,
        fontSize: 18
    }
});

export default Main;