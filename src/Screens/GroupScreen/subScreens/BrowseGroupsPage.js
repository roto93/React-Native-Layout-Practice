import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BrowseGroupsPage = () => {
    return (
        <View style={styles.container}>
            <Text>Browse Groups</Text>
        </View>
    )
}

export default BrowseGroupsPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    }
})
