import { StyleSheet } from "react-native";
import color from "../../contains/color";

const styles = StyleSheet.create({   
    item: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginBottom: 15,
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
  
    squareBlue: {
        width: 50,
        height: 50,
        borderRadius: 10,
        backgroundColor: color.second,
        alignItems: 'center',
        justifyContent: 'center'
    },
  
  
    number: {
        color: 'white',
        fontWeight: '600'
    },

    even: {
        backgroundColor: color.green,
    },

    odd: {
        backgroundColor:color.blue,
    },
  
    content: {
        width: '80%',
    },
})

export default styles