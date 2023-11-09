import React from 'react'
import {StyleSheet, View, Text } from 'react-native'

function Test2() {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.text}>Top</Text>
            </View>
            <View style={styles.bottom}>
                <View style={styles.bottomLeft}>
                    <Text style={styles.text}>bottom left</Text>
                </View>
                <View style={styles.bottomRight}>
                    <View style={styles.childrenTop}>
                        <Text style={[styles.text, styles.textBottom]}>childrenTop</Text>
                    </View>
                    <View style={styles.childrenBottom}>
                        <Text style={[styles.text, styles.textBottom]}>childrenBottom</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Test2

const styles = StyleSheet.create({
    container: { 
        flex: 1,
    },

    top: { 
        flex: 1,
        backgroundColor:'red',
        justifyContent: 'center',
        alignContent: 'center',
    },
    
    text : {
        fontWeight:'700',
        textAlign:'center',
        color:'white',
        fontSize: '20px'
    },

    textBottom: {
        color:'blue',
    },

    bottom: {
        flex: 1,
        flexDirection: 'row',
    },

    bottomLeft: {
        flex: 1,
        backgroundColor:'orange',
        justifyContent: 'center',
        alignContent: 'center',
    },

    bottomRight: {
        flex: 1,
        backgroundColor: 'yellow'
    },

    childrenTop:{
        flex: 2,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignContent: 'center',
    },

    childrenBottom:{
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignContent: 'center',
    }

})