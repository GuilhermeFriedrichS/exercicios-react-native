import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { styles } from './styles';

export default function App () {
  const [form, setForm] = useState({ peso: 0, altura: 0, resultado: '' });
  
  const calcular = () => {
    const res = form.peso / (form.altura * form.altura);
    let texto = '';
    if (res < 18.5) texto = 'Abaixo do peso';
    else if (res < 24.9) texto = 'Peso normal';
    else if (res < 29.9) texto = 'Sobrepeso';
    else if (res < 34.9) texto = 'Obesidade Grau I';
    else if (res < 39.9) texto = 'Obesidade Grau II';
    else texto = 'Obesidade Grau III ou Mórbida';
    setForm({ ...form, resultado: texto });
  };

  const pegaPeso = (p) => {
    setForm({ ...form, peso: p });
  };

  const pegaAltura = (a) => {
    setForm({ ...form, altura: a });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cálculo do IMC</Text>

      <Image
        source={{
          uri:
            'https://inuba.com/wp-content/uploads/2022/03/como-calcular-indice-masa-corporal.webp',
        }}
        style={styles.imagem}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o peso..."
        onChangeText={pegaPeso}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite a altura..."
        onChangeText={pegaAltura}
      />

      <Button title="Calcular" onPress={calcular} />

      <Text style={styles.texto}> {form.resultado} </Text>
    </View>
  );
};