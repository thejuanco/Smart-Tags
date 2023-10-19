import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import globalStyles from '../src/styles'
import { formatearFecha } from '../helpers'

const Tarea = ({tarea}) => {

    const { titulo, detalles, fecha} = tarea

  return (
    <View style={styles.contenedor}>

        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.info}>{detalles}</Text>
        <Text style={styles.fecha}>creada el: {formatearFecha(fecha)}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    contenedor: {
        ...globalStyles.contenedor,
        transform: [{translateY: 20}],
        marginBottom: 10,
        paddingVertical: 18,
    },
    titulo: {
        fontWeight: '400',
        fontSize: 18,
        color: 'black',
    }, 
    info: {
        marginTop: 5,
    },
    fecha:{
        marginTop: 5,
        color: 'black',
    }
})

export default Tarea
