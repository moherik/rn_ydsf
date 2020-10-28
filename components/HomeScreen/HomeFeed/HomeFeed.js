import * as React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
  YellowBox,
} from 'react-native';
import TopNotification from '../HomeComponent/TopNotification';
import HeaderTitle from '../HomeComponent/HeaderTitle'
import Count from '../Count/Count';
import SearchBar from '../HomeComponent/SearchBar';
import ListItem from '../LisItem/ListItem';
import ListBlog from '../HomeComponent/ListBlog';
import SlugProgram from '../HomeComponent/SlugProgram';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

const HomeScreen = ({navigation}) => {
  const [feed, setFeed] = React.useState([]);
  const [blog, setBlog] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
 

  React.useEffect(() => {
    fetch('https://demo.pedulibersama.id/api/campaigns/feed')
      .then((response) => response.json())
      .then((json) => setFeed(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  React.useEffect(() => {
    fetch('https://demo.pedulibersama.id/api/blogs')
      .then((response) => response.json())
      .then((json) => setBlog(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  
  const state = {
    refreshing: false,
  };

  const _onRefresh = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
  };

  return (
    <SafeAreaView  style={styles.ScreenView}>
      <ScrollView showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={state.refreshing}
          onRefresh={_onRefresh}
        />
      }
      >
        <TopNotification />
        <HeaderTitle />
        <View style={{paddingHorizontal:15,}} >
        <SearchBar />
        <Image
            source={require('../../../assets/banner.jpg')}
            style={{ width: '100%', height: 132,borderRadius:6}}
          />
        </View>
        <Count bgcolor="#fff" bordercolor="#909AAD" countcolor="#48B349" textcolor="#909AAD"/>
        <View style={styles.LineDecoration}/>
          <View style={styles.section}>
            <View style={styles.WrapperSlug}>
              <SlugProgram 
              img={require('../../../assets/sosial.png')}
              title="Social"/>
              <SlugProgram 
              img={require('../../../assets/building.png')}
              title="Building"/>
              <SlugProgram 
              img={require('../../../assets/edukasi.png')}
              title="Education"/>
              <SlugProgram 
              img={require('../../../assets/startup.png')}
              title="Wirausaha"/>
            </View>
            <View style={styles.WrapperTitle}>
              <Text style={styles.textFirst}>Fundraishing 
                <Text style={styles.textLast}> Programs</Text>
              </Text>
              <TouchableOpacity>
                <Text style={styles.textShowMore}>Show More</Text>
              </TouchableOpacity>
            </View>
            {loading ? (
            <ActivityIndicator size="large" color="#48B349"/>
            ) : (
              <FlatList
              style={{paddingTop:10}}
                data={feed}
                numColumns={1}
                keyExtractor={({id}, index) => id.toString()}
                renderItem={({item}) => (
                  <ListItem item={item} navigation={navigation} />
                )}
                
              />
              )}
        </View>
        <View style={styles.LineDecoration}/>
        <View style={styles.SectionStorys}>
          <View style={styles.WrapperTitle}>
            <Text style={styles.textFirst2}>Success <Text style={styles.textLast2}>Stories</Text></Text>
            <TouchableOpacity>
              <Text style={styles.textShowMore2}>Show More</Text>
            </TouchableOpacity>
          </View>
          {loading ? (
            <ActivityIndicator size="large" color="#48B349"/>
            ) : (
              <FlatList
              style={{paddingTop:10}}
                data={blog}
                numColumns={1}
                keyExtractor={({id}) => id.toString()}
                renderItem={({item}) => (
                  <ListBlog item={item} navigation={navigation} />
                )}
              />
              )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ScreenView: {
    flex:1 , 
    backgroundColor: 'white'
  },
  section:{
    paddingHorizontal: 15,
    paddingVertical: 18,
  },
  LineDecoration:{
    height: 10,
    flex: 1,
    backgroundColor: '#E9EBEF',
    opacity: 0.5,
  },
  WrapperSlug: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal:10, 
    marginBottom:28
  },
  WrapperTitle:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom: 12
  },
  textFirst:{
    fontSize:18,
    lineHeight:22,
    fontFamily:'Lato',
    color:'#2D386E'
  },
  textLast:{
    fontWeight:'bold',
    fontSize:18,
    lineHeight:22,
    fontFamily:'Lato',
    color:'#48B349'
  },
  textShowMore:{
    fontSize:11,
    lineHeight:13,
    fontFamily:'Lato',
    color:'#909AAD'
  },
  SectionStorys:{
    backgroundColor:'#2D386E',
    paddingHorizontal: 15,
    paddingVertical: 24,
  },
  textFirst2:{
    fontSize:18,
    lineHeight:22,
    fontFamily:'Lato',
    color:'#FFFFFF'
  },
  textLast2:{
    fontWeight:'bold',
    fontSize:18,
    lineHeight:22,
    fontFamily:'Lato',
    color:'#FFFFFF'
  },
  textShowMore2:{
    fontSize:11,
    lineHeight:13,
    fontFamily:'Lato',
    color:'#FFFFFF'
  },
});

export default HomeScreen;
