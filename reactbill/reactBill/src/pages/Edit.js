import React from 'react';
import { Text, View, ScrollView } from "react-native";
import { styles } from '../theme/Styles'

export default function Edit(){
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <ScrollView>
                    <Text style={styles.h1}>Edit</Text>
                </ScrollView>
            </View>
        </View>
    );
}