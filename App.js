import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import  Task  from './components/Task';
import Form from './components/Form';

export default function App() {
    const [taskList, setTaskList] = useState([])
  
    const handleAddTask = (task) => {
      setTaskList([...taskList, task]);
    }
  
    return (
      <View style={styles.container}>
          <View style={styles.body}>
              <Text style={styles.textTitle}>To do List</Text>
              <ScrollView style={styles.items}>
                  {
                    taskList.map((task, index) =>{
                      return <Task key={index} title={task} number={index + 1} />
                    })
                  }
              </ScrollView>
          </View>
          <Form onAddTask={handleAddTask} />
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  body: {
    padding: '16px',
  },

  textTitle: {
    fontSize: '22px',
    color: 'blue'
  },
});

// export default FoodList;





