import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.header}>
        <View>
            <Text style={styles.firstText}>Cloud</Text>
            <Text style={styles.secondText}>Storage</Text>
        </View>
        <View name="user-and-search" style={styles.searchAndUser}>
            {/* Icone da conta de usuário */}
            <View style={styles.userIcon} name="icon-user">
                <Feather name="user" size={20} color="white" />
            </View>
            <View>
                <View style={styles.searchView}>
                    <Ionicons name="search-sharp" style={{marginRight: 5}} size={17} color="#ADADAD" />
                    <TextInput placeholder='Search' maxLength={6} style={styles.searchInput} keyboardType='web-search'/>
                </View>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    firstText: {
        fontSize: 40,
        fontFamily: 'Poppins_500Medium',
        color: '#202668'
    },
    secondText: {
        fontFamily: 'Poppins_400Regular',
        marginTop: -15,
        fontSize: 40,
        color: '#ADADAD'
    },

    userIcon:{
        height: 40,
        width: 40,
        borderRadius: 500,
        backgroundColor: '#8891FF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchView:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
        borderRadius: 100,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 20,
        height: 30,
        width: 100
    },

    searchAndUser: {
        alignItems: 'flex-end'
    },

    searchInput: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 12.5,
        width: '100%',
        maxWidth: 100,
        minWidth: 100
    }
});
