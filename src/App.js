import './scss/partials/main.css';
import {categories} from "./components/news/Categories";
import {Route} from "react-router-dom";
import NewsPage from "./components/pages/NewsPage";
import uniqid from "uniqid";
import Navbar from "./components/header/Navbar";
import SignupPage from "./components/pages/SignupPage";
import HomePage from "./components/pages/HomePage";

function App() {
    return (
      <div className="App">
          <Navbar/>
          <Route exact path="/"
                 key={uniqid()}
                 render={() =>
                     (<HomePage/>)}/>
          {
              categories.map(category =>
                  (
                      <Route path={`/${category}`}
                             key={uniqid()}
                             render={() =>
                                 (<NewsPage query={category}/>)}/>)
                  )
          }
          <Route path="/signup"
                 key={uniqid()}
                 component={SignupPage}/>
      </div>
  );
}

export default App;
