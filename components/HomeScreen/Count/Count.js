import * as React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

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
        <ActivityIndicator size="small" color="#48B349" />
      ) : (
        <View style={styles.grid}>
          <View style={styles.gridItem}>
            <Text style={styles.textCount}>{count.totalCampaignComplete}</Text>
            <Text style={styles.text}>Program Complete</Text>
          </View>
          <View style={styles.gridItem2}>
            <Text style={styles.textCount}>{count.totalCampaignProgress},000</Text>
            <Text style={styles.text}>Program On Progress</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.textCount}>{count.totalDonationSuccess}</Text>
            <Text style={styles.text}>totalDonation Success</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor:'#fff',
    paddingBottom: 24,
    paddingTop:24
  },
  grid: {
    flexDirection: 'row',
    alignItems:'baseline'
  },
  gridItem: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 10,
  },
  gridItem2: {
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: "column",
    borderLeftWidth: .4,
    borderLeftColor:'#909AAD',
    borderRightWidth: .4,
    borderRightColor:'#909AAD',
  },
  textCount:{
    fontSize:20,
    fontWeight: 'bold',
    lineHeight:24,
    color:'#48B349',
    fontFamily: "Lato",
  },
  text:{
    fontSize:11,
    lineHeight:13,
    color:'#909AAD',
    fontFamily: "Lato",
  }
});

export default Count;
