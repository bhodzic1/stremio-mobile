import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from '../routes/homeStack/HomeStack';
import CartStack from '../routes/cartStack/CartStack';
import SubDrawer from './SubDrawer';

const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    Cart: {
        screen: CartStack,
    }
})

export default createAppContainer(DrawerNavigator);