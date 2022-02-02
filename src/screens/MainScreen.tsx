import { View, StyleSheet, Text, ImageBackground, Image } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { Routes } from '../navigation/Routes';

interface MainScreenProps {
    navigation: any
}

const MainScreen = ({navigation}:MainScreenProps) => {
  return (
    <View>
        <ImageBackground style={styles.bg} source={require('../../assets/bg.jpg')}>
            <View style={styles.container}>
                <View style={styles.boximg}>
                <Image style={styles.img} source={require('../../assets/logo.png')}/>
                </View>
                <Button style={styles.btn} mode="contained" onPress={() => navigation.navigate(Routes.CHARACTERS_SCREEN)}>
                    <Text style={styles.txt}>Characters</Text>
                </Button>
                <Button style={styles.btn} mode="contained" onPress={() => navigation.navigate(Routes.LOCATIONS_SCREEN)}>
                    <Text style={styles.txt}>Locations</Text>
                </Button>
                <Button style={styles.btn} mode="contained" onPress={() => navigation.navigate(Routes.EPISODES_SCREEN)}>
                    <Text style={styles.txt}>Episodes</Text>
                </Button>
            </View>
        </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
    bg: {
        width: "100%",
        minHeight: "100%"
    },
    img: {
        height: 125,
        width: 350
    },
    container: {
        minHeight: "100%",
        justifyContent: "space-evenly",
        padding: 40
    },
    btn: {
        padding: 20
    },
    txt: {
        fontSize: 24,
        fontWeight: "bold"
    }
})

export default MainScreen;
