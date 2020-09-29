import React, { useEffect } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import { ProfileScreen } from '../../screens';


const SideBar = (props) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <DrawerNavigatorItems { ...props } />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default SideBar;