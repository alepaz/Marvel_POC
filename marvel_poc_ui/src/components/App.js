import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CharacterPage from "./CharacterPage";
import ComicPage from "./ComicPage";
import Footer from "./Footer";
import Header from "./Header";
import NotFoundPage from "./NotFoundPage";
import StoryPage from "./StoryPage";

function App() {
  return (
    <div className="container">
      <Router>
        <React.Fragment>
          <Header />
          <Switch>
            <Route path="/comics" component={ComicPage} />
            <Route path="/stories" component={StoryPage} />
            <Route path="/" exact component={CharacterPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
