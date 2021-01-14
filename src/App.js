import { Container, Grid } from '@material-ui/core';
import React from 'react'

import './App.css';
import Profile from './componnents/Profile/Profile';
import Header from './componnents/Header/Header'
import Footer from './componnents/Footer/Footer'
import Resume from './pages/Resume/Resume'
import Portfolio from './pages/Portfolio/Portfolio'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Container className="top_60">
      <Grid container spacing={7} >
        <Grid item xs={12} sm={12} md={4} lg={3} >
          <Profile />
        </Grid>
        <Grid item xs >
          <Router>
            <Header />

            <div className="main-content container_shadow">
              <Switch>

                <Route path="/portfolio">
                  <Portfolio />
                </Route>
                <Route path="/">
                  <Resume />
                </Route>
              </Switch>

            
            </div>

          </Router>


          <Footer />
        </Grid>
      </Grid>
    </Container >
  );
}

export default App;
