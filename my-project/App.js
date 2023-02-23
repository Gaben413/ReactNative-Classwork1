import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const SimpleImage = require('./assets/Lustra.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Titulo da aplicação</Text>
      <Text>Um texto corrido, um texto corrido, um texto corrido, um texto corrido, um texto corrido, um texto corrido, um texto corrido, um texto corrido, um texto corrido, um texto corrido, um texto corrido, um texto corrido</Text>

      <View style={styles.container2}>
        <Text style={styles.titleText2}>Postagem Simples</Text>
        <Text style={styles.smallText}>Uma pequena frase que não faz nada!</Text>
        <Text style={styles.titleText2}>Postagem Simples</Text>
        <Text style={styles.smallText}>Uma pequena frase que não faz nada!</Text>
        <Text style={styles.titleText2}>Postagem Simples</Text>
        <Text style={styles.smallText}>Uma pequena frase que não faz nada!</Text>
      </View>

      <Text style={styles.insertPhoto}>Area para a foto</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50,
    marginLeft:25,
    marginRight:25,
  },container2: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    textAlign:'left',
    marginTop:50,
    marginLeft:-100,
    marginRight:0,
    marginBottom:0
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom:60
  },
  titleText2: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop:25
  },
  smallText:{
    marginBottom: 30
  },
  insertPhoto:{
    flex:1,
    backgroundColor: 'red',
    width:'100%',
    height:'100%',

    textAlign:'center',
    textAlignVertical:'center',

    marginTop:0,
    marginBottom:0,
    marginLeft:0,
    marginRight:0,

    paddingTop:0,
    paddingBottom:0,
    paddingLeft:0,
    paddingRight:0,
  }
});
