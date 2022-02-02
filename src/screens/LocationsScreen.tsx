import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ActivityIndicator, Button, Colors } from 'react-native-paper';
import { useCharacters } from '../hooks/useCharacters';
import CardItem from '../components/CardItem';
import HeadTitle from '../components/HeadTitle';
import { useLocations } from '../hooks/useLocations';
import CardLocations from '../components/CardLocations';

type Props = {};

const LocationsScreen = ({}) => {
  const { isLoading, isError, data, refetch } = useLocations();
  if (isLoading) {
    return (
        <SafeAreaView>
            <HeadTitle title={"⌛️ Loading"}/>
            <ActivityIndicator />
        </SafeAreaView >
    )
  }
  if (isError) {
      return (
          <SafeAreaView>
              <HeadTitle title={"😢 Error"}/>
              <Button onPress={refetch}>refetch</Button>
          </SafeAreaView>
      )
  }

  const renderItem = (props: any) => (
    <CardLocations {...props} />
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <HeadTitle title={"Locations"}/>
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
    backgroundColor: "#1e1e1e"
  }
});

export default LocationsScreen;
