import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { ListScreen } from '../../screens';
import ProductDetails from '../../screens/ProductDetails';
import Header from '../../shared/Header';
import SearchScreen from '../../screens/SearchScreen';
import SearchHeader from '../../shared/SearchHeader';


const screens = {
    Home: {
        screen: ListScreen,
        navigationOptions: ({ navigation }) => {
            return { 
                headerTitle: () => <Header navigation={ navigation } />
            }
        }
    },
    Details: {
        screen: ProductDetails,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={ navigation } />
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