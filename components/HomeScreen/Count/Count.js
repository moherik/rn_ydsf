import * as React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

const Count = (props) => {
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
    <View style={{...styles.container,backgroundColor: props.bgcolor}}>
      {loading ? (
        <ActivityIndicator size="small" color="#48B349"/>
      ) : (
        <View style={styles.grid}>
          <View style={styles.gridItem}>
            <Text style={{...styles.textCount,color: props.countcolor}}>{count.totalCampaignComplete}</Text>
            <Text style={{...styles.text,color: props.textcolor}}>Program Complete</Text>
          </View>
          <View style={{...styles.gridItem2,borderColor:props.bordercolor,}}>
            <Text style={{...styles.textCount,color: props.countcolor}}>{count.totalCampaignProgress},000</Text>
            <Text style={{...styles.text,color: props.textcolor}}>Program On Progress</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={{...styles.textCount,color: props.countcolor}}>{count.totalUser}</Text>
            <Text style={{...styles.text,color: props.textcolor}}>Jumlah Pengguna</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 17,
    borderRadius: 8,
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
    borderRightWidth: .4,
  },
  textCount:{
    fontSize:20,
    fontWeight: 'bold',
    lineHeight:24,
    fontFamily: "Lato",
  },
  text:{
    fontSize:11,
    lineHeight:13,
    fontFamily: "Lato",
  }
});

export default Count;
