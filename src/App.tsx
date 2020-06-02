import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
const Login = React.lazy(() => import('./components/Login/Login'));

const loading = () => <div>Loading...</div>;
function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>

      <Suspense fallback={loading()}>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
