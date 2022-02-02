import { SafeAreaView, StyleSheet, Image, Text, View, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import React from 'react';
import { Button, IconButton } from 'react-native-paper';

type Props = {
    route: any,
    navigation: any
};

const DetailsCharactersScreen = ({route, navigation}: Props) => {
    const {
        name,
        image,
        status,
        species,
        gender
    } = route.params.item;

    return (
    <SafeAreaView style={styles.safeContainer}>
        <View>
            <Image
            style={styles.img}
            source={{
                uri: image,
              }}
            />
        </View>
        <View style={styles.container}>
                <Text style={styles.name}>{name}</Text>

                <View style={styles.content}>
                    <Text style={styles.alive}>Status : {status}</Text>
                    <Text style={styles.sub}>Species : {species}</Text>
                    <Text style={styles.sub}>Gender : {gender}</Text>
                </View>
                <Button mode="contained" uppercase={true} onPress={() => alert('Coming soon')}>Add to my collection</Button>
        </View>
    </SafeAreaView>
  );
};

export default DetailsCharactersScreen;

const styles = StyleSheet.create({
    img: {
        width: "100%",
        minHeight: "40%",
    },
    safeContainer: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: "#1e1e1e"
    },
    container: {
        padding: 40
    },
    name: {
        fontSize: 36,
        color: "#7abd4e",
        fontWeight: "bold"
    },
    alive: {
        color: "white",
        fontSize: 22,
        marginTop: 10
    },
    sub: {
        marginTop: 20,
        color: "white",
        fontSize: 22
    },
    content: {
        marginVertical: 40
    }

});
