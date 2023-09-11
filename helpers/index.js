// Generar un id unico para la tarea e identificarla 
export const generarId = () => {
    // Generar un numero aleatorio 
    const aleatorio = Math.random().toString(36).substring(36)
    const fecha = Date.now().toString(36)
    return aleatorio + fecha;
}

export const formatearFecha = (fecha) => {
    const fechaNueva = new Date(fecha)
    const opciones = {
        year: '2-digit',
        month: 'short',
        day: '2-digit',
    }
    return fechaNueva.toLocaleDateString('es-Es', opciones)
}