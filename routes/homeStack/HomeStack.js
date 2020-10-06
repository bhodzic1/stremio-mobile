import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { ListScreen } from '../../screens';
import ProductDetails from '../../screens/ProductDetails';
import Header from '../../shared/Header';
import SearchScreen from '../../screens/SearchScreen';
import SearchHeader from '../../shared/SearchHeader';
import HomeScreen from '../../screens/HomeScreen';
import MovieCardDetails from '../../components/card/MovieCardDetails';
import DetailsHeader from '../../shared/DetailsHeader';


const screens = {
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => {
            return { 
                headerTitle: () => <Header navigation={ navigation } />
            }
        }
    },
    Details: {
        screen: MovieCardDetails,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <DetailsHeader navigation={ navigation } />
            }
        }
    },
    SearchScreen: {
        screen: SearchScreen,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <SearchHeader navigation={navigation} />
            }
        }
    }
}

const HomeStack = createStackNavigator(screens);

export default HomeStack;