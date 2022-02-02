import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CardEpisodes from '../components/CardEpisodes';
import HeadTitle from '../components/HeadTitle';
import { ActivityIndicator, Button } from 'react-native-paper';
import { useEpisodes } from '../hooks/useEpisodes';

type Props = {};

const EpisodesScreen = (props: Props) => {
  const { isLoading, isError, data, refetch } = useEpisodes();
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
    <CardEpisodes {...props} />
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <HeadTitle title={"Episodes"}/>
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

export default EpisodesScreen;