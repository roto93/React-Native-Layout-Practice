import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const RowView = ({ children, style }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', ...style }}>
        {children}
    </View>
)

const YourGroupsPage = () => {
    const bottomTabBarHeight = useBottomTabBarHeight()
    const [communityGroupsData, setCommunityGroupsData] = useState([]);
    const [postData, setPostData] = useState([]);
    const getGroups = async () => {
        try {
            let res = await fetch('http://10.1.1.11:3000/yourGroups')
            let json = await res.json()
            setCommunityGroupsData(json)
        } catch (err) {
            console.error(err)
        }
    }
    const getActivities = async () => {
        try {
            let res = await fetch('http://10.1.1.11:3000/posts')
            let json = await res.json()
            setPostData(json)
        } catch (err) {
            console.error(err)
        }
    }

    const GroupCard = ({ group }) => {
        let { id, groupName, members, posts } = group
        return (
            <View style={styles.groupCard}>
                <Text>{groupName}</Text>
                <Text>{members}</Text>
                <Text>{posts}</Text>
            </View>
        )
    }
    const Post = ({ post }) => {
        const { id, groupName, time, author, content } = post
        console.log(groupName)
        return (
            <View style={styles.post}>
                <RowView style={{ justifyContent: 'space-between', width: '100%' }}>
                    <Text style={styles.post__groupName}>{groupName}</Text>
                    <Text style={styles.post__time}>{time}</Text>
                </RowView>
                <Text style={styles.post__author}>{author}</Text>
                <Text style={styles.post__content}>{content}</Text>
            </View>
        )
    }

    useEffect(() => {
        getGroups()
        getActivities()
    }, [])

    return (
        <ScrollView
            contentContainerStyle={{ justifyContent: 'flex-start', alignItems: 'center', paddingBottom: bottomTabBarHeight }}
            style={styles.container}>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Favorite Community Groups:</Text>
                <View style={styles.horizontalScrollViewContainer}>
                    <ScrollView horizontal
                        contentContainerStyle={styles.horizontalScrollViewContent}
                    >
                        {communityGroupsData.map((group, key) => <GroupCard key={key.toString()} group={group} />)}
                    </ScrollView>
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Activity in your community:</Text>
                {postData.map((post, key) => <Post key={key.toString()} post={post} />)}
            </View>
        </ScrollView >
    )
}

export default YourGroupsPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F7FA',
    },
    section: {
        borderWidth: 1,
        width: '100%',
        marginTop: 16
    },
    sectionTitle: {
        fontSize: 14,
        lineHeight: 18,
        fontFamily: 'Roboto_400Regular',
        color: 'gray',
        paddingLeft: 20,
        marginBottom: 8,
    },
    horizontalScrollView: {
        borderWidth: 1,
        height: 50,
    },
    horizontalScrollViewContainer: {
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    horizontalScrollViewContent: {
        paddingHorizontal: 20,
        paddingVertical: 4,
    },
    groupCard: {
        // borderWidth: 1,
        width: 200,
        height: 72,
        marginRight: 8,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 8
    },
    post: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderBottomWidth: 1,
    },
    post__groupName: {
        fontSize: 16,
        fontFamily: 'Roboto_400Regular',
    },
    post__time: {
        fontSize: 16,
        fontFamily: 'Roboto_400Regular',
    },
    post__author: {
        fontSize: 16,
        fontFamily: 'Roboto_400Regular',
    },
    post__content: {
        fontSize: 16,
        fontFamily: 'Roboto_400Regular',
    }
})
