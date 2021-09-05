import {
  Router,
  Route,
  Switch
} from "react-router-dom";
import HomePage from "./HomePage";
import SignIn from "./SignIn";
import Auth from "./Auth";
import UserProfile from "./UserProfile";
import EditProfile from "./EditProfile";
import { createBrowserHistory } from 'history';

function Routes() {
    const history = createBrowserHistory();
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/sign-in">
                    <SignIn />
                </Route>
                <Route path="/auth">
                    <Auth />
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