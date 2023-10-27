import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Perfil = () => {

  const navegacion = useNavigation()

  return (
    <ScrollView>
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

          {/*Cards de informacion*/}
          <View style={styles.listado}>
            <Pressable
              style={styles.card}
              onPress={() => navegacion.navigate("Card1")}
            >
              <View style={styles.contenidoCard}>
                <Image
                  style={styles.imgCard}
                  source={require('../src/img/adminTime.png')}
                />
                <Text style={styles.infoCard}>Organiza mejor tus tareas</Text>
              </View>
              
              <TouchableOpacity 
                style={[styles.buttonCard, {marginLeft: 100, marginHorizontal: 5}]}
                onPress={() => navegacion.navigate("Card1")}
              >
                <Text style={[styles.textCard]}>Visitar</Text>
              </TouchableOpacity>
            </Pressable>

            <Pressable
              style={styles.card}
              onPress={() => navegacion.navigate("Card2")}
            >
              <View>
                <Image
                  style={styles.imgCard}
                  source={require('../src/img/addTime.png')}
                />
              <Text style={styles.infoCard}>Ventajas de administrar tu tiempo</Text>
              </View>
              <TouchableOpacity 
                style={[styles.buttonCard, {marginLeft: 100, marginHorizontal: 5}]}
                onPress={() => navegacion.navigate("Card2")}
              >
                <Text style={[styles.textCard]}>Visitar</Text>
              </TouchableOpacity>

            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
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
  },
  listado: {
    //direccion 
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 30,
    marginHorizontal: 5
  },
  card:{
    height: 230,
    width: 'auto',
    backgroundColor: '#F4D6D2',
    flexBasis: '49%',
    borderRadius: 20,
  },
  infoCard: {
    fontSize: 16,
    color: 'black',
    marginTop: 130,
    position: 'absolute',
    marginHorizontal: 5,
  },
  imgCard:{
    width: '100%',
    height: '75%',
    borderRadius: 20,
  },
  buttonCard:{
    padding: 3,
    backgroundColor: '#9c4146',
    marginTop: 20,
    borderRadius: 20,
  },
  textCard: {
    color: 'white',
    right: 10,
    textAlign: 'right',
    fontWeight: '700',
  }
})

export default Perfil
