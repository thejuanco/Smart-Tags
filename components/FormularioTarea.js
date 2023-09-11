import React, {useState, useEffect} from 'react'
import { Text, View, Pressable, StyleSheet, TextInput } from 'react-native'
import globalStyles from '../src/styles'
import { generarId } from '../helpers'

const FormularioTarea = ({setModal, handleTarea}) => {

    // Definiendo los states de las tareas
    const [titulo, setTitulo] = useState('')
    const [detalles, setDetalles] = useState('')
    // Definiendo el id y la fecha de la tarea
    const [id , setId] = useState('')
    const [fecha, setFecha] = useState('')

    
  return (
    <View style={{ backgroundColor: '#EEE5E5'}}>
        <View style={styles.contenedor}>
            <View>
                <Pressable
                    style={styles.btnCancelar}
                    onPress={() =>{
                        setModal(false)
                        // setTarea({})
                    }}
                >
                    <Text style={styles.cancelarTexto}>Cancelar</Text>
                </Pressable>
            </View>
            <View>
                <Text style={styles.titulo}>Agregar Tarea Nueva</Text>

                <View style={styles.campo}>
                    <Text style={styles.label}>Titulo de la Tarea</Text>
                    <TextInput
                        style={styles.input}
                        value={titulo}
                        onChangeText={setTitulo}
                    />
                    <Text style={styles.label}>Detalles de la Tarea</Text>
                    <TextInput
                        style={styles.input}
                        value={detalles}
                        onChangeText={setDetalles}
                    />
                </View>

                <Pressable
                    onPress={() => {
                        handleTarea({titulo, detalles});
                    }}
                    style={styles.btnSubmit}
                >
                    <Text style={styles.submitBtnTexto}>Añadir Nueva Tarea</Text>
                </Pressable>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    contenedor: {
        ...globalStyles.contenedor
    },
    btnCancelar: {
        marginTop: 20,
        padding: 12,
        backgroundColor: '#E8E8EF',
        marginHorizontal: 10,
        borderRadius: 24,
    },
    cancelarTexto:{
        textAlign: 'center',
        color: 'black',
        fontSize: 14,
        fontWeight: '500',
    },
    titulo: {
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 30,
        color: 'black',
    },
    campo:{
        marginBottom: 10,
    },
    label:{
        fontSize: 16,
        color: 'black',
    },
    input: {
        backgroundColor: '#E8E8EF',
        padding: 10,
        borderRadius: 24, 
        textAlign: 'center',
        marginTop: 10
    },
    
    btnSubmit:{
        marginTop: 25,
        backgroundColor: '#183059',
        padding: 18,
        borderRadius: 28,
    },
    submitBtnTexto:{
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '600'
    },
})

export default FormularioTarea
