import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles/';
import { Container } from '@material-ui/core/';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                    <NavBar/>
                    <br/><br/><br/>
                    <Container maxWidth="lg">
                        <Search/>
                    </Container>
            </MuiThemeProvider>
         );
    }
}

export default App;