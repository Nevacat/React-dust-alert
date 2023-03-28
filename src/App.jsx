import Header from './components/Header';
import React from 'react';
import { Reset } from 'styled-reset';
import { GlobalStyled } from './style/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';
import Menu from './components/Menu';
import { Provider } from 'react-redux';
import store from './store';
import Router from './routes/routes';

function App() {
  
  return (
    <Provider store={store}>
      <Reset />
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        <Header />
        <Router />
        <Menu />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
