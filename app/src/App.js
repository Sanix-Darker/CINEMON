import Home from './components/Home'
import Bottom from './components/Bottom'
import {Route, BrowserRouter as Router} from 'react-router-dom'

const App = () => {

  return (
    <div>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/new" component={Home} />
        <Route path="/demo" component={Home} />
      </Router>
      <Bottom />
    </div>
  );
}

export default App;
