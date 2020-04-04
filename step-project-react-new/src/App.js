import React from 'react';

import {Homepage,Archive} from "./pages"
import {BrowserRouter as Router , Switch, Route} from "react-router-dom"
import {Header} from "./commons"


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          
          

          <Route exact path="/archive" component={Archive} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
