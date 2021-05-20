import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/poppins';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={extendTheme({ fonts: { heading: 'Poppins' } })}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,

  document.getElementById('root')
);
