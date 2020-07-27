import React from 'react'
import {TouchableOpacity, Image, Text, View, StyleSheet} from 'react-native';

const ListBlog = ({item, navigation}) => {
    const {cover_image_url, title, slug, created_at, author} = item;
    return (
      <TouchableOpacity
        style={styles.card}
        numColumns={2}
        onPress={() =>
          navigation.navigate('DetailProgram', {
            slug: slug,
          })
        }>
        <View style={styles.cardBody}>
        <Text style={styles.cardText}>{title}</Text>
        <Text style={styles.time}>{created_at}</Text>
        <Text style={styles.time}>{author.name}</Text>
        </View>
        <Image
          style={styles.cardImage}
          source={{
            uri: `https://demo.pedulibersama.id/storage/admin/${cover_image_url}`,
          }}
        />
      </TouchableOpacity>
    );
  };

export default ListBlog

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection:'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 4,
        borderWidth: .5,
        borderColor:'#EBEDF1',
        marginBottom:14,
        padding:10,
      },
      cardImage: {
        flex:2,
        height: 132,
        borderRadius: 2
      },
      cardBody: {
        flex:3,
        paddingLeft: 6,
        paddingRight: 18,
        paddingTop: 10
      },
      cardCategory: {
      },
      cardText: {
        fontFamily: 'Lato',
        fontSize: 14,
        lineHeight:18,
        fontWeight:'bold',
        color:'#2D386E',
        marginBottom: 16,
      },
      time: {
        fontFamily: 'Lato',
        fontSize: 11,
        lineHeight:13,
        fontWeight:'normal',
        color:'#909AAD',
        marginBottom: 12,
      },
      flexRowSpaceBetwen:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
      },
});
