import React from 'react'
import { Text, View } from 'react-native'
import {LocaleConfig, Calendar, Agenda} from 'react-native-calendars';
//import { Calendar } from 'react-native-calendario';

const Calendario = () => {
  return (
    <Calendar
      // Collection of dates that have to be marked. Default = {}
      markedDates={{
        '2012-05-16': {selected: true, marked: true, selectedColor: 'blue'},
        '2012-05-17': {marked: true},
        '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
        '2012-05-19': {disabled: true, disableTouchEvent: true}
      }}
    />
    
  )
}

export default Calendario
