import React, { useState } from 'react';
import { View, Text, Button} from 'react-native';

export default function App () {

    const [number, setNumber] = useState(0)

    function somar(){
      setNumber(number + 1);
    }

    function sub(){
      number > 0 ? setNumber(number - 1) :  ''
    }

    return(
      <View style={{ marginTop: 20 }}>

        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        
          <Text>Contador de Pessoas</Text>
          <Text style={{fontSize: 100}}>{number}</Text>
        </div>

        <Button title="+" onPress={somar} color='green'/>
        <Button title="-" onPress={sub} color='red'/>

      </View>
    )

}