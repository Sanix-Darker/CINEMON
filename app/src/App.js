import HomePage from './containers/HomePage/'

import SessionPage from './containers/SessionPage/'
import Bottom from './components/Bottom/'
import {Route, BrowserRouter as Router} from 'react-router-dom'


const App = () => {

  return (
    <div className="App">
        <Router>
          <Route exact path="/" component={HomePage} />
          <Route path="/new" component={SessionPage} />
          <Route path="/demo" component={HomePage} />
          <Bottom />
        </Router>
    </div>
  );
}

export default App;
