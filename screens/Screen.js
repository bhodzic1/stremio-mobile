import React from 'react';
import { View, SafeAreaView, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";


const Screen = ({ navigation, name }) => {

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                <TouchableOpacity
                    style={{ alignItems: "flex-end", margin: 16 }}
                    onPress={navigation.openDrawer} >
                        <FontAwesome5 name="bars" size={24} style={styles.menu}></FontAwesome5>
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text style={styles.text}>{name} Screen</Text>
                </View>
            </SafeAreaView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    text: {
        color: "#161924",
        fontSize: 20,
        fontWeight: "500"
    },
    menu: {
        marginTop: 20,
    }
});

export default Screen;