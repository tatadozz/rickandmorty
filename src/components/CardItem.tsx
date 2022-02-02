import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';

interface Props {
    item: {
        name: string,
        image: string
    }
};

const CardItem = (props: Props) => {
    const navigation = useNavigation()
    const {item} = props

  return (
    <Card style={styles.card}>
        <Card.Cover source={{uri: item.image}} />
        <Card.Title titleStyle={{color: "#7cbc4e"}} title={item.name} />
    </Card>
  );
};

export default CardItem;

const styles = StyleSheet.create({
    card: {
        margin: 20,
        minHeight: 100,
        backgroundColor: "#333333"
    }
});
