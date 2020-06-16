import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Spinner from './components/spinner/spinner';

import Home from './components/home/Home';
import Location from './components/location/Location';

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/location" component={Location} />
      </Router>
    </Suspense>
  );
};

export default App;
