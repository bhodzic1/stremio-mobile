import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";

const Header = ({ navigation }) => {
    
    return (
        <View style={ styles.header }>
            <TouchableOpacity
                onPress={navigation.openDrawer} >
                <FontAwesome5 name="bars" size={24} style={styles.menu}></FontAwesome5>
            </TouchableOpacity>
            <View>
                <Text style={ styles.headerText }>STREMIO</Text>
            </View>
            <TouchableOpacity onPress={ () => navigation.navigate("SearchScreen") }>
                <FontAwesome5 name="search" size={24} style={styles.search}></FontAwesome5>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 3,
    },
    search: {
        
    },
    menu: {
        
    }
});

export default Header;