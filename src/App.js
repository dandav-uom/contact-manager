import React from "react";
import { Component } from "react";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import "bootstrap/dist/css/bootstrap.min.css/";
import { Provider } from "./Context";
import AddContact from "./components/contacts/AddContact";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import EditContact from "./components/contacts/EditContact";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
