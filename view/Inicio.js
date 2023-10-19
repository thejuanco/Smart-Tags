import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView, Pressable} from 'react-native'

const Inicio = () => {
  return (
    <ScrollView style={styles.contenedor}>
        <Text style={styles.tituloUno}>Smart</Text>
        <Text style={styles.tituloDos}>Tags</Text>
      
      <View style={styles.listado}>

        <View style={styles.listadoItemUno}>
          <Text style={styles.tituloItem}>Organiza {'\n'}tu dia</Text>
                <Image
                  style={styles.corazonUno}
                  source={require('../src/img/corazonNegro.png')}
                />
          <View style={{marginTop: 20}}>

            <View View style={styles.task}>
              <Image
                style={styles.taskImage}
                source={require('../src/img/listo.png')}
              />
              <Text style={styles.taskText}>Programar</Text>
            </View>

            <View style={styles.task}>
              <Image
                style={styles.taskImage}
                source={require('../src/img/vacio.png')}
              />
              <Text style={styles.taskText}>GYM</Text>
            </View>

            <View style={styles.task}>
              <Image
                  style={styles.taskImage}
                  source={require('../src/img/vacio.png')}
                />
              <Text style={styles.taskText}>Estudiar</Text>
            </View>

          </View>

        </View>

        <View style={styles.listadoItemDos}>
          <Text style={styles.tituloItem}>Reinventa {'\n'}tu Agenda</Text>
          <Image
            style={styles.imgUno}
            source={require('../src/img/innovar.png')}
          />
            <Image
              style={styles.corazonUno}
              source={require('../src/img/corazon.png')}
            />
            <View View style={styles.taskDos}>
              <Text style={styles.taskTextDos}>Actualizado hace 1 min</Text>
            </View>

        </View>

        <View style={styles.listadoInferior}>
          <Text style={styles.listadotxt}>Organiza tus Libros</Text>
          <Text style={styles.txtListadoInferior}>Mis Lecturas</Text>
        </View>

        <View style={styles.listadoInferiorDos}>
          <Text style={styles.listadotxt}>Organiza tu Tiempo</Text>
          <Text style={styles.txtListadoInferior}>Lista de Tareas</Text>
        </View>
      </View>
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: 'black',
  },
  tituloUno:{
    marginTop: 50,
    marginHorizontal: 20,
    fontWeight: '300',
    fontSize: 50,
    color: '#EAE6E5',
  },
  corazonUno: {
    position: 'absolute',
    right: 20,
    marginTop: 35,
    height: 35,
    width: 35,
  },
  task: {
    padding: 15,
    backgroundColor: '#C45158',
    borderRadius: 24,
    marginHorizontal: 10,
    marginVertical: 3,
  },
  taskDos: {
    marginTop: 8,
    marginHorizontal: 12,
    marginVertical: 3,
  },
  taskText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  taskTextDos: {
    textAlign: 'left',
    fontWeight: '500',
    fontSize: 14,
  },
  taskImage: {
    position: 'absolute',
    marginTop: 15,
    left: 15,
    width: 20,
    height: 20,
  },
  tituloDos:{
    marginHorizontal: 20,
    fontWeight: '400',
    fontSize: 50,
    color: '#EAE6E5',
  },
  tituloItem: {
    marginTop: 30,
    marginHorizontal: 15,
    textAlign: 'left',
    fontWeight: '500',
    fontSize: 20,
    color: 'black',
  },
  imgUno: {
    position: 'absolute',
    marginHorizontal: 29,
    marginTop: 140,
    width: 145,
    height: 140,
    transform: [{ scaleX: -1 }]
  },
  listado: {
    marginTop: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  listadoItemUno: {
    flexBasis: '49%',
    backgroundColor: '#E66169',
    borderTopRightRadius: 45,
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
    height: 280,
  },
  listadoItemDos: {
    flexBasis: '49%',
    backgroundColor: '#EBD0A0',
    borderTopRightRadius: 45,
    borderBottomLeftRadius: 45,
    borderTopLeftRadius: 45,
    height: 280,
  },
  listadoInferior:{
    marginTop: 5,
    height: 100,
    width: '100%',
    backgroundColor: '#E8EEF2',
    borderRadius: 35,
  },
  listadoInferiorDos:{
    marginTop: 5,
    height: 100,
    width: '100%',
    backgroundColor: '#5398BE',
    borderRadius: 35,
    marginBottom: 20,
  },
  txtListadoInferior: {
    textAlign: 'center',
    fontWeight: '500',
    color: 'black',
    fontSize: 24,
    
  },
  listadotxt: {
    textAlign: 'center',
    marginTop: 22,
    fontWeight: '500',
  }
})

export default Inicio
