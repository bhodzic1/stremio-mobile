import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from '../routes/homeStack/HomeStack';
import CartStack from '../routes/cartStack/CartStack';

const SubDrawerNavigator = createDrawerNavigator({
    Movies: {
        screen: HomeStack,
    },
    Series: {
        screen: CartStack
    }
})

export default createAppContainer(SubDrawerNavigator);