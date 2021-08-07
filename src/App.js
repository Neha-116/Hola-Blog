import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  //const handleClick = () =>{

  //} 

  //const title = "Welcom to the new blog";
  //const likes = 10;
  //const person = {name:'Neha',age:21};
  //const link = "https://www.google.com";

  return (
    <Router>
    <div className="App">
    <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        {/*<button onClick={handleClick}>Click me!</button>*/}

        {/*<h1>{ title }</h1>
        <p>Liked { likes } times</p>
        //<p>{ person }</p>
        <p>{10}</p>
        <p>{"hello"}</p>
        <p>{ [1,2,3,4,5]}</p>
        <a href={link}>Google Site</a>*/}


      </div>
    </div>
    </Router>
  );
}

export default App;
