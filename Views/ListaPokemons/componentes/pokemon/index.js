import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';

export const Item = ({url,name}) =>{

    const pokemonNumber = url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','')
    const imageurl = 'https://pokeres.bastionbot.org/images/pokemon/'+pokemonNumber+'.png'

    return(
        <View style = {styles.containerItem}>

            <Image source = {{uri:imageurl}} style = {styles.imagem} resizeMode="contain"/>
            <Text style = {styles.texto}>{name}</Text>
            <Text> Nº {pokemonNumber}</Text>
            
        </View>



    );
};

const styles = StyleSheet.create({

    containerItem:{

        height:168,
        backgroundColor:'#308993',
        flex:1,
        borderRadius:10,
        justifyContent:"center",
        alignItems:'center',
        margin:5,

    },


imagem:{
height: 84,
width:84


},

texto:{
    fontSize:15,
    color:'black',
}

})