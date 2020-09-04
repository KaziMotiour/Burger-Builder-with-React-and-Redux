import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

function App() {

  
  return (
    <div>
      <Router>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
