import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const DetailProgram = ({route, navigation}) => {
  const {slug} = route.params;

  const [id, setId] = React.useState();
  const [title, setTitle] = React.useState();

  const [image, setImage] = React.useState();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(`https://demo.pedulibersama.id/api/campaigns/${slug}`)
      .then((response) => response.json())
      .then((json) => {
        const {id, title, cover_image_url} = json[0];

        setId(id);
        setTitle(title);
        setImage(
          `https://demo.pedulibersama.id/storage/admin/${cover_image_url}`,
        );
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View>
      <Image
        style={styles.detailImage}
        source={{
          uri: image,
        }}
      />
      <View>
        <Text style={styles.detailText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailImage: {
    width: '100%',
    height: 200,
  },
  detailText: {
    fontWeight: '700',
    fontSize: 20,
    marginTop: 20,
  },
});

export default DetailProgram;
