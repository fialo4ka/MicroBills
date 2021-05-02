import React, { useState, useCallback, useMemo } from 'react';
import { UIManager, Alert } from 'react-native';
import { authorize, refresh } from 'react-native-app-auth';
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { styles } from '../theme/Styles'
import Icon from 'react-native-vector-icons/FontAwesome'


const configs = {
  identityserver: {
    issuer: 'https://oauth2.o-g.at',
    clientId: 'reactbill',
    redirectUrl: 'info.fialo4ka.reactbill:/oauthredirect',
    additionalParameters: {},
    scopes: ['openid', 'microbill'],
    serviceConfiguration: {
        authorizationEndpoint: 'https://oauth2.o-g.at/oauth2/auth',
        tokenEndpoint: 'https://oauth2.o-g.at/oauth2/token',
        revocationEndpoint: 'https://oauth2.o-g.at/oauth2/revoke'
    }
  }
};

const defaultAuthState = {
  hasLoggedInOnce: false,
  provider: '',
  accessToken: '',
  accessTokenExpirationDate: '',
  refreshToken: ''
};

export default function Autorize({navigation}) {
    const [authState, setAuthState] = useState(defaultAuthState);
    const handleAuthorize = useCallback(
        async provider => {
          try {
            const config = configs[provider];
            const newAuthState = await authorize(config);
            console.log(newAuthState);
            setAuthState({
              hasLoggedInOnce: true,
              provider: provider,
              ...newAuthState
            });
          } catch (error) {
            console.log(error.message);
            Alert.alert('Failed to log in', error.message);
          }
        },
        [authState]
      );

    const handleRefresh = useCallback(async () => {
        try {
          const config = configs[authState.provider];
          const newAuthState = await refresh(config, {
            refreshToken: authState.refreshToken
          });
    
          setAuthState(current => ({
            ...current,
            ...newAuthState,
            refreshToken: newAuthState.refreshToken || current.refreshToken
          }))
    
        } catch (error) {
          Alert.alert('Failed to refresh token', error.message);
        }
      }, [authState]);

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <ScrollView>
                    <Text style={styles.h1}>Autorize</Text>
                    {!!authState.accessToken ? (
                        <View>
                            <Text>accessToken</Text>
                            <Text>{authState.accessToken}</Text>
                            <Text>accessTokenExpirationDate</Text>
                            <Text>{authState.accessTokenExpirationDate}</Text>
                            <Text>refreshToken</Text>
                            <Text>{authState.refreshToken}</Text>
                            <Text>scopes</Text>
                            <Text>{authState.scopes.join(', ')}</Text>
                        </View>
                    ) : (
                        <View>
                                <TouchableOpacity
                                    style={styles.box}
                                    onPress={ () => handleAuthorize('identityserver')} >
                                        <Icon name="clock-o" size={30} style={ styles.footerText }/>
                                </TouchableOpacity>                           
                        </View>

                    
                    )}
                </ScrollView>
            </View>
        </View>
    )
}