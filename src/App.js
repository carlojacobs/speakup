import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// css
import './stylesheets/App.css';

// Components
import Splash from './components/Splash';
import Body from './components/Body';
import Counter from './components/Counter';
import Message from './components/Message';
import Footer from './components/Footer';
import Share from './components/Share';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact render={(props) => {
            return(
              <div>
                <Splash {...props} />
                <Counter {...props} />
                <Message {...props} />
                <Body {...props} />
                <Footer {...props} />
              </div>
            );
          }}/>
          <Route path="/share/:name" component={Share}/>
        </div>
      </Router>
    );
  }
}

export default App;
