import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";
import { CartContext } from '../context/CartContext';

const SearchHeader = ({ navigation }) => {
    const { updateQuery } = useContext(CartContext);
    const [query, setQuery] = useState("");

    const handleChange = e => {
        setQuery(e.target.value)
    }

    const handleSubmit = async e => {
        updateQuery(query);
    }

    return (
        <View style={styles.header}>
            <TextInput style={styles.headerText} placeholder="search" onChange={handleChange} onSubmitEditing={handleSubmit}></TextInput>
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