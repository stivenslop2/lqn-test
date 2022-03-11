import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const baseUrl = process.env.REACT_APP_API_SERVICE

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: baseUrl
  })
})


const redTheme = createTheme({
  palette: {
    primary: {
      main: '#ffb50e',
    },
    secondary: {
      main: '#f44336',
    },
  }
})

ReactDOM.render(
  <React.Fragment>
    <ApolloProvider client={client}>
      <ThemeProvider theme={redTheme}>
          <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.Fragment>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

