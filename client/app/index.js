import React from 'react';
import { render } from 'react-dom';
import App from './components/Home/App';
import './styles/styles.scss';
import { AuthProvider } from "react-use-auth";

render(
  // <React.StrictMode>
    <AuthProvider
      auth0_domain="dev-y643tmni.auth0.com"
      auth0_client_id="LgW266a3CCwfmKPaGw66AO8vmqhKNscs"
    >
      <App />
    </AuthProvider>
 
  , document.getElementById('app')

);
