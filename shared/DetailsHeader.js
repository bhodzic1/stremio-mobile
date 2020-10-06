import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";

const DetailsHeader = ({ navigation }) => {

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>{ navigation.getParam('title') }</Text>
                <View style={styles.icons}>
                    <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")}>
                        <Feather name="share-2" size={24} style={styles.search}></Feather>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")}>
                        <Feather name="folder-plus" size={24} style={styles.search}></Feather>
                    </TouchableOpacity>
                </View>
            </View>
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
    icons: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333'
    },
    search: {
        paddingLeft: 10
    },
    menu: {

    }
});

export default DetailsHeader;