import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';

type Props = {
    item: {
        name: string,
        air_date: string,
        episode: string
    }
};

const CardEpisodes = (props: Props) => {
    const navigation = useNavigation()
    const {item} = props

  return (
    <View style={styles.card}>
        <View style={styles.left}>
            <Text style={styles.ep}>{item.episode}</Text>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.date}>{item.air_date}</Text>
        </View>
        <View style={styles.right}>
        <IconButton
            icon="checkbox-blank-outline"
            color={"#fff"}
            size={34}
            onPress={() => alert('Coming soon')}
        />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
        margin: 20,
        padding: 20,
        minHeight: 120,
        backgroundColor: "#333333",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    ep: {
        fontWeight: "bold",
        fontSize: 24,
        color: "white",
    },
    title: {
        fontSize: 20,
        color: "white"
    },
    date: {
        marginTop: 10,
        color: "white"
    },
    left: {
        width: "85%"
    }

});

export default CardEpisodes;
