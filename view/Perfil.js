import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Perfil = () => {

  const navegacion = useNavigation()

  return (
    <View style={styles.contenedor}>
      <View>
          <Image
          //Imagen de fondo
            style={styles.imgFondo}
            source={require('../src/img/fondo.jpg')}
          />
          
          <Image
            style={styles.imgPerfil}
            source={require('../src/img/Foto_perfil.jpg')}
          />

          <Text style={styles.nombreUsuario}>JUANCOO</Text>

          <TouchableOpacity
            style={styles.btnPerfil}
            onPress={() => navegacion.navigate("Configuracion")}
          >
            <Text
              style={styles.textBtnPerfil}
            >Editar Perfil</Text>
          </TouchableOpacity>

      </View>
    </View>


  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  imgFondo: {
    position: 'relative',
    width: 600,
    height: 120,
  },
  imgPerfil: {
    position: 'absolute',
    width: 110,
    height: 110,
    borderRadius: 60,
    marginTop: 50,
    marginLeft: 20,
  },
  nombreUsuario: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    marginTop: 50,
    marginLeft: 20,
  },
  btnPerfil: {
    backgroundColor: '#031D44',
    padding: 10,
    borderRadius: 19,
    marginLeft: 240,
    marginRight: 20,
    position: 'absolute',
    marginTop: 140,

  },
  textBtnPerfil: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  }
})

export default Perfil
