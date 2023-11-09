import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

function Test1() {
  return (
    <View style={styles.container}>

      <View style={styles.containerTop}>
        <View style={styles.top}>
          <Text style={styles.text}>Status Bar</Text>
        </View>
      </View>

      <View style={styles.containerCenter}>
        <View style={styles.border}>
          <Text style={styles.text}>Hau</Text>
        </View>
      </View>

      <View style={styles.containerBottom}>
        <View style={styles.bottom}>
          <Text style={styles.text}>Bottom right</Text>
        </View>
      </View>

    </View>
  )
}

export default Test1

const styles = StyleSheet.create({
    container: {
      width:'100%', 
      flex: 1, 
    },
  
    containerTop: {
      backgroundColor:'#000',
      flex: 1,
    },
  
    containerCenter: {   
      backgroundColor:'yellow',
      alignItems: 'center',
      flex: 1,
    },
  
    containerBottom: {  
      backgroundColor:'blue', 
      flex: 1,
    },
  
    top: { 
      marginTop:80,
      marginLeft: 40,
      marginRight: 40,
      backgroundColor:'orange',
      paddingLeft: 20,
      paddingRight:20,
      paddingTop: 20,
      paddingBottom:20,
      borderWidth:2,
      borderColor: '#fff',
      borderRadius: 4,
    },
  
    border: {
      width: 150,
      height: 150,
      marginTop: 45,
      backgroundColor: '#333',
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    bottom: {
      marginTop:80,
      marginLeft: 40,
      marginRight: 40,
      backgroundColor:'orange',
      paddingLeft: 20,
      paddingRight:20,
      paddingTop: 20,
      paddingBottom:20,
      borderWidth:2,
      borderColor: '#fff',
      borderRadius: 30,
      alignItems: 'flex-end'
    },
  
    text: {
      color: 'white',
      fontWeight: '700',
      fontSize: 18
    }
    
  });