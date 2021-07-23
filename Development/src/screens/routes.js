import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; // React Router Setup Component

// All Screens Main Component Import
import NotFoundPage from "./404NotFound";
import Home from "./home";
import Services from "./services";
import Contactus from "./contactus";
import Blog from "./blog";
import Portfolio from "./portfolio";

// Global Css Import
import "../css/globalStyle.css";
import SingleBlog from "./singleBlog";

/* Routing */
const Routes = (props) => {
  return (
    <Router>
      <Switch>
        {/* Public Route */}
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/:title" component={SingleBlog} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contactus" component={Contactus} />

        {/* 404 Not Found Page Route */}
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default Routes;

/* 

  Developer: Hasan
  Github: https://github.com/hasan-py
  Twitter: https://twitter.com/hasan_py
  Facebook: https://facebook.com/hasan.pyy

*/
