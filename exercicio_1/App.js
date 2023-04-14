import React from 'react';
import { View, Text, Image } from 'react-native';

export default function App() {
  return (
    <View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ marginTop: 25 }}>Meu Perfil</Text>
        <Image
          source={{ uri: 'https://siga.cps.sp.gov.br/image//HIVFXVEL3PBM4KHRA8HQ7NIVWWXWZD.TMB.JPG' }}
          style={{ width: 120, height: 120, marginTop: 10 }}
        />
      </View>

      <View style={{ marginLeft: 5 }}>
        <Text style={{ color: 'blue', marginTop: 15 }}>Dados pessoais:</Text>
        <Text>Guilherme Friedrich Sousa, 18 anos</Text>

        <Text style={{ color: 'blue', marginTop: 15 }}>Formação:</Text>
        <Text>FATEC PG</Text>

        <Text style={{ color: 'blue', marginTop: 15 }}>Experiência:</Text>
        <Text>Estágio na prefeitura de São Vicente</Text>

        <Text style={{ color: 'blue', marginTop: 15 }}>Projetos:</Text>
        <Text>Sem projetos</Text>
      </View>
    </View>
  )
}
