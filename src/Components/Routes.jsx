import {
  Router,
  Route,
  Switch
} from "react-router-dom";
import HomePage from "./HomePage";
import SignIn from "./SignIn";
import UserProfile from "./UserProfile";
import EditProfile from "./EditProfile";
import history from '../history';

function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/sign-in">
                    <SignIn />
                </Route>
                <Route path="/user/:name">
                    <UserProfile />
                </Route>
                <Route path="/user/:name/edit">
                    <EditProfile />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;