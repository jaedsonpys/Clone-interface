import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Storage from '../Storage'
import Recent from '../Recent'

export default function Main(){
    return (
        <View style={styles.main}>
            <View name='messageForUser' style={styles.messageForUser}>
                <View>
                    <Text style={styles.title}>Upgrade to pro</Text>
                    <Text style={styles.subTitle}>Unlock more storage for your documents</Text>
                    <TouchableOpacity style={styles.buyButton}>
                        <Text style={{fontFamily: 'Poppins_500Medium', color: '#444FD0', fontSize: 13}}>$5.99</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Storage/>
            <Recent/>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        marginTop: 20,
        marginBottom: 100
    },

    messageForUser: {
        padding: 15,
        borderRadius: 20,
        backgroundColor: '#444FD0',
    },

    title: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Poppins_500Medium'
    },
    subTitle: {
        color: 'white',
        fontFamily: 'Poppins_400Regular',
        fontSize: 10
    },

    buyButton: {
        backgroundColor: 'white',
        width: 70,
        marginTop: 10,
        borderRadius: 100,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
})