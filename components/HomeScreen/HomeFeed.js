import * as React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';

import styles from './styles';

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

  const ListItem = (prop) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('DetailProgram')}>
        <Image
          style={styles.cardImage}
          source={{
            uri: prop.image,
          }}
        />
        <Text style={styles.cardText}>{prop.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={feed}
        numColumns={2}
        keyExtractor={({id}, index) => id.toString()}
        renderItem={({item}) => (
          <ListItem
            title={item.title}
            image={`https://demo.pedulibersama.id/storage/admin/${item.cover_image_url}`}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;
