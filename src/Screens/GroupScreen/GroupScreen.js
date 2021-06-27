import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const GroupScreen = ({ }) => {
    const bottomTabBarHeight = useBottomTabBarHeight()
    return (
        <SafeAreaView style={[styles.container, { marginBottom: bottomTabBarHeight }]}>
            <TouchableOpacity onPress={() => { }}>
                <Text>go back</Text>
            </TouchableOpacity>
            <Text>Group Page</Text>
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
