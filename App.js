import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native'
import Constants from 'expo-constants'
import axios from 'axios'

const App = () => {

  const [bairro, setBairro] = useState('')
  const [postoDetalhes, setPostoDetalhes] = useState([])

  //Função que retorna os detalhes do posto

  const obterDetalhes = () => {

    const axios = require('axios');

    axios.get('http://localhost:3000/postos')
      .then(resp => {
        data = resp.data;
        data.forEach(p => {
          console.log(`${p.unidade}`);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (

    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled keyboardVerticalOffset={100}>
      <Image style={styles.logo} source={require('./assets/icon.png')} />

      <Text style={styles.logoText}>LocPostos</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder='Digite o seu bairro...'
          onChangeText={text => setBairro(text)}
          placeholderTextColor='#389485'
        />
      </View>


      <TouchableOpacity style={styles.loginBtn} onPress={obterDetalhes}>
        <Text style={styles.buttonText}>PESQUISAR</Text>
      </TouchableOpacity>

      {
        postoDetalhes != '' &&
        <>
          <View style={styles.cartao}>
            <View style={styles.headerCartao}>
              <Image source={{ uri: `${loginDetalhes.avatar_url}` }} style={styles.avatar} />
              <Text style={styles.seguidores}>Seguindo: {seguindo.length}</Text>
              <Text style={styles.seguidores}>Seguidores: {seguidores.length}</Text>
            </View>
            <View style={styles.detalhesCartao}>
              <Text style={styles.nomeCartao}>{loginDetalhes.name}</Text>
              <Text style={styles.textoCartao}>ID: {loginDetalhes.id}</Text>
              <Text style={styles.textoCartao}>Empresa: {loginDetalhes.company}</Text>
              <Text style={styles.textoCartao}>Email: {loginDetalhes.email}</Text>
              <Text style={styles.textoCartao}>Link: {loginDetalhes.url}</Text>
              <Text style={styles.textoCartao}>Criado em: {loginDetalhes.created_at}</Text>
              <Text style={styles.textoCartao}>Atualizado em: {loginDetalhes.updated_at}</Text>
            </View>
          </View>
        </>
      }
    </KeyboardAvoidingView>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#F1F3F7',
    alignItems: 'center'
  },
  logo: {
    height: 128,
    width: 128,
  },
  logoText: {
    fontWeight: "bold",
    fontSize: 40,
    color: "#05396B",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    height: 56,
    marginBottom: 16,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 56,
    color: "#05396B"
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#389485",
    borderRadius: 16,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    marginBottom: 32,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cartao: {
    backgroundColor: "#434557",
    padding: 18,
    width: '92%',
    borderRadius: 8,
  },
  headerCartao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 82,
    height: 82,
    borderRadius: 16,
    borderColor: 'white',
    borderWidth: 2,
    marginHorizontal: 2,
    marginVertical: 1
  },
  nomeCartao: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: 8,
  },
  seguidores: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 12,
    paddingVertical: 8,
  },
  detalhesCartao: {
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    backgroundColor: "#434557",
    borderRadius: 8,
  },
  textoCartao: {
    color: "white",
    fontSize: 12,
  }

});
