import React, { useState } from 'react';
import { View, Text, Image, Button, Switch, ScrollView} from 'react-native';
import { styles } from './styles';

 
export default function App(){
  
  return(
   <View>
    <Text style={styles.titulo}>Vagas</Text>
      <ScrollView persistentScrollbar={true}>
        <View style={styles.vagasCard}>
            <Text style={styles.tituloVaga}>Desenvolvedor Backend</Text>
            <Text style={styles.vagaDescricao}>Salario: R$ 3000,00</Text>
            <Text style={styles.vagaDescricao}>Descrição: Profissional com 2 anos de experiência</Text>
            <Text style={styles.vagaDescricao}>Contato: (13) 00000-0000</Text>
        </View>
        <View style={styles.vagasCard}>
            <Text style={styles.tituloVaga}>Desenvolvedor Backend</Text>
            <Text style={styles.vagaDescricao}>Salario: R$ 3000,00</Text>
            <Text style={styles.vagaDescricao}>Descrição: Profissional com 2 anos de experiência</Text>
            <Text style={styles.vagaDescricao}>Contato: (13) 00000-0000</Text>
        </View>
        <View style={styles.vagasCard}>
            <Text style={styles.tituloVaga}>Desenvolvedor Backend</Text>
            <Text style={styles.vagaDescricao}>Salario: R$ 3000,00</Text>
            <Text style={styles.vagaDescricao}>Descrição: Profissional com 2 anos de experiência</Text>
            <Text style={styles.vagaDescricao}>Contato: (13) 00000-0000</Text>
        </View>
        <View style={styles.vagasCard}>
            <Text style={styles.tituloVaga}>Desenvolvedor Backend</Text>
            <Text style={styles.vagaDescricao}>Salario: R$ 3000,00</Text>
            <Text style={styles.vagaDescricao}>Descrição: Profissional com 2 anos de experiência</Text>
            <Text style={styles.vagaDescricao}>Contato: (13) 00000-0000</Text>
        </View>
        <View style={styles.vagasCard}>
            <Text style={styles.tituloVaga}>Desenvolvedor Backend</Text>
            <Text style={styles.vagaDescricao}>Salario: R$ 3000,00</Text>
            <Text style={styles.vagaDescricao}>Descrição: Profissional com 2 anos de experiência</Text>
            <Text style={styles.vagaDescricao}>Contato: (13) 00000-0000</Text>
        </View>
        <View style={styles.vagasCard}>
            <Text style={styles.tituloVaga}>Desenvolvedor Backend</Text>
            <Text style={styles.vagaDescricao}>Salario: R$ 3000,00</Text>
            <Text style={styles.vagaDescricao}>Descrição: Profissional com 2 anos de experiência</Text>
            <Text style={styles.vagaDescricao}>Contato: (13) 00000-0000</Text>
        </View>
      </ScrollView>
   </View>
  );
}