import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import CardList from '../components/cardList/CardList';



const HomeScreen = ({ navigation }) => {
    const [topMovies, setTopMovies] = useState([]);
    useEffect(() => {
        getMovies();
    }, [])

    const getMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=3adddc6450cee021ab92328ed2bbd662');
        const data = await response.json();
        setTopMovies(data.results);
    }
    return (
        <View>
            <View>
                <CardList navigation={ navigation } data={ topMovies } title="TOP MOVIES" />
            </View>
        </View>
    )
}

export default HomeScreen;