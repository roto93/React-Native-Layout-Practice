import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

const StartScreen = ({ setIsStart }) => {
    return (
        <View style={styles.container}>
            <View style={styles.hero}>
                <View style={styles.hero_bg}></View>
            </View>
            <View style={styles.content}>
                <View style={styles.image_container_outer} >
                    <View style={styles.image_container_inner} >
                        <Image source={require('../../images/StartImage.jpg')} style={{ width: '80%', height: '80%' }} />
                    </View>
                </View>
                <Text style={styles.title}>Welcome to Joyn</Text>
                <Text style={styles.p}>A place to find a daily joy in community.{'\n'}We are happy that you've joined us!</Text>
                <TouchableOpacity style={styles.btn} onPress={() => { setIsStart(true) }}>
                    <Text style={styles.t}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default StartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    hero: {
        // borderWidth: 1,
        flex: 1,
        width: '100%',
        height: '50%',
        alignItems: 'center',
        backgroundColor: '#DEF2F5'
    },
    hero_bg: {
        // borderWidth: 1,
        borderColor: 'gold',
        width: '100%',
        height: 200,
    },
    image_container_outer: {
        // borderWidth: 1,
        width: 432,
        height: 432,
        borderRadius: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -40
    },
    image_container_inner: {
        // borderWidth: 1,
        width: 364,
        height: 364,
        borderRadius: 200,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    content: {
        // borderWidth: 1,
        width: '85%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    title: {
        fontSize: 22,
        fontFamily: 'Roboto_500Medium',
        marginBottom: 16,
    },
    p: {
        fontSize: 14,
        fontFamily: 'Roboto_300Light',
        marginBottom: 28,
        textAlign: 'center',
    },
    btn: {
        paddingVertical: 16,
        backgroundColor: '#5AD3DA',
        alignSelf: 'stretch',
        alignItems: 'center',
        borderRadius: 8,
        elevation: 2,
        marginBottom: 40,
    },
    t: {
        color: '#fff',
        fontFamily: 'sans-serif',
        fontFamily: 'Roboto_400Regular',
        fontSize: 18,
    }
})
