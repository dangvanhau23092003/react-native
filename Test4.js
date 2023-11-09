import React, { useEffect, useState } from 'react'
import { View,Text, StyleSheet,Image, Dimensions } from 'react-native'
import { AntDesign , FontAwesome} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const {width, height} = Dimensions.get('screen')
function Test4() {
    const [number, setNumber] = useState(60)
    const [action, setAction] = useState(false)

    useEffect(() => {
        let inteval;

        if(action) {
            inteval = setInterval(() => {
                setNumber(prve => prve - 1)
            },1000)
        }
        return () => {
            clearInterval(inteval)
        }
    },[number, action])

    const handlePlay = () => {
        setAction(true)
    }

    const handlePause = () => {
        setAction(false)
    }

    const handleRefresh = () => {
        setNumber(60)
        setAction(false)
    }

    return (
        <View style={styles.container}>
            <img style={styles.imgBackground} src={'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/04/hinh-nen-3d-10.jpg' } />
            <View style={styles.viewBody}>
                <Text style={styles.textView} >{number}</Text>
                <View style={styles.viewButton}>
                    <TouchableOpacity onPress={handlePlay} style={styles.button}>
                        <AntDesign name="play" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handlePause} style={styles.button}>
                        <AntDesign name="pausecircle" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleRefresh} style={styles.button}>
                        <FontAwesome name="refresh" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Test4

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },

    viewBody: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    textView: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 50,
        bottom:20,
    },
    
    imgBackground: {
        width: width,
        height: height,
        position: 'absolute',
    },

    button: {
        width:80,
        height:80,
        borderRadius:100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    },

    viewButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30,
    }

})
