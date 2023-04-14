import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    input:{
      height: 45,
      borderWidth: 1,
      borderColor: '#222',
      margin: 15,
      fontSize: 14,
      padding: 10,
    },
    texto:{
      textAlign: 'center',
      fontSize: 25,
      padding: 10,
      marginTop: 5
    },
    titulo:{
      fontSize: 18,
      color: 'orange',
      alignSelf: 'center',
      marginTop: 15
    },
    imagem:{
      width: 200,
      height: 100,
      alignSelf: 'center',
      marginTop: 10
    }
  });


  export {styles};