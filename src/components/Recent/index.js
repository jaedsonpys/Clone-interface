import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons';

export default function Recent(){
    return (
        <View style={styles.recent}>
            <Text style={{fontFamily: 'Poppins_500Medium', fontSize: 20, color: 'black'}}>Open recent</Text>
            <View style={styles.cardsRecent}>
                <View style={styles.cardLast}>
                    <View style={styles.iconLast}>
                        <Feather name="music" size={24} color="white"/>
                        <View>
                            <Feather name="more-vertical" size={24} color="white" />
                        </View>
                    </View>
                    <View style={styles.cardInfoDoc}>
                        <Text style={{fontSize: 20, marginTop: 10, color: 'white', fontFamily: 'Poppins_500Medium'}}>How eat pizza? (podcast)</Text>
                        <Text style={{fontSize: 10, marginTop: -5, color: 'white', fontFamily: 'Poppins_400Regular'}}>23:12</Text>
                    </View>
                </View>
                <View style={styles.cardLast}>
                    <View style={styles.iconLast}>
                        <Feather name="video" size={24} color="white" />
                        <View>
                            <Feather name="more-vertical" size={24} color="white" />
                        </View>
                    </View>
                    <View style={styles.cardInfoDoc}>
                        <Text style={{fontSize: 20, marginTop: 10, color: 'white', fontFamily: 'Poppins_500Medium'}}>My family 2021</Text>
                        <Text style={{fontSize: 10, marginTop: -5, color: 'white', fontFamily: 'Poppins_400Regular'}}>13:48</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    recent: {
        marginTop: 30,
    },
    recentTitle: {
        fontSize: 30
    },
    iconLast: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    cardLast:{
        marginBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 25,
        paddingBottom: 25,
        backgroundColor: '#FF5733',
        borderRadius: 20,
    },
    cardsRecent: {
        marginTop: 20
    }
})