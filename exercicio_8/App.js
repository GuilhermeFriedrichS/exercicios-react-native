import React, { useState } from 'react';
import { View, Text, Image, Button, Switch, ScrollView} from 'react-native';
import { styles } from './styles';

 
export default function App(){
  
  return(
   <View>
    <Text style={styles.titulo}>Anuncios</Text>
    <View style={styles.anunciosCard}>
      <ScrollView horizontal={true} persistentScrollbar={true}>

        <View style={styles.card}>
          <Image
          style={styles.imagens}
        source={{uri: 'https://siterg.uol.com.br/wp-content/uploads/2020/11/felicidade-por-rodrigo-de-aquino.jpg'}}/>
       <Text style={styles.texto}>Imagem feliz</Text>
        </View>
        <View style={styles.card}>
          <Image
          style={styles.imagens}
        source={{uri: 'https://siterg.uol.com.br/wp-content/uploads/2020/11/felicidade-por-rodrigo-de-aquino.jpg'}}/>
       <Text style={styles.texto}>Imagem feliz</Text>
        </View>
        <View style={styles.card}>
          <Image
          style={styles.imagens}
        source={{uri: 'https://siterg.uol.com.br/wp-content/uploads/2020/11/felicidade-por-rodrigo-de-aquino.jpg'}}/>
       <Text style={styles.texto}>Imagem feliz</Text>
        </View>
        <View style={styles.card}>
          <Image
          style={styles.imagens}
        source={{uri: 'https://siterg.uol.com.br/wp-content/uploads/2020/11/felicidade-por-rodrigo-de-aquino.jpg'}}/>
       <Text style={styles.texto}>Imagem feliz</Text>
        </View>
        <View style={styles.card}>
          <Image
          style={styles.imagens}
        source={{uri: 'https://siterg.uol.com.br/wp-content/uploads/2020/11/felicidade-por-rodrigo-de-aquino.jpg'}}/>
       <Text style={styles.texto}>Imagem feliz</Text>
        </View>
      </ScrollView>
    </View>
   </View>
  );
}