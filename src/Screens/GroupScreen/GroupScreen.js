import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import YourGroupsPage from './subScreens/YourGroupsPage';
import ManageGroupsPage from './subScreens/ManageGroupsPage';
import BrowseGroupsPage from './subScreens/BrowseGroupsPage';

const GroupScreen = ({ }) => {
    const bottomTabBarHeight = useBottomTabBarHeight()

    const TopTab = createMaterialTopTabNavigator();

    const TopTabBarOption = {
        tabStyle: {
            paddingVertical: 12,
            paddingHorizontal: 0,
            minHeight: 0
        },
        labelStyle: {
            fontSize: 14,
            fontFamily: 'Roboto_400Regular',
            textTransform: 'capitalize'
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, }}>

            <TopTab.Navigator
                swipeEnabled={false}
                tabBarOptions={TopTabBarOption}
            >
                <TopTab.Screen name="Your Groups" component={YourGroupsPage} />
                <TopTab.Screen name="Browse Groups" component={BrowseGroupsPage} />
                <TopTab.Screen name={"Manage Groups"} component={ManageGroupsPage} />
            </TopTab.Navigator>
        </SafeAreaView>
    )
}

export default GroupScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
