import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import * as RootNavigation from '../helpers/RoadNavigation';
import { styles } from '../theme/Styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCogs, faHome, faPlus, faInfo } from '@fortawesome/free-solid-svg-icons'


export default function Footer(props){
    return(
        <View style={styles.footer}>           
            <TouchableOpacity
                style={props.headerDisplay == 'home' ? styles.footerAktivButton : styles.footerButton}
                onPress={() => RootNavigation.navigate('MainScreen')}>
                <FontAwesomeIcon  size={ 28 }  style={props.headerDisplay == 'home' ? styles.footerActivText : styles.footerText} icon={ faHome } />
            </TouchableOpacity>
            <TouchableOpacity
                style={props.headerDisplay == 'add' ? styles.footerAktivButton : styles.footerButton}
                onPress={() => RootNavigation.navigate('Edit')}>
                <FontAwesomeIcon size={ 28 }   style={props.headerDisplay == 'add' ? styles.footerActivText : styles.footerText} icon={ faPlus } />
            </TouchableOpacity>  
            <TouchableOpacity
                style={props.headerDisplay == 'set' ? styles.footerAktivButton : styles.footerButton}
                onPress={() => RootNavigation.navigate('Settings')}>
                <FontAwesomeIcon size={ 28 }  style={props.headerDisplay == 'set' ? styles.footerActivText : styles.footerText} icon={ faCogs } />
            </TouchableOpacity>         
            <TouchableOpacity
                style={props.headerDisplay == 'info' ? styles.footerAktivButton : styles.footerButton}
                onPress={() => RootNavigation.navigate('About')}>
                <FontAwesomeIcon size={ 28 } style={props.headerDisplay == 'info' ? styles.footerActivText : styles.footerText} icon={ faInfo } />
            </TouchableOpacity>
        </View>
    );
}

