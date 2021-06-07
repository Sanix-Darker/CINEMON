import HomePage from './containers/HomePage/'
import Bottom from './components/Bottom'
import {Route, BrowserRouter as Router} from 'react-router-dom'

const App = () => {

  return (
    <div>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/new" component={HomePage} />
        <Route path="/demo" component={HomePage} />
      </Router>
      <Bottom />
    </div>
  );
}

export default App;
