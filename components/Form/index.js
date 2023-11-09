import React, { useState } from 'react'
import { View ,Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Keyboard} from 'react-native'

import styles from './style'


function Form(props) {
    const [task, setTask] = useState('');

    const handleAddTask = () => {
        if(task.length === 0) {
            alert('vui long nhap viec khac')
            return false
        }
        props.onAddTask(task)
        setTask('')
        Keyboard.dismiss()
    }

  return (
    <KeyboardAvoidingView
        style={styles.bottom} 
    >
        <TextInput
            value={task} 
            onChangeText={(text) => setTask(text)}
            style={styles.input} placeholder='Enter' 
        />
        <TouchableOpacity
            onPress={handleAddTask}
        >
            <View style={styles.bottomRight}>
                <Text style={styles.iconAdd}>+</Text>
            </View>
        </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default Form
