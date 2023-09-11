import React from 'react'
import { Text, View } from 'react-native'
import Tarea from './Tarea'

const ListarTareas = ({tareas}) => {
  return (
    <View>
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
