import Nav from '../Components/Nav/Nav';
import About from '../Pages/About/About';
import Shop from '../Pages/Shop/Shop';
import Search from '../Components/Search/Search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          <Route path="/" component={Search}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
