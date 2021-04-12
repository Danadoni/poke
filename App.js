import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image ,StyleSheet, Text, View , SafeAreaView} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import ListaPokemons from './Views/ListaPokemons';
import {NavigationContainer} from '@react-navigation/native';





export default function App() {
  return (


    <SafeAreaView style={styles.container}>
      
       <ListaPokemons />


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#209993",
    paddingTop:40,
    paddingHorizontal: 30
    
    
    
  }
});

