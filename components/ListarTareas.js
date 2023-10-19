import React from 'react'
import { Text, View } from 'react-native'
import Tarea from './Tarea'

const ListarTareas = ({tareas}) => {
  return (
    <View>
      {//En este archivo se listan las tareas
      }
      {tareas.map( tarea => (
        <Tarea
            tarea={tarea}
            key={tarea.id}
        />
      ))}
    </View>
  )
}

export default ListarTareas
