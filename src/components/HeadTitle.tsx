import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Colors, IconButton } from 'react-native-paper';

type Props = {
    title: string;
};

const HeadTitle = (props: Props) => {
    return (
        <View style={styles.row}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    title: {
        fontWeight: "bold",
        fontSize: 28,
        marginLeft: 20,
        padding: 10,
        textAlign: "center",
        color: "#7cbc4e"
    }
})

export default HeadTitle;