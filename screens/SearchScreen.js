import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardList from '../components/cardList/CardList';
import { CartContext } from '../context/CartContext';

const SearchScreen = ({ navigation }) => {
    const { query } = useContext(CartContext);
    const [searchedMovies, setSearchedMovies] = useState([]);

    useEffect(() => {
        setSearchedMovies([]);
        if (query.length > 0) {
            getMovies();
        }
    }, [query])

    const getMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=3adddc6450cee021ab92328ed2bbd662&language=en-US&page=1&include_adult=false&query=${query}`);
        const data = await response.json();
        setSearchedMovies(data.results);
    }

    return (
        <View>
            <CardList navigation={navigation} data={searchedMovies} title="MOVIES" />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        paddingTop: 20,
        paddingLeft: 20,
        fontSize: 20,
        fontFamily: "Sans serif",

    }
})

export default SearchScreen;