import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";

const SearchHeader = ({ navigation }) => {

    return (
        <View style={styles.header}>
            
            <TextInput style={styles.headerText} placeholder="search" onSubmitEditing={() => {console.log('hshs') }}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'left',
        justifyContent: 'left',
        
    },
    headerText: {
        fontSize: 20,
        color: '#333'
    },
    search: {
        marginLeft: 80
    }
});

export default SearchHeader;