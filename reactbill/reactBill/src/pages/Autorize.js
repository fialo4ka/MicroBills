import React, { useEffect, useState } from 'react';
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
  const [dataLoading, finishLoading] = useState(true);
  const [dateExpired, setData] = useState([]);

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

  useEffect(() => {
    if (response?.type === 'success') {
      setToken(response.authentication.accessToken);
      let nowDate = new Date();
      setData(new Date(Date.now() + response.params.expires_in*1000));
      console.log("response = ");
      console.log(response);
      }
  }, [response]);

  return (
    <View style={styles.container}>
            <View style={styles.card}>
                <ScrollView>
                    <Text style={styles.h1}>Autorize</Text>
                    <View>
                            <TouchableOpacity
                                style={styles.box}
                                onPress={ () => promptAsync()} >
                                    <Icon name="clock-o" size={30} style={ styles.footerText }/>
                            </TouchableOpacity>                           
                    </View>
                    {(request && response  != null) ?
                        (<View>
                          
                            <Text style={styles.h2}>AccessToken</Text>
                            <Text>Expires in</Text>
                            <Text>{dateExpired.toString()} ({response.params.expires_in})</Text>
                            <Text>Token: </Text>
                            <Text>{response.params.access_token}</Text>
                        </View>
                    ):(
                      <View></View>
                    )}
                </ScrollView>
            </View>
        </View>
  );
}
