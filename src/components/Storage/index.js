import React from 'react'
import {StyleSheet, View, Text, ScrollView} from 'react-native'
import { Feather } from '@expo/vector-icons';

export default function Storage(){
    return (
        <View style={styles.Storage}>
            <View style={styles.menuStorage}>
                <Text style={{fontFamily: 'Poppins_500Medium', fontSize: 20, color: 'black'}}>Online Storage</Text>
                <View>
                    <Feather name="more-vertical" size={24} color="black" />
                </View>
            </View>
            <ScrollView name='cards' horizontal={true} showsHorizontalScrollIndicator={false} style={styles.cardsArea}>
                <View style={styles.card}>
                    <View name='icon' style={styles.cardIcon}>
                        <Feather name="image" size={24} color="white" />
                    </View>
                    <View>
                        <Text style={styles.cardTitle}>Image</Text>
                        <View>
                            <Text style={styles.cardSpace}>50 GB</Text>
                            <Text style={styles.cardMessage}>20% is used</Text>
                        </View>
                        <View style={styles.boxLine}>
                            <View style={styles.line}></View>
                        </View>
                    </View>
                </View>
                <View style={styles.card}>
                    <View name='icon' style={styles.cardIcon}>
                        <Feather name="video" size={24} color="white" />
                    </View>
                    <View>
                        <Text style={styles.cardTitle}>Video</Text>
                        <View>
                            <Text style={styles.cardSpace}>134 GB</Text>
                            <Text style={styles.cardMessage}>80% is used</Text>
                        </View>
                        <View style={styles.boxLine}>
                            <View style={{width: '80%', height: '100%', backgroundColor: '#FF5733', borderRadius:20}}></View>
                        </View>
                    </View>
                </View>
                <View style={styles.card}>
                    <View name='icon' style={styles.cardIcon}>
                        <Feather name="music" size={24} color="white"/>
                    </View>
                    <View>
                        <Text style={styles.cardTitle}>Audio</Text>
                        <View>
                            <Text style={styles.cardSpace}>5 GB</Text>
                            <Text style={styles.cardMessage}>3% is used</Text>
                        </View>
                        <View style={styles.boxLine}>
                            <View style={{width: '3%', height: '100%', backgroundColor: '#FF5733', borderRadius:20}}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    menuStorage: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Storage: {
        marginTop: 30
    },
    cardsArea: {
        marginTop: 20,
    },
    card: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 25,
        paddingBottom: 25,
        backgroundColor: 'white',
        borderRadius: 20,
        width: 175,
        marginHorizontal: 5
    },
    cardIcon:{
        padding: 10,
        backgroundColor: '#FF5733',
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    cardTitle: {
        fontSize: 25,
        fontFamily: 'Poppins_500Medium',
        color: '#202668',
        marginTop: 10,
        marginBottom: 20
    },
    cardSpace: {
        fontFamily: 'Poppins_500Medium',
        color: '#202668',
        fontSize: 15
    },
    cardMessage: {
        fontFamily: 'Poppins_400Regular',
        color: 'gray',
        fontSize: 12,
        marginTop: -5
    },
    boxLine: {
        width: '100%',
        height: 4,
        backgroundColor: '#D9D9D9',
        marginTop: 10,
        borderRadius: 20
    },
    line: {
        width: '20%',
        height: '100%',
        backgroundColor: '#FF5733',
        borderRadius: 20
    }
})