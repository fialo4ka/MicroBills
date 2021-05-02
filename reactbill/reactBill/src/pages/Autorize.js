import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest, ResponseType } from 'expo-auth-session';
import { Text, View, ScrollView, TouchableOpacity, Button} from 'react-native';
import { styles } from '../theme/Styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import secret  from '../helpers/secret'
import {setToken} from '../helpers/fetchWrapper';

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: 'https://oauth2.o-g.at/oauth2/auth',
  tokenEndpoint: 'https://oauth2.o-g.at/oauth2/token',
  revocationEndpoint: 'https://oauth2.o-g.at/oauth2/revoke/reactbill',
};

export default function Autorize({navigation}) {
  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: 'reactbill',
      clientSecret: secret.getSecret,
      scopes: ['openid', 'microbill'],
      redirectUri: makeRedirectUri({
        scheme: 'info.fialo4ka.reactbill:/oauthredirect'
      }),
    },
    discovery
  );

  React.useEffect(() => {
    console.log("request = ");
    console.log(request);
    if (response?.type === 'success') {
      setToken(response.authentication.accessToken);
      console.log("response = ");
      console.log(response);
      }
  }, [response]);

  return (
    <View style={styles.container}>
            <View style={styles.card}>
                <ScrollView>
                    <Text style={styles.h1}>Autorize</Text>
                    { request && response  != null ? (
                        <View>
                          
                            <Text>accessToken</Text>
                            <Text>{response.params.code}</Text>
                            <Text>accessTokenExpirationDate</Text>
                            <Text>{response.params.accessTokenExpirationDate}</Text>
                            <Text>refreshToken</Text>
                            <Text>{response.params.refreshToken}</Text>
                        </View>
                    ) : (
                        <View>
                                <TouchableOpacity
                                    style={styles.box}
                                    onPress={ () => promptAsync()} >
                                        <Icon name="clock-o" size={30} style={ styles.footerText }/>
                                </TouchableOpacity>                           
                        </View>
                    )}
                </ScrollView>
            </View>
        </View>
  );
}
