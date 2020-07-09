import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Count = () => {
  const [count, setCount] = React.useState();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://demo.pedulibersama.id/api/count')
      .then((response) => response.json())
      .then((json) => {
        setCount(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.grid}>
          <View style={styles.gridItem}>
            <Text>Program Complete: {count.totalCampaignComplete}</Text>
          </View>
          <View style={styles.gridItem}>
            <Text>Program On Progress: {count.totalCampaignProgress}</Text>
          </View>
          <View style={styles.gridItem}>
            <Text>Donation Collected: {count.totalDonationSuccess}</Text>
          </View>
          <View style={styles.gridItem}>
            <Text>Total User: {count.totalUser}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  grid: {
    flexDirection: 'row',
  },
  gridItem: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
    height: 100,
    padding: 10,
  },
});

export default Count;
