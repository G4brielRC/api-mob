import React, {useState, useEffect } from 'react';
import {Text, View, FlatList } from 'react-native';
import estilo from '.components/estiloApp';

const request = async (callback) => {
  const response = await fetch('https://24pullrequests.com/users.json?page=2');
  const parsed = await response.json();
  callback(parsed.result);
}

export default function App() {
  const [registros, setRegistros] = useState([]);

  useEffect(()=> {
    request(setRegistros);
  },[])

  return (
    <View style = {estilo.container}>
      <View>
        <Text style={estilo.superior}>
          StarWars
          </Text>
      </View>
    

    <FlatList
    data={registros}
    keyExtractor={(item) => item.name.toString()}
    renderItem={({item}) => 
    <Text style = {estilo.item}>
      <Text>Nome: {item.name}{'\n'}</Text>
      <Text>Peso: {item.mass}{'\n'}</Text>
      </Text>
    }/>

    </View>  
  );
}
