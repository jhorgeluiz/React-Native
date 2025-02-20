import { Text, SafeAreaView, Image, StyleSheet, View, Button, StatusBar,NativeBaseProvider } from 'react-native';
import {ScrollView} from 'react-native';
import {useState} from 'react';

export default function App() {
  // let nome = 'jorge';
  // let idade = '32';

  const [getNome, setNome] = useState ("Jorge luiz");
  const [getIdade, setIdade] = useState('32')

  

  let imagem = 'https://img.cdndsgni.com/preview/10599097.jpg';
  let imgProduto  = 'https://pizza-prime.s3.sa-east-1.amazonaws.com/website/pizzas/pizza_calabreza_mu%C3%A7arela.webp'

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.statusBarContainer}>
      <StatusBar style={styles.statusBar} />
    </View>
      <ScrollView>
        <View style={styles.header}>
          <Image style={styles.logo} source={{uri: imagem}}/>
          <Text style={styles.paragraph}>Pizaria do Pai </Text>
        </View>

        <View style={styles.navBar}>
          <Button style={styles.pizzas} title="Pizzas" />
          <Button title="Hamburguer" />
          <Button title="Espetinho" />
        </View>


        <View style={styles.categoria}>
          <Text style={styles.txtCategoria}>Pizzas Salgadas </Text>
        </View>

        // -----------------------------
        <View style={styles.section}>
          <View style={styles.imgTitulo}>
            <Image style={styles.imgProduto} source={{uri: imgProduto}}/>
            <View>
              <Text style={styles.paragraph}>Pizza Margherita </Text>
              <Text style={styles.ingredientes}>Ovos, cebola, azeitona, ervilha, queijo e presunto</Text>
            </View>
          </View>
          
          <View style={styles.preco}>
            <Text style={styles.precoAntigo}>De: 30,00</Text>
            <Text style={styles.precoNovo}>Por: 25,00</Text>
            <Button style={styles.btnPedir} title="Pedir" />
          </View>
        </View>


        // -------------------
        <View style={styles.section}>
          <View style={styles.imgTitulo}>
            <Image style={styles.imgProduto} source={{uri: imgProduto}}/>
            <View>
              <Text style={styles.paragraph}>Pizza Margherita </Text>
              <Text style={styles.ingredientes}>Ovos, cebola, azeitona, ervilha, queijo e presunto</Text>
            </View>
          </View>
          
          <View style={styles.preco}>
            <Text style={styles.precoAntigo}>De: 30,00</Text>
            <Text style={styles.precoNovo}>Por: 25,00</Text>
            <Button style={styles.btnPedir} title="Pedir" />
          </View>
        </View>

        // -------------

        <View style={styles.section}>
          <View style={styles.imgTitulo}>
            <Image style={styles.imgProduto} source={{uri: imgProduto}}/>
            <View>
              <Text style={styles.paragraph}>Pizza Margherita </Text>
              <Text style={styles.ingredientes}>Ovos, cebola, azeitona, ervilha, queijo e presunto</Text>
            </View>
          </View>
          
          <View style={styles.preco}>
            <Text style={styles.precoAntigo}>De: 30,00</Text>
            <Text style={styles.precoNovo}>Por: 25,00</Text>
            <Button style={styles.btnPedir} title="Pedir" />
          </View>
        </View>

        // -------------------------------------

        <View style={styles.categoria}>
          <Text style={styles.txtCategoria}>Pizzas Doce </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.imgTitulo}>
            <Image style={styles.imgProduto} source={{uri: imgProduto}}/>
            <View>
              <Text style={styles.paragraph}>Pizza Margherita </Text>
              <Text style={styles.ingredientes}>Ovos, cebola, azeitona, ervilha, queijo e presunto</Text>
            </View>
          </View>
          
          <View style={styles.preco}>
            <Text style={styles.precoAntigo}>De: 30,00</Text>
            <Text style={styles.precoNovo}>Por: 25,00</Text>
            <Button style={styles.btnPedir} title="Pedir" />
          </View>
        </View>

        // --------------------------------
        <View style={styles.section}>
          <View style={styles.imgTitulo}>
            <Image style={styles.imgProduto} source={{uri: imgProduto}}/>
            <View>
              <Text style={styles.paragraph}>Pizza Margherita </Text>
              <Text style={styles.ingredientes}>Ovos, cebola, azeitona, ervilha, queijo e presunto</Text>
            </View>
          </View>
          
          <View style={styles.preco}>
            <Text style={styles.precoAntigo}>De: 30,00</Text>
            <Text style={styles.precoNovo}>Por: 25,00</Text>
            <Button style={styles.btnPedir} title="Pedir" />
          </View>
        </View>

        // -------------------------------

        <View style={styles.section}>
          <View style={styles.imgTitulo}>
            <Image style={styles.imgProduto} source={{uri: imgProduto}}/>
            <View>
              <Text style={styles.paragraph}>Pizza Margherita </Text>
              <Text style={styles.ingredientes}>Ovos, cebola, azeitona, ervilha, queijo e presunto</Text>
            </View>
          </View>
          
          <View style={styles.preco}>
            <Text style={styles.precoAntigo}>De: 30,00</Text>
            <Text style={styles.precoNovo}>Por: 25,00</Text>
            <Button style={styles.btnPedir} title="Pedir" />
          </View>
        </View>


        <View style={styles.footer}>
          <Text> Desenvolvido por Jorge luiz</Text>
        </View>

      </ScrollView>

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  statusBarContainer: {
    padding: 15,
    backgroundColor: '#FFA500'
  },
  statusBar: {
    marginTop: 25,
    backgroundColor: 'blue',
  },
  navBar: {
    padding: 10,
    backgroundColor: '#6A522C',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  pizzas: {
    backgroundColor: 'red',
  },
  header: {
    justifyContent: 'center',
    backgroundColor: '#F6A82E',
    flexDirection: 'row',
    alignItems: 'center',

  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#2b2b2b',
    
    padding: 0,
    margin: 0,
  },
  categoria: {
    alignItems: 'center',
    marginTop: 20,
  },
  txtCategoria: {
    fontSize: 25,
    color: 'white'
  },
  paragraph: {
    margin: 5,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  preco: {
    borderRadius: 10,
    padding: 5,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    fontWeight: 'bold',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 350,
  },
  precoAntigo: {
    textDecorationLine: 'line-through',
    color: 'red',
    fontSize: 15,
  },
  precoNovo: {
    color: 'green',
    fontSize: 15,
  },
  btnPedir: {
    borderRadius: 50,
    backgroundColor: '#FFA500',
  },
  logo: {
    marginTop: 10,
    width: 150,
    height: 80,
  },
  
  imgProduto: {
    backgroundColor: 'white',
    marginRight: 10,
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  section: {
    marginTop: 10,
    backgroundColor: '#d8d8d8',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FFA500',
    borderRadius: 10,
    alignItems: 'center',
    height: 170,
  },
  imgTitulo: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',

  },
  ingredientes: {

    width: 220,
    fontSize: 10,
  },
  footer: {
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f8f8f8',
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
  },
});
