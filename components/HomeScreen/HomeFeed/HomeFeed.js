import * as React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';

import Count from '../Count/Count';
import ListItem from '../LisItem/ListItem';

const HomeScreen = ({navigation}) => {
  const [feed, setFeed] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://demo.pedulibersama.id/api/campaigns/feed')
      .then((response) => response.json())
      .then((json) => setFeed(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Count />
        {loading ? (
          <Text>Loading</Text>
        ) : (
          <FlatList
            style={styles.container}
            data={feed}
            numColumns={2}
            keyExtractor={({id}, index) => id.toString()}
            renderItem={({item}) => (
              <ListItem item={item} navigation={navigation} />
            )}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default HomeScreen;
