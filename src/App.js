import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Tools from "./pages/Tools";
import Todo from "./pages/Todo";
import ExpenseTracker from "./pages/ExpenseTracker";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/" exact>
            <Navbar />
            <Header />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Signup">
            <Signup />
          </Route>
          <Route path="/Tools">
            <Tools />
          </Route>
          <Route path="/Todo">
            <Todo />
          </Route>
          <Route path="/Expense-Tracker">
            <ExpenseTracker />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
