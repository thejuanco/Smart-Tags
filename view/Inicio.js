import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native'

const Inicio = () => {
  return (
    <ScrollView>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Smart Tags</Text>
      </View>
      
      <Image
        style={styles.imgInicioIzq}
        source={require('../src/img/unoFondo.jpg')}
      />

      <Image
        style={styles.imgInicioIzq}
        source={require('../src/img/dosFondo.jpg')}
      />
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  titulo:{
    marginTop: 20,
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 26,
    color: 'black',
  },
  imgInicioIzq: {
    marginTop: 20,
    marginHorizontal: 10,
    width: 170,
    height: 400,
    borderRadius: 25,
  },
  imgInicioDer: {
    marginVertical: 10,
    width: 170,
    height: 400,
    borderRadius: 25,
    position: 'absolute',
  },
  txtFondoIzq:{
    padding: 20,
    color: 'white',
    fontSize: 20,
    fontWeight: '600'
  }
})

export default Inicio
