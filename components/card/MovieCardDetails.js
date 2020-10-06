import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';

let width = Dimensions.get('screen').width;
let height = Dimensions.get('screen').height;


const MovieCardDetails = ({ navigation }) => {

    return (
        <View style={styles.container}>
            
            <ImageBackground source={{ uri: `https://image.tmdb.org/t/p/w200/${navigation.getParam(`poster_path`)}` }}
            style={styles.background} >
                <ScrollView>
                    <View style={styles.content}>
                        <Text style={styles.text}>
                            { navigation.getParam('title') }
                        </Text>
                    </View>
                </ScrollView>
            </ImageBackground>  
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        height: height,
        width: width,
        flex: 1
    },
    content: {
        flex: 1,
        position: 'absolute'
    },
    text: {
        color: 'white',
    }
})

export default MovieCardDetails;