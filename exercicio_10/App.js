import React, { useState } from 'react';
import { View, Text, TextInput, Picker, StyleSheet, Button } from 'react-native';

export default function App() {
  const [de, setDe] = useState('BRL');
  const [paraMoeda, setParaMoeda] = useState('USD');
  const [valor, setValor] = useState(0);
  const [resultado, setResultado] = useState(0);

  function taxaDeConversao (de, paraMoeda){
    const taxasDeConversao = {
      'BRL-USD': 0.19,
      'BRL-EUR': 0.16,
      'USD-BRL': 5.38,
      'USD-EUR': 0.83,
      'EUR-BRL': 6.12,
      'EUR-USD': 1.2,
    };

    const taxa = taxasDeConversao[`${de}-${paraMoeda}`];

    return taxa;
  };

  const handlePress = () => {
    if(de != paraMoeda) setResultado(valor * taxaDeConversao(de, paraMoeda))
    else setResultado(valor)
   
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas Dólar, Real e Euro</Text>
      <TextInput
        style={styles.input}
        value={valor}
        onChangeText={(text) => setValor(text)}
      />
      <Text style={styles.label}>De moeda:</Text>
      <Picker
        style={styles.picker}
        selectedValue={de}
        onValueChange={(itemValue) => {
          if (itemValue !== de) {
            setDe(itemValue);
          }
        }}
      >
        <Picker.Item label="BRL" value="BRL" />
        <Picker.Item label="USD" value="USD" />
        <Picker.Item label="EUR" value="EUR" />
      </Picker>

      <Text style={styles.label}>Para moeda:</Text>
      <Picker
        style={styles.picker}
        selectedValue={paraMoeda}
        onValueChange={(itemValue) => {
          if (itemValue !== paraMoeda) {
            setParaMoeda(itemValue);
          }
        }}
      >
        <Picker.Item label="BRL" value="BRL" />
        <Picker.Item label="USD" value="USD" />
        <Picker.Item label="EUR" value="EUR" />
      </Picker>

      <Button title="Calcular" onPress={handlePress} />


        <Text style={styles.result}>
          Resultado: {resultado} {paraMoeda}
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  picker: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  title: {
     fontSize: 24, 
     fontWeight: 'bold', 
     color: 'red', 
     textAlign: 'center', 
     marginBottom: 16 
  }
});