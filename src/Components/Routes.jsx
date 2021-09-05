import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import HomePage from "./HomePage";
import SignIn from "./SignIn";
import Profile from "./Profile";

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/sign-in">
                    <SignIn />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;