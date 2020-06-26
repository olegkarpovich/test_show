import React from 'react';
import './App.scss';
import Show from './pages/show';
import NotFound from './pages/notFound';
import Episode from './pages/episode';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
        <div>
            <Header />
            <hr />
            <Switch>
                <Route exact path="/" component={Show} />
                <Route path="/season/:seasonId/episode/:episodeId" component={Episode} />
                <Route component={NotFound} />
            </Switch>
            <hr />
            <Footer />
        </div>
    </Router>
  );
}

export default App;
