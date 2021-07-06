import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

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
        const { id, groupName, thumb, members, posts } = group
        return (
            <View style={styles.groupCard}>
                <RowView>
                    <Image source={require('../../../images/meditation.jpg')} style={{ width: 40, height: 40, borderRadius: 20, marginRight: 8 }} />
                    <View>
                        <Text style={styles.groupCard__groupName}>{groupName}</Text>
                        <RowView>
                            <Ionicons name="people-outline" size={14} color={'#999'} />
                            <Text style={styles.groupCard__members}>{members}</Text>
                            <Text style={styles.groupCard__posts}>({posts})</Text>
                        </RowView>
                    </View>

                </RowView>
            </View>
        )
    }
    const Post = ({ post }) => {
        const { id, groupName, time, author, content } = post
        console.log(time)
        let postTime = new Date(time)
        console.log(postTime)
        let postLife = Date.now() - postTime
        postLife = Math.floor(postLife / 60 / 60 / 1000)
        return (
            <View style={styles.post}>
                <RowView style={styles.post__header}>
                    <RowView>
                        <Image source={require('../../../images/meditation.jpg')} style={{ width: 40, height: 40, borderRadius: 20, marginRight: 8 }} />
                        <Text style={styles.post__groupName}>{groupName}</Text>
                    </RowView>
                    <Text style={styles.post__time}>{postLife} hours ago</Text>
                </RowView>
                {author &&
                    <Text style={styles.post__author}>Author:
                        <Text style={{ color: '#000' }}>  {author}</Text>
                    </Text>
                }
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
        // borderWidth: 1,
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
        // borderWidth: 1,
        height: 50,
    },
    horizontalScrollViewContainer: {
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    horizontalScrollViewContent: {
        paddingHorizontal: 20,
        paddingVertical: 4,
    },
    groupCard: {
        // borderWidth: 1,
        minWidth: 160,
        marginRight: 8,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 8,
        elevation: 1,
    },
    groupCard__groupName: {
        fontSize: 14,
        fontFamily: 'Roboto_500Medium',
        color: '#000',
    },
    groupCard__members: {
        fontSize: 14,
        fontFamily: 'Roboto_400Regular',
        color: '#999',
        marginHorizontal: 4,
    },
    groupCard__posts: {
        fontSize: 14,
        fontFamily: 'Roboto_400Regular',
        color: 'skyblue',
    },
    post: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderColor: '#ccc',
        borderBottomWidth: 1,
    },
    post__header: {
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    post__groupName: {
        fontSize: 18,
        fontFamily: 'Roboto_500Medium',
        color: '#000',
    },
    post__time: {
        fontSize: 12,
        fontFamily: 'Roboto_400Regular',
        color: '#999',
    },
    post__author: {
        fontSize: 12,
        fontFamily: 'Roboto_400Regular',
        color: '#999',
        marginBottom: 4,
    },
    post__content: {
        fontSize: 16,
        fontFamily: 'Roboto_400Regular',
    }
})
