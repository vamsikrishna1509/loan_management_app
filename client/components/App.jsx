import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Common/Navigation';
import BorrowerDashboard from './Borrower/BorrowerDashboard';
import LenderDashboard from './Lender/LenderDashboard';
import AdminDashboard from './Admin/AdminDashboard';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/borrower" component={BorrowerDashboard} />
          <Route path="/lender" component={LenderDashboard} />
          <Route path="/admin" component={AdminDashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
