import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from "@material-ui/core/styles/";
import { Card, CardContent } from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import { Route } from 'react-router-dom';
import purple from '@material-ui/core/colors/purple';
import FirebaseService from '../services/FirebaseService'
import { TopBar } from './Topbar'
import { DataTable } from './DataTable'
import { Welcome } from './Welcome'
import { urls, privateUrls } from '../utils/urlUtils'
import Add from './Add'

const theme = createMuiTheme({
    palette: {
        primary: purple,
    },
});

class App extends Component {

    state = {
        data: []
    };

    componentDidMount() {
        FirebaseService.getDataList('leituras', (dataReceived) => this.setState({ data: dataReceived }))
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <TopBar />
                    <Card style={{ margin: '50px' }}>
                        <CardContent>
                            <Route exact
                                path={urls.home.path}
                                render={(props) => <Welcome {...props} />}
                            />

                            <Route exact
                                path={urls.data.path}
                                render={(props) =>
                                    <DataTable {...props} data={this.state.data} />}
                            />

                            <Route exact
                                path={urls.add.path}
                                render={(props) =>
                                    <Add {...props} />}
                            />

                            <Route exact
                                path={privateUrls.edit.path}
                                render={(props) => <Add {...props} />}
                            />
                        </CardContent>
                    </Card>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default App;