import React from 'react';
import { ScrollView, Text, View } from "react-native";
import { styles } from './Styles'

export default function AppSettings(){
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <ScrollView>
                    <Text style={styles.h1}>AppSettings</Text>
                </ScrollView>
            </View>
        </View>
    );
}