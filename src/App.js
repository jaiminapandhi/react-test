import React, { lazy, Suspense } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './services/Redux';


const Login = lazy(() => import('./pages/Login'));


// const AddGroup = lazy(() => import('./pages/AddGroup'));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Suspense fallback="">
            <Route exact path="/" component={Login} />
            
          </Suspense>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
