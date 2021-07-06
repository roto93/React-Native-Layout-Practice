import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export const GroupTab = ({ focused }) => {
    return (
        <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="google-circles-extended" size={24} color={focused ? '#61C3C9' : '#5A6869'} />
            <Text style={styles.label}>Group</Text>
        </View>
    )
}

export const PeerTab = ({ focused }) => {
    return (
        <View style={styles.iconContainer}>
            <Ionicons name="people-outline" size={24} color={focused ? '#61C3C9' : '#5A6869'} />
            <Text style={styles.label}>Peers</Text>
        </View>
    )
}

export const MainTab = ({ focused }) => {
    return (
        <View style={styles.iconContainer_main}>
            <Ionicons name="ios-layers-outline" size={32} color={focused ? '#fff' : '#5A6869'} />
        </View>
    )
}

export const ChatTab = ({ focused }) => {
    return (
        <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="message-outline" size={24} color={focused ? '#61C3C9' : '#5A6869'} />
            <Text style={styles.label}>Chat</Text>
        </View>
    )
}

export const ProfileTab = ({ focused }) => {
    return (
        <View style={styles.iconContainer}>
            <Ionicons name="md-person-outline" size={24} color={focused ? '#61C3C9' : '#5A6869'} />
            <Text style={styles.label}>Profile</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        alignItems: 'center',
    },
    iconContainer_main: {
        position: 'absolute',
        bottom: 8,
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#60C6CC'
    },
    label: {
        fontSize: 12,
        lineHeight: 16,
        fontFamily: 'Roboto_400Regular'
    }
})