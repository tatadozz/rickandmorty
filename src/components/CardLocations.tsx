import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';

interface Props {
    item: {
        name: string,
        type: string,
        dimension: string
    }
};

const CardLocations = (props: Props) => {
    const navigation = useNavigation()
    const {item} = props

  return (
    <Card style={styles.card}>
        <Card.Title titleStyle={{color: "#7cbc4e"}} title={item.name} />
       <Text style={styles.txt}>Type : {item.type}</Text>
       <Text style={styles.txt}>Dimension : {item.dimension}</Text>    
    </Card>
  );
};

const styles = StyleSheet.create({
    card: {
        margin: 20,
        minHeight: 100,
        backgroundColor: "#333333"
    },
    txt: {
        color: "#7cbc4e",
        paddingHorizontal: 20,
        paddingVertical: 10
    }

});

export default CardLocations;
