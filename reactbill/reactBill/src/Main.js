import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { styles } from './Styles'

export default function Main({navigation}){
    const [dataLoading, finishLoading] = useState(true);
    const [newsData,setData] = useState([]);

    useEffect(() => {
        fetch('https://petstore.swagger.io/v2/pet/5')
            .then((responce) => responce.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => finishLoading(false));
    },[]);

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.containerText}>
                    {dataLoading ? <ActivityIndicator/> : (
                    <Text>{newsData.id}</Text>)}
                </View>
                <View style={styles.containerButton}>
                    <View
                        style={[styles.box, { backgroundColor: "powderblue" }]}
                    />
                    <View
                        style={[styles.box, { backgroundColor: "skyblue" }]}
                    />
                    <View
                        style={[styles.box, { backgroundColor: "steelblue" }]}
                    />
                    <View
                        style={[styles.box, { backgroundColor: "powderblue" }]}
                    />
                    <View
                        style={[styles.box, { backgroundColor: "skyblue" }]}
                    />
                    <View
                        style={[styles.box, { backgroundColor: "steelblue" }]}
                    />
                </View>
            </View>
         </View>
    );
}
