import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { styles } from './styles';

const App = () => {
const [resultado, setResultado] = useState('?');

const descobrir = () => {
setResultado(Math.floor(Math.random() * 10));
};

return (
<View style={styles.container}>
<Text style={styles.titulo}>Jogo do N° Aleatório</Text>

  <Image
    source={{
      uri:
        'https://marceloguernieri.com.br/wp-content/uploads/2018/01/charada.gif',
    }}
    style={{ width: 250, height: 210, alignSelf: 'center', marginTop: 20 }}
  />

  <Text style={styles.texto}> {resultado} </Text>

  <Button title="Descobrir" onPress={descobrir} />
</View>
);
};

export default App;






