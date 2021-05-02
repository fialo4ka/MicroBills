import React, { useEffect, useState, Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, TouchableOpacity } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome'

import { styles } from '../theme/Styles'
import {getDataFromApi} from '../helpers/fetchWrapper';
import List from './List';

export default function Main({navigation}) {
    const [dataLoading, finishLoading] = useState(true);
    const [listData, setData] = useState([]);

    const dataHandler = (url) => {
        finishLoading(true);
        let fhgf = getDataFromApi(url)
            .then((value) => {
                setData(value); 
                console.log(value);
                finishLoading(false);
            });
    };

    let nowDate = new Date();

    useEffect(() => {      
        dataHandler(`bills?year=${nowDate.getFullYear()}&month=${nowDate.getMonth()}`);
    },[]); 

        
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.containerText}>
                    {dataLoading ? <ActivityIndicator/> : (
                    <List state={listData}></List>)}
                </View>
                <View style={styles.containerButton}>
                    <TouchableOpacity
                        style={styles.box}
                        onPress={ () => dataHandler(`bills?year=${nowDate.getFullYear()}&month=${nowDate.getMonth()}`)}
                    >
                        <Icon name="clock-o" size={30} style={ styles.footerText }/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.box}
                        onPress={ () => dataHandler("3")}
                    >
                        <Icon name="group" size={30} style={ styles.footerText }/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={ styles.box }
                        onPress={ () => dataHandler("hgh")}
                    >
                        <Icon name="filter" size={30} style={ styles.footerText }/>
                    </TouchableOpacity>
                </View>
            </View>
         </View>
    );
}
