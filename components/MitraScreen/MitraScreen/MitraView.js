import * as React from 'react';
import {
  View, 
  Text, 
  ScrollView, 
  SafeAreaView, 
  StyleSheet,
  FlatList,
  YellowBox,
  ActivityIndicator,} from 'react-native';
import TopNotification from '../../HomeScreen/HomeComponent/TopNotification';
import SearchBar from '../../HomeScreen/HomeComponent/SearchBar';
import Count from '../MitraComponent/Count';
import List from '../MitraComponent/MitraList'
import HeaderTitle from '../../HomeScreen/HomeComponent/HeaderTitle'

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

const MitraView = ({navigation}) => {
  const [regionals, setRegionals] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    fetch('https://demo.pedulibersama.id/api/regionals')
      .then((response) => response.json())
      .then((json) => setRegionals(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.ScreenView}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopNotification />
        <HeaderTitle />
        <View style={styles.search}>
            <SearchBar />
            <Count/>
            {loading ? (
            <ActivityIndicator size="large" color="#48B349"/>
            ) : (
              <FlatList
               style={{paddingTop:10, marginTop:14}}
                data={regionals}
                numColumns={1}
                keyExtractor={({id}) => id.toString()}
                renderItem={({item}) => (
                  <List item={item} navigation={navigation} />
                )}
              />
              )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  ScreenView:{
    flex:1,
    backgroundColor: '#fff'
  },
  search:{
      paddingHorizontal: 15,

  }
})

export default MitraView;
