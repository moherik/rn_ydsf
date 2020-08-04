import * as React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import {ProgressBar} from '@react-native-community/progress-bar-android';

import styles from './styles';

const ListItem = ({item, navigation}) => {
  const {cover_image_url, title, slug, max_nominal, max_time, id} = item;

  return (
    <TouchableOpacity
      style={styles.card}
      numColumns={2}
      onPress={() =>
        navigation.navigate('DetailProgram', {
          id: id,
          slug: slug,
        })
      }>
      <Image
        style={styles.cardImage}
        source={{
          uri: `https://demo.pedulibersama.id/storage/admin/${cover_image_url}`,
        }}
      />
      <View style={styles.cardBody}>
        <Text style={styles.cardText}>{title}</Text>
        <View style={styles.flexRowSpaceBetwen}>
          <Text style={styles.textProgress}>0%</Text>
          <Text style={styles.textProgress}>IDR {max_nominal}</Text>
        </View>
        <ProgressBar 
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.5}
          style={{color:'#48B349'}}
        />
        <View style={styles.flexRowSpaceBetwen}>
          <Text>{max_time}</Text>
          <Text>Collected</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
