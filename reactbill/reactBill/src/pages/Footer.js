import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import * as RootNavigation from '../helpers/RoadNavigation';
import { styles } from '../theme/Styles'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Footer(props){
    return(
        <View style={styles.footer}>           
            <TouchableOpacity
                style={props.headerDisplay == 'home' ? styles.footerAktivButton : styles.footerButton}
                onPress={() => RootNavigation.navigate('MainScreen')}>
                <Icon name="home" size={40} style={props.headerDisplay == 'home' ? styles.footerActivText : styles.footerText}/>
            </TouchableOpacity>
            <TouchableOpacity
                style={props.headerDisplay == 'add' ? styles.footerAktivButton : styles.footerButton}
                onPress={() => RootNavigation.navigate('Edit')}>
                <Icon name="plus" size={40} style={props.headerDisplay == 'add' ? styles.footerActivText : styles.footerText}/>
            </TouchableOpacity>  
            <TouchableOpacity
                style={props.headerDisplay == 'set' ? styles.footerAktivButton : styles.footerButton}
                onPress={() => RootNavigation.navigate('Autorize')}>
                <Icon name="cogs" size={40} style={props.headerDisplay == 'set' ? styles.footerActivText : styles.footerText}/>
            </TouchableOpacity>         
            <TouchableOpacity
                style={props.headerDisplay == 'info' ? styles.footerAktivButton : styles.footerButton}
                onPress={() => RootNavigation.navigate('About')}>
                <Icon name="info" size={40} style={props.headerDisplay == 'info' ? styles.footerActivText : styles.footerText}/>
            </TouchableOpacity>
        </View>
    );
}

