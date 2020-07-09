import * as React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';

import styles from './styles';

const ListItem = ({item, navigation}) => {
  const {cover_image_url, title, slug, category} = item;

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('DetailProgram', {
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
        <Text style={styles.cardCategory}>{category.category}</Text>
        <Text style={styles.cardText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
