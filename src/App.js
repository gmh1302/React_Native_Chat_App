import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './theme';
import Navigation from './navigations';

const App = () => {
    return <ThemeProvider theme={theme}>
    </ThemeProvider>
}

export default App;