import React from 'react';

import {Homepage,Archive,Create} from "./pages"
import {BrowserRouter as Router , Switch, Route} from "react-router-dom"
import {Header} from "./commons"


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          
          <Route path="/create" component={Create} />

          <Route exact path="/archive" component={Archive} />
          <Route exact path="/note/:id" component={SingleNote} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
