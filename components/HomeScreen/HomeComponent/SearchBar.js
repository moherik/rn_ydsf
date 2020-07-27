import React from 'react'
import { View, TouchableOpacity, TextInput ,StyleSheet} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";

const SearchBar = () => {
    return (
        <View style={styles.WpRelative}>
            <TextInput 
            placeholder='Temukan Donasi, mitra dan lokasi'
            style={styles.TextInput}/>
            <TouchableOpacity style={styles.IconSearch}>
              <Icon 
                name="search"
                size={16}
                color="#909AAD"/>
            </TouchableOpacity>
          </View>
    )
}
const styles = StyleSheet.create({
    WpRelative: {
        position:'relative'
    },
    TextInput: {
        height: 42, 
        flex: 1, 
        marginBottom: 24, 
        borderRadius: 50, 
        paddingRight: 18, paddingLeft: 44, 
        backgroundColor: '#F9F9FA', 
        color: '#909AAD'
    },
    IconSearch: {
        position: "absolute", 
        top: 12, 
        left:0 , 
        width: 44, 
        alignItems: 'center'
    },
});
export default SearchBar
