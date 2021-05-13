import { StyleSheet} from 'react-native';
import variables from './CommonColor';


const iconSize = 60;
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
    margin: 5,
    marginTop: 10,
    marginLeft: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 32,
};

export const styles = StyleSheet.create({
    h1Light:{
        fontSize: 20,
        color: variables.white,
    },
    h1:{
        fontSize: 24,
        fontWeight: 'bold',
        color: variables.mainMiddleColor,
    },    
    h2:{
        fontSize: 17,
        color: variables.mainMiddleColor,
    },
    footer:{
        width: '100%',
        height: 70,
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
        height: '100%',
        backgroundColor: variables.mainLightColor,
        alignItems: 'center',
    },
    card: {
        backgroundColor: variables.whiteColor,
        padding: 20,
        paddingRight: 0,
        marginVertical: 5,
        marginHorizontal: 2,
        borderWidth: 1,
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        borderColor: variables.mainLightMiddleColor,
        flexWrap: 'nowrap',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        elevation: 3,
        width: '100%',
        height: '94%',
        flexDirection: 'row',
        direction: 'rtl',
        justifyContent: 'flex-start',
    },
    box: {
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'flex-start',
        flexDirection: 'row',
        width: '100%',
        height: 70,
        margin: 3,
        padding: 5,
        paddingLeft: 10,
        color: variables.mainDarkMiddleColor,
        borderWidth: 1,
        borderTopLeftRadius: 32,
        borderBottomLeftRadius: 32,
        borderColor: variables.mainLightColor,
        backgroundColor: variables.mainLightColor,
    },
    containerText: {
        flexDirection: 'column',
        flex: 6,
        justifyContent: 'flex-start',
        padding: 8,   
    },
    containerButton: {
        flexDirection: 'column',
        direction: 'rtl',
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'transparent',
    },    
});

