import React from 'react';
import './App.css';
import {Switch, Route} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import {Container} from "@material-ui/core";
import Header from "./components/Header";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Header/>
                    <Container maxWidth="sm">
                    </Container>
                </Switch>
            </Router>
        </>
    );
}

export default App;
