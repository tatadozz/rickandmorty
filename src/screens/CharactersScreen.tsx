import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ActivityIndicator, Button, Colors } from 'react-native-paper';
import { useCharacters } from '../hooks/useCharacters';
import CardItem from '../components/CardItem';

type Props = {};

const CharactersScreen = ({}) => {
  const { isLoading, isError, data, refetch } = useCharacters();
  if (isLoading) {
    return (
        <SafeAreaView>
            <Text>⌛️ Loading</Text>
            <ActivityIndicator />
        </SafeAreaView >
    )
  }
  if (isError) {
      return (
          <SafeAreaView>
              <Text>😢 Error</Text>
              <Button onPress={refetch}>refetch</Button>
          </SafeAreaView>
      )
  }

  const renderItem = (props: any) => (
    <CardItem {...props} />
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <FlatList
        data={data.results}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: Colors.blueGrey100
  }
});

export default CharactersScreen;