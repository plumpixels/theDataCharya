import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar, Footer, Signup } from "./index"

const AppRouter = () => {
  return (
    <Router>
      <div className="font-Poppins bg-Solitude">
        <Navbar />
        <Route path="/signup" component={Signup} />
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;