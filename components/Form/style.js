import { StyleSheet } from "react-native";
import color from './../../contains/color'

const styles = StyleSheet.create({ 
    bottom: {
        position: 'fixed',
        width: '100%',
        backgroundColor: '#add8e6',
        height: 70,
        bottom: 0,
        paddingHorizontal: 18,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
  
    input: {
        backgroundColor: color.white,
        width: '80%',
        height: 44,
        borderRadius: 100,
        borderColor: color.primary,
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
  
    bottomRight: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 44,
        borderWidth: 2,
        borderColor: color.background,
        height: 44,
        width:44,
        backgroundColor: color.primary,
    },
    
    iconAdd: {
        color: color.white,
        fontSize: 24,
    }
})

export default styles