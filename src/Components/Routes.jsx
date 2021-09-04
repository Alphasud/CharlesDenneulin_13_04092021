import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import HomePage from "./HomePage";
import SignIn from "./SignIn";

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
            </Switch>
        </Router>
    )
}

export default Routes;