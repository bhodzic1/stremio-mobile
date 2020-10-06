import React, { Component } from "react";
import { Text } from "react-native";
import { Card } from "react-native-elements";

const MovieCard = ({ movie }) => {
    
    return (
        <Card
            containerStyle={{
                padding: 0, 
                width: 100, 
                height: 'auto',
                resizeMode: 'contain'
            }}
        >
            <Card.Image source={{ uri: `https://image.tmdb.org/t/p/w200/${movie.poster_path}`}}
            style={{
                resizeMode: 'contain',
                marginTop: '20%'
            }}>

            </Card.Image>
        </Card>
    );
}

export default MovieCard;