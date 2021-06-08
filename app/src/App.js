import HomePage from './containers/HomePage/'
import RoomListPage from './containers/RoomListPage/'

import Header from './components/Header/'
import Bottom from './components/Bottom/'
import {Route, BrowserRouter as Router} from 'react-router-dom'


const App = () => {

  return (
    <div className="App">
        <Router>
          <Header />
          <Route exact path="/" component={HomePage} />
          <Route path="/rooms" component={RoomListPage} />
          <Route path="/new" component={HomePage} />
          <Route path="/demo" component={HomePage} />
          <Bottom />
        </Router>
    </div>
  );
}

export default App;
