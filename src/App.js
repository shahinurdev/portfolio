import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './app.css';
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <Router>
    <div className="mainApp">
     <NavBar/>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route  path="/skills" component={Skills} />
    <Route  path="/contact" component={Contact} />
    <Route  path="/projects" component={Projects} />
    <Route  path="/blogs" component={Blogs} />
    <Route exact path="*" component={Home} />
    </Switch>
    <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
