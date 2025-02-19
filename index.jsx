import { Text, SafeAreaView, Image, StyleSheet, View, Button} from 'react-native';
import {useState} from 'react';

export default function App() {
  // let nome = 'jorge';
  // let idade = '32';

  const [getNome, setNome] = useState ("Jorge luiz");
  const [getIdade, setIdade] = useState('32')

  

  let imagem =
    'https://static.todamateria.com.br/upload/pa/is/paisagem-natural-og.jpg?  class=ogImageRectangle';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.paragraph}>
          Olá, meu nome é: {getNome} e tenho {getIdade} anos{' '}
        </Text>
      </View>

      <View>
        <Image source={{ uri: imagem }} style={{ width: 100, height: 100 }} />
      </View>

      <View>
        <Button title="Clique Aqui" onPress={() => {
            if (Button) {
              setNome('Ambrozio')
              setIdade('10')
            }
          }}
        />
        <Button title="Voltar" onPress={() => {
            if (Button) {
              setNome('Jorge luiz')
              setIdade('32')
            }
          }}
        />
      </View>

      <View style={styles.footer}>
        <Text> footer</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'blue',
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: 'red',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f8f8f8',
    padding: 10,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
});
