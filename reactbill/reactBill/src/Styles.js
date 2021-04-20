import React from 'react';
import { StyleSheet} from 'react-native';
import variables from './CommonColor';


const footerTextConstatn = {
    height: 40,
    width : 40,
};
const footerButtonConstatn = {
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    paddingVertical: 6,
    flexDirection: 'row',
    margin: 10,
    padding: 10,
}

export const styles = StyleSheet.create({
    h1Light:{
        fontSize: 20,
        color: variables.white,
    },
    h1:{
        fontSize: 20,
        fontWeight: 'bold',
        color: variables.mainMiddleColor,
    },
    footer:{
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: variables.mainLightMiddleColor,
    },
    footerText: {
        color: variables.white,
        ...footerTextConstatn,
    },
    footerActivText: {
        color: variables.mainLightMiddleColor,
        ...footerTextConstatn,
    },    
    footerButton: {
        ...footerButtonConstatn,
        backgroundColor: variables.mainLightMiddleColor,
    },
    footerAktivButton: {
        ...footerButtonConstatn,
        backgroundColor: variables.whiteColor,
    },


    lightText:{
        color: variables.mainLightColor,
    },
    darkText:{
        color: variables.mainDarkColor,
    },
    header:{
        width: '100%',
        height: 35,
        alignItems: 'center',
        backgroundColor: variables.mainLightMiddleColor,
    },

    container:{
        flex : 1,
        backgroundColor: variables.mainLightColor,
        alignItems: 'center',
    },
    card: {
        backgroundColor: variables.whiteColor,
        padding: 20,
        marginVertical: 5,
        marginHorizontal: 2,
        borderWidth: 1,
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        borderColor: variables.mainLightMiddleColor,
        flexWrap: 'nowrap',
        backgroundColor: variables.whiteColor,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        elevation: 3,
        width: '100%',
        height: '93%',
    }
});

