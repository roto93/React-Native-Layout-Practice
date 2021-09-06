import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image } from 'react-native'
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const Group = ({ group }) => {
    const { id, groupName, isPrivate, members, posts, description } = group
    console.log(isPrivate)
    return (
        <View style={styles.groupContainer}>
            <View style={styles.groupHeader}>
                <Image source={require('../../../images/meditation.jpg')} style={{ width: 40, height: 40, borderRadius: 20, marginRight: 8 }} />
                <View style={styles.headerInfo}>
                    <View style={styles.headerInfoTop}>
                        <Text style={styles.groupCard__groupName}>{groupName}</Text>
                        {isPrivate === "true" && <Ionicons name={"lock-closed-outline"} size={12} />}
                    </View>

                    <View style={styles.headerInfoBottom}>
                        <Ionicons name="people-outline" size={14} color={'#999'} />
                        <Text style={styles.groupCard__members}>{members}</Text>
                        <Text style={styles.groupCard__posts}>({posts})</Text>
                    </View>
                </View>
            </View>

            <Text style={styles.description}>{description}</Text>

            <TouchableOpacity style={styles.joinButton}>
                <Text style={styles.joinButtonText}>
                    {isPrivate === "true"
                        ? 'Request to Join'
                        : ' Join Group'
                    }
                </Text>
            </TouchableOpacity>

        </View>
    )
}

const BrowseGroupsPage = () => {
    const bottomTabBarHeight = useBottomTabBarHeight()
    const [searchText, setSearchText] = useState('');
    const [communityGroupsData, setCommunityGroupsData] = useState([]);

    const getGroups = async () => {
        try {
            let res = await fetch('http://10.1.1.11:3000/yourGroups')
            let json = await res.json()
            setCommunityGroupsData(json)
            json.forEach(group => console.log(group.groupName))
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getGroups()
    }, [])

    return (
        <View style={[styles.container, { paddingBottom: bottomTabBarHeight }]}>
            <View style={styles.searchBar}>
                <TextInput
                    placeholder={'Search'}
                    style={styles.textInput}
                    value={searchText}
                    onChangeText={(text) => { setSearchText(text) }}
                />
                <TouchableOpacity style={{ position: 'absolute', right: 36 }}>
                    <FontAwesome name="search" size={24} />
                </TouchableOpacity>
            </View>

            <View style={styles.sortBar}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Text style={styles.sortBarText}>Sort by </Text>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', height: 32 }}>
                        <Text style={styles.sortButton}>More participants</Text>
                        <FontAwesome name="caret-down" size={16} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="tune" size={24} color={'#61C3C9'} />
                </TouchableOpacity>
            </View>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={communityGroupsData}
                    renderItem={({ item }) => <Group group={item} />}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

export default BrowseGroupsPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        backgroundColor: '#F1F7FA',
    },
    searchBar: {
        justifyContent: 'center',
        position: 'relative',
        marginTop: 16,
        marginBottom: 12,
    },
    textInput: {
        marginHorizontal: 20,
        height: 48,
        paddingHorizontal: 16,
        borderRadius: 4,
        backgroundColor: '#e8e8e8',
        fontSize: 18,
        fontFamily: 'Roboto_400Regular'
    },
    sortBar: {
        height: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20
    },
    sortBarText: {
        fontSize: 16,
        color: '#999',
        fontFamily: 'Roboto_400Regular',
        marginRight: 8
    },
    sortButton: {
        fontSize: 16,
        color: '#000',
        fontFamily: 'Roboto_400Regular',
        marginRight: 8
    },
    flatListContainer: {
        width: '100%',
    },

    groupContainer: {
        borderColor: '#ccc',
        borderBottomWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    groupHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    headerInfo: {

    },
    headerInfoTop: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerInfoBottom: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    groupCard__groupName: {
        fontSize: 14,
        fontFamily: 'Roboto_500Medium',
        color: '#000',
        marginRight: 4,
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
    description: {
        fontSize: 16,
        fontFamily: 'Roboto_400Regular',
        marginBottom: 16,
    },
    joinButton: {
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#BEB5DD',
        borderRadius: 8
    },
    joinButtonText: {
        fontSize: 18,
        lineHeight: 18,
        fontFamily: 'Roboto_400Regular',
        color: '#fff'
    }
})
