import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Header from './Header';
import Footer from './Footer';

import List from './Complexes/List';
import Show from './Complexes/Show';

import './index.css';

const App = () => (
  <Router>
    <div>
      <Helmet>
        <title>Compass Development</title>
      </Helmet>
      <Header />
      <Route exact path="/" component={List} />
      <Route path="/complexes/show" component={Show} />
      <Footer />
    </div>
  </Router>
);

export default App;
