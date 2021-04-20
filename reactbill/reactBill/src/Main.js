import React from 'react';
import { Text, View } from "react-native";
import { styles } from './Styles'

export default function Main(){
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View >
                    <Text style={ styles.h1 }>Micro bill home page</Text>
                </View>
                <Text style={styles.darkText}>Micro bill home page</Text>
            </View>
         </View>
    );
}
