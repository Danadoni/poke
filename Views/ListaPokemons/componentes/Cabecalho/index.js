import React, {Fragment} from 'react';

import{View,Text,Image,StyleSheet} from 'react-native';


const Cabecalho = () =>{
return(

<Fragment>

<View style={styles.Cabecalho}>      
        <Text style ={styles.Texto}>POKEMONS FAVORITOS </Text>
        <Image source = {require('../../../../img/cabecalho.png')} style={styles.img}/>

      </View>

     
      <View style ={styles.descricao}>

          <View style={styles.separador}>

          </View>

        <View style = {styles.containerTexto}>
            <Text style = {styles.txtDescricao}>TOP 1000 POKEMONS </Text>
        </View>


      </View>


        </Fragment>
        );

};

const styles = StyleSheet.create({
    
    Texto:{
      
      fontSize:20,
      paddingLeft:20,
      paddingRight:10,
      color: "#FFF",
      
  
  
  
    } ,
  
    descricao:{
      paddingTop:34,
      paddingHorizontal: 30
  
    },
  
    separador:{
      borderWidth:1,
      borderColor:"#308993"
  
  
  
    },
    Cabecalho:{
      padding:4,
      flexDirection:'row',
      alignItems:'center',
      backgroundColor: "#308993",
      borderRadius:90,
     paddingHorizontal:30
  
  
      
    },
    img:{
  
      width:45,
      height:45,
      
  
    },
    containerTexto:{
      flexDirection:'row',
      justifyContent:'center',
      padding:5,
      backgroundColor :"#209993",
      marginHorizontal:70,
      marginTop:-15
      
  
    },
    txtDescricao:{
  
    }
  
  
  
  
  });

  export default Cabecalho;