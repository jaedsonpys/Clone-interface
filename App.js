import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './src/components/Header'
import Main from './src/components/Main';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins'

export default function App() {
  var [appfonts] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium
  })

  if(!appfonts){
    return <AppLoading/>
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar style={{backgroundColor: 'white'}}/>
      <Header/>
      <Main/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#F3F3F3',
    flex: 1
  }
});
