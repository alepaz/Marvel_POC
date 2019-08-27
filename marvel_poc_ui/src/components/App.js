import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharacterPage from '../containers/CharacterPage';
import ComicPage from '../containers/ComicPage';
import Footer from './Footer';
import Header from './Header';
import NotFoundPage from './NotFoundPage';
import StoryPage from '../containers/StoryPage';

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
