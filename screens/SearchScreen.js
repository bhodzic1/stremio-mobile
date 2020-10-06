import React from 'react';
import { View, Text } from 'react-native';

const SearchScreen = () => {
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
            <Text>You can search anything...</Text>
        </View>
    )
}

export default SearchScreen;