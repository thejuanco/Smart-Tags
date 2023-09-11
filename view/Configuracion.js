import React from 'react'
import {View,Text, TouchableOpacity, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native'
 
const Configuracion = () => {
  const navegacion = useNavigation()

  return (
    <View>
      <Text>Desde Configuracion</Text>
    </View>
  )
}


export default Configuracion
