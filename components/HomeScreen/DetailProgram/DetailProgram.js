import * as React from 'react';
import {View, Text, Image, StyleSheet, Button, SafeAreaView, ScrollView, TouchableHighlight} from 'react-native';
import {Icon} from "@up-shared/IconComponents";
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import {ProgressBar} from '@react-native-community/progress-bar-android';
import {WebView} from 'react-native-webview';

const DetailProgram = ({route, navigation}) => {
  const {slug} = route.params;

  const [id, setId] = React.useState();
  const [title, setTitle] = React.useState();
  const [location, setLocation] = React.useState();
  const [max_time, setTime] = React.useState();
  const [max_nominal, setNominal] = React.useState();
  const [content, setContent] = React.useState();

  const [image, setImage] = React.useState();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(`https://demo.pedulibersama.id/api/campaigns/${slug}`)
      .then((response) => response.json())
      .then((json) => {
        const {id, title, location, max_time, max_nominal, content ,cover_image_url} = json[0];

        setId(id);
        setTitle(title);
        setLocation(location);
        setTime(max_time);
        setNominal(max_nominal);
        setContent(content);
        setImage(
          `https://demo.pedulibersama.id/storage/admin/${cover_image_url}`,
        );
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.ScreenView}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flexGrow:1,}}>
        <Image
        style={styles.detailImage}
        source={{
          uri: image,
        }}/>
        <View style={styles.WpHeaderTitle}>
          <Text style={styles.detailText}>{title}</Text>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <View style={{flexDirection:'row', alignItems:'center', marginRight:12}}>
              <Icon name="place" size={16} color="#FCBD60"/>
              <Text style={styles.headertext}>{location}</Text>
            </View>
            <View style={{flexDirection:'row' , alignItems:'center'}}>
              <Icon name="stopwatch" size={16} color="#9AD69D"/>
              <Text style={styles.headertext}>{max_time}</Text>
            </View>
          </View>

          <View style={styles.bgProgres}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <Text style={styles.textProgres}>10%</Text>
              <Text style={styles.textProgres}>IDR {max_nominal}</Text>
            </View>
            <ProgressBar 
              styleAttr="Horizontal"
              indeterminate={false}
              progress={0.1}
              color="#48B349"
            />
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{flexDirection:'row' , alignItems:'center'}}>
              <Icon name="stopwatch" size={16} color="#909AAD"/>
              <Text style={styles.maxtimeProgress}>{max_time}</Text>
            </View>
              <Text style={styles.textCollected}>Collected</Text>
            </View>
          </View>
        </View>
        <View style={{paddingHorizontal:15, marginVertical:25}}>
          <Text style={styles.TitleDetail}>Detail Kegiatan</Text>
          <Text style={styles.descDetail}>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae eget, tempor sit amet, ante. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</Text>
          <View>
            <TouchableHighlight
              underlayColor="#E0E3E8"
              onPress={()=>{}}
              style={styles.WpBtnMore}>
                  <View style={styles.ButtonMore}>
                      <Text style={styles.TextMore}>Baca Selengkapnya</Text>
                      <Icon2 name="chevron-down" color="#48B349" size={13}/>
                  </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style={{height:10,width:'100%', backgroundColor:'#E9EBEF' , opacity:.5}}/>
        <View style={{paddingHorizontal:15, marginVertical:25}}>
          <Text style={styles.TitleDetail}>Informasi Terbaru</Text>
          <Text style={styles.descDetail}>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae eget, tempor sit amet, ante. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</Text>
          <View>
            <TouchableHighlight
              underlayColor="#E0E3E8"
              onPress={()=>{}}
              style={styles.WpBtnMore}>
                  <View style={styles.ButtonMore}>
                      <Text style={styles.TextMore}>Baca Selengkapnya</Text>
                      <Icon2 name="chevron-down" color="#48B349" size={13}/>
                  </View>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
        <TouchableHighlight
            underlayColor="#909AAD"
            onPress={() => navigation.push('AuthModal')}
            style={styles.WrapperButton}>
                <View style={styles.Button}>
                    <Text style={styles.TextButton}>Donasi Sekarang</Text>
                </View>
        </TouchableHighlight>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  TextMore:{
    fontFamily:'Lato',
    color:'#48B349',
    fontSize:13,
    marginRight:4
  },
  WpBtnMore:{
    borderRadius:80,
    backgroundColor:'#F7F7F9',
    width:'46%',
    marginHorizontal:'27%',
    paddingVertical:10,
    
  },
  ButtonMore:{
  flexDirection:'row',
  width:'100%',
  justifyContent:'center',
  alignItems:'center'
  },
  descDetail:{
    fontFamily:'Lato',
    fontSize:13,
    lineHeight:28,
    marginBottom:12,
    color:'#000000cc'
  },
  TitleDetail:{
    fontFamily:'Lato',
    fontSize:18,
    fontWeight:'bold',
    color:'#2D386E',
    marginBottom:10
  },
  textCollected:{
    fontFamily:'Lato',
    fontSize:14,
    color:'#48B349'
  },
  maxtimeProgress:{
    fontFamily:'Lato',
    color:'#909AAD',
    fontSize:14,
    marginLeft:6,
  },
  textProgres:{
    color:'#282D46',
    fontFamily:'Lato',
    fontSize: 14,
    fontWeight: 'bold'
  },
  bgProgres:{
    marginTop:20,
    width:'100%',
    backgroundColor:'#fff',
    paddingHorizontal:22,
    paddingVertical:16,
    borderRadius:12,
    elevation: 6,
  },
  headertext:{
    fontWeight: 'normal',
    fontFamily:'Lato',
    fontSize:14,
    color:'#fff',
    marginLeft: 4
  },
  WpHeaderTitle:{
    paddingHorizontal:15,
    width:'100%',
    marginTop: -110
  },
  ScreenView: {
    flexGrow:1 , 
    position: 'relative',
    backgroundColor: 'white'
  },
  detailImage: {
    width: '100%',
    height: 300,
  },
  detailText: {
    fontWeight: 'bold',
    color:'#fff',
    fontSize: 18,
    marginBottom:12,
  },
  WrapperButton:{
    borderRadius:80,
    backgroundColor:'#48B349',
    position: 'absolute',
    width:'80%',
    marginHorizontal:'10%',
    bottom: 12,
    elevation:6
},
TextButton:{
      fontFamily: 'Lato',
      fontSize: 16,
      color:'#fff',
      fontWeight:'normal',
      marginLeft:8,
},
Button:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'center',
    flex:1,
    paddingVertical: 16,
},
});

export default DetailProgram;
