import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { CartScreen } from '../../screens';
import Header from '../../shared/Header';


const screens = {
    Cart: {
        screen: CartScreen,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} />
            }
        }
    }
}

const CartStack = createStackNavigator(screens);

export default CartStack;