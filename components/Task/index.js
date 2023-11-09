import React from 'react'
import { View ,Text, TouchableOpacity} from 'react-native'

import styles from './style';

function Task(props) {
  const {number} = props;
  const numberText = number < 10 ? `0${number}` : number;
  const itemBg = number % 2 === 0 ? styles.even : styles.odd;

  return (
    <>
        <TouchableOpacity>
          <View style={styles.wrapper}>
            <View style={styles.item}>
                <View style={[styles.squareBlue, itemBg]}>
                    <Text style={styles.number}>{props.number}</Text>
                </View>
                <Text style={styles.content}>{props.title}</Text>
            </View>
          </View>
        </TouchableOpacity>
    </>
  )
}

export default Task;
