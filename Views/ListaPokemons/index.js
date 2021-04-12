
import React,{ useEffect , useState, Component} from 'react';
import{View,Text,Image,style, FlatList, DatePickerAndroid} from 'react-native';
import { DATA } from '../../DATA/data';
import Cabecalho from './componentes/Cabecalho';
import { Item } from './componentes/pokemon';


class ListaPokemons extends Component {

    constructor(props){
        super(props);
        this.state = {

            data: []

        }


    }

    loadPoke =() => {

        fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=898")
        .then( res => res.json())
        .then (res => {
            this.setState({

                data: res.results || []
            })
        })



    }


    componentDidMount(){
        this.loadPoke();
    }
    
  
render(){
    return (
    <View>
       <FlatList
           numColumns ={3}
           data={this.state.data}
           renderItem = {({item}) => <Item {... item} />}
           keyExtractor = { item => item.name}
           ListHeaderComponent = {

            <Cabecalho />

           }

        
           />    
       

    </View>);
}
};

export default ListaPokemons;