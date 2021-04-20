import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from '../theme/Styles'

export default function Header(props){
    return(
        <View style={styles.header}>
            <View>
                <Text style={styles.h1Light}>
                    {props.headerDisplay}
                </Text>
            </View>
        </View>

    );
}
