import React, { useEffect, useState, Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, TouchableOpacity } from "react-native";
import { styles } from '../theme/Styles'

import fetchWrapper from '../helpers/fetchWrapper';
import List from './List';

export default function Main({navigation}) {
    const [dataLoading, finishLoading] = useState(true);
    const [listData, setData] = useState([]);

    const handlerDelete = (url) => {
        finishLoading(true);
        let fhgf = fetchWrapper.getDataFromApi(url)
            .then((value) => {
                setData(value); 
                finishLoading(false);
            });
    };

    useEffect(() => {
        handlerDelete('bills?year=2021&month=3');
    },[]); 

    const someData = [
        {
          user_id: 2,
          category_id: 8,
          amount: 125,
          date: "2021-03-31",
          date_update: null
        },
        {
          user_id: 1,
          category_id: 8,
          amount: 283.04,
          date: "2021-03-31",
          date_update: null
        }
      ];

    
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.containerText}>
                    {dataLoading ? <ActivityIndicator/> : (
                    <List state={someData}></List>)}
                </View>
                <View style={styles.containerButton}>
                    <TouchableOpacity
                        style={[styles.box, { backgroundColor: "powderblue" }]}
                        onPress={ () => handlerDelete("2")}
                    />
                    <TouchableOpacity
                        style={[styles.box, { backgroundColor: "skyblue" }]}
                        onPress={ () => handlerDelete("3")}
                    />
                    <TouchableOpacity
                        style={[styles.box, { backgroundColor: "steelblue" }]}
                        onPress={ () => handlerDelete("4")}
                    />
                    <TouchableOpacity
                        style={[styles.box, { backgroundColor: "powderblue" }]}
                        onPress={ () => handlerDelete("5")}
                    />
                    <TouchableOpacity
                        style={[styles.box, { backgroundColor: "skyblue" }]}
                        onPress={ () => handlerDelete("6")}
                    />
                    <TouchableOpacity
                        style={[styles.box, { backgroundColor: "steelblue" }]}
                        onPress={ () => handlerDelete("hgh")}
                    />
                </View>
            </View>
         </View>
    );
}
