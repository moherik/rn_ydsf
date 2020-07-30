import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    borderWidth: .5,
    borderColor:'#EBEDF1',
    marginBottom:14,
    overflow: 'hidden'
  },
  cardImage: {
    flex:2,
    height: 132,
  },
  cardBody: {
    flex:3,
    padding:14,
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
  flexRowSpaceBetwen:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  textProgress:{
    fontSize: 13,
    fontWeight:'bold',
    fontFamily:'Lato',
    color:'#2D386E',
  }
});

export default styles;
