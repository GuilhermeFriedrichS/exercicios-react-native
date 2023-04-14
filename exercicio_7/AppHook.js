import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, ScrollView} from 'react-native';
import { styles } from './styles';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
 
export default function App(){
  const [nome, setNome] = useState()    
  const [idade, setIdade] = useState(0)
  const [sexo, setSexo] = useState('Masculino')
  const [escolaridade, setEscolaridade] = useState('Médio')
  const [limite, setLimite] = useState(0)
  const [brasileiro, setBrasileiro] = useState(false)
  const [resultado, setResultado] = useState()

  function confirmar(){
    setResultado('Nome: ' + nome + '\n' +
                 'Idade: ' + idade + '\n' +
                 'Sexo: ' + sexo + '\n' +
                 'Escolaridade: ' + escolaridade + '\n' +
                 'Limite: ' + limite + '\n' +
                 ( (brasileiro) ? 'Brasileiro' : 'Estrangeiro' ))
  }
 
  return(
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.titulo}>Abertura de Conta</Text>

        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={(valor) => setNome(valor)}
        />

        <Text style={styles.label}>Idade</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(valor) => setIdade(valor)}
          
        />

        <Text style={styles.label}>Sexo</Text>
        <Picker
          selectedValue={sexo}
          onValueChange={ (itemValue, itemIndex) => setSexo(itemValue) }
        >
          <Picker.Item key={1} value='Masculino' label="Masculino" />
          <Picker.Item key={2} value='Feminino' label="Feminino" />
        </Picker>

        <Text style={styles.label}>Escolaridade</Text>
        <Picker
          selectedValue={escolaridade}
          onValueChange={ (itemValue, itemIndex) => setEscolaridade(itemValue) }
        >
          <Picker.Item key={1} value='Médio' label="Médio" />
          <Picker.Item key={2} value='Graduação' label="Graduação" />
          <Picker.Item key={3} value='Pós Graduação' label="Pós Graduação" />
          <Picker.Item key={4} value='MBA' label="MBA" />
        </Picker>

        <Text style={styles.label}>Limite</Text>
        <Slider
          minimumValue={0}
          maximumValue={1000}
          step={50}
          value={limite}
          onValueChange={ (valorSelecionado) => setLimite(valorSelecionado)}
          
        />
        <Text style={styles.limite}>{limite}</Text>

        <Text style={styles.label}>Brasileiro</Text>
        <Switch 
        value={brasileiro}
        onValueChange={ (valorSwitch) => setBrasileiro(valorSwitch)}
        />

        <Button title="Confirmar" onPress={confirmar} />
  
        <Text style={styles.texto}> {resultado} </Text>
      </View>
    </ScrollView>
  );
}