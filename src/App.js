import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles/';
import Container from '@material-ui/core/Container';
// import { createMuiTheme } from '@material-ui/core/styles/';
// import blue from '@material-ui/core/colors/blue'
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';

// const theme = createMuiTheme({
//     palette: {
//       primary: blue
//     }
//   });

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
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