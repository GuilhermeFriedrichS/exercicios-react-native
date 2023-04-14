import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({    
    titulo:{
      fontSize: 18,
      color: 'red',
      alignSelf: 'center',
      marginTop: 25
    },
    campo:{
      fontSize: 15,
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      display: 'flex',
      flexDirection: 'row',

    },
    input:{
      height: 35,
      borderWidth: 1,
      borderColor: '#222',
      marginRight: 15,
      marginBottom: 15,
      fontSize: 14,
      padding: 10,
      
    },
    texto: {
      marginTop: 2,
      fontSize: 20
    }
  });


  export {styles};