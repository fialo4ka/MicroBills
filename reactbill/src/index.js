import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


var ClientOAuth2 = require('client-oauth2')

function getNonce(length) {
  const array = new Uint8Array(length);
  window.crypto.getRandomValues(array);
  return btoa(String.fromCharCode.apply(null, array));
}

var oauthAuth = new ClientOAuth2({
  clientId: 'reactbill',
  clientSecret: 'paJee8chaequohFai5Poh8ioB6eiboh9',
  accessTokenUri: 'https://oauth2.o-g.at/oauth2/token',
  authorizationUri: 'https://oauth2.o-g.at/oauth2/auth',
  redirectUri: 'http://localhost:3000/auth/oauth2/callback',
  scopes: ['openid', 'microbill'],
  state: getNonce(10)
})

window.oauth2Callback = function (uri) {
  oauthAuth.token.getToken(uri)
    .then(function (user) {
      console.log(user) //=> { accessToken: '...', tokenType: 'bearer', ... }

    })
}

// Open the page in a new window, then redirect back to a page that calls our global `oauth2Callback` function.
window.open(oauthAuth.token.getUri())

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
