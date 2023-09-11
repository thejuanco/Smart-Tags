import React, { useState } from 'react'
import { Text, View, StyleSheet, Pressable, Image, Modal, Alert } from 'react-native'

import FormularioTarea from '../components/FormularioTarea' 
import ListarTareas from '../components/ListarTareas'
import { generarId } from '../helpers'

const Tareas = () => {
  const [modal, setModal] = useState(false)
  const [tarea, setTarea] = useState({})
  const [tareas, setTareas] = useState([])

    //Validando el formulario y creando el objeto de tareas
    const handleTarea = ( tarea ) => {
      if([tarea.titulo, tarea.detalles].includes('')){
          Alert.alert('Error', 'Todos los campos son obligatorios', 
          [{text: 'Aceptar'}])
          return
        }
        
        // Agregar las tareas en el state
        tarea.id = generarId()
        // agregando una fecha
        tarea.fecha = Date.now()

        setTareas([...tareas, tarea])
        setModal(!modal)
    }

  return (
    <View>
      <Modal
        animationType='slide'
        visible={modal}
      >
        <FormularioTarea
          setModal={setModal}
          tareas={tareas}
          setTareas={setTareas}
          modal={modal}
          handleTarea={handleTarea}
        />
      </Modal>

      { tareas.length === 0 ? (
          <>
            <View style={styles.banner}>
              <Text style={styles.titulo}>Para comenzar agrega una nueva tarea</Text>
            </View>
            <Image 
              style={styles.image}
              source={require('../src/img/addSmart.png')}
            />
          </>
        ) 
        :(
          <>
            <View style={styles.banner}>
              <Text style={styles.titulo}>Tareas Pendientes</Text>
            </View>

            <ListarTareas
              tarea={tarea}
              tareas={tareas}
            />
          </>
      )}

      <Pressable
        style={styles.pressable}
      // Muestra el modal
        onPress={() => {setModal(!modal)}}
      >
        <Image
          style={styles.btnNuevaTarea}
        // Icono de añadir una tarea
          source={require('../src/img/mas.png')}
        />
      </Pressable>
      
    </View>
  )
}

const styles = StyleSheet.create({
  banner:{
    backgroundColor: 'white',
    paddingVertical: 20,
  },
  titulo: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    marginHorizontal: 10,
  },
  btnNuevaTarea: {
    width: 30,
    height: 30,
  }, 
  pressable: {
    position: 'absolute',
    right: 20,
    marginTop: 560,
    backgroundColor: '#B2D4D7',
    borderRadius: 25,
    padding: 18,
  },
  image: {
    position: 'absolute',
    marginTop: 200,
    marginHorizontal: 30,
    height: 250,
    width: 300,
    borderRadius: 20,
  }
})

export default Tareas
