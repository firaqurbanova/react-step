import React from 'react';

import {Homepage,Archive,Create} from "./pages"
import {BrowserRouter as Router , Switch, Route} from "react-router-dom"
import {Header} from "./commons"
import {SingleNote}from "./pages"


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/archive" component={Archive} />
          <Route path="/create" component={Create} />
<<<<<<< HEAD
=======
          
          
          
<<<<<<< HEAD
          <Route exact path="/archive" component={Archive} />
          <Route exact path="/note/:id" component={SingleNote} />
=======
>>>>>>> 66a44a42ab8ab62026bc37f30dffc21f6ffeb9a5
          
>>>>>>> c0b53791485c197bc18ebb7b890d3ab8c0d7e02f
        </Switch>
      </Router>
    </div>
  );
}

export default App;
