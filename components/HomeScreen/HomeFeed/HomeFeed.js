import * as React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,ActivityIndicator, View
} from 'react-native';

import Top from '../Top/Top';
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
        <Top />
        <View style={{paddingHorizontal:15, backgroundColor:'#fff'}}>
        <Image
            source={require('../../../assets/banner.jpg')}
            style={{ width: '100%', height: 132,borderRadius:6}}
          />
        </View>
        <Count />
        {loading ? (
        <ActivityIndicator size="large" color="#48B349" style={{paddingTop:'50%'}}/>
        ) : (
          <FlatList
            style={styles.container}
            data={feed}
            numColumns={1}
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
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor:'#fff',
    marginTop:10
  },
});

export default HomeScreen;
