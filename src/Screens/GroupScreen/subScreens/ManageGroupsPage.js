import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ManageGroupsPage = () => {
    return (
        <View style={styles.container}>
            <Text>Manage Groups</Text>
        </View>
    )
}

export default ManageGroupsPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    }
})
