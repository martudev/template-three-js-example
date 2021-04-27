import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

export default function Rooter() {
    return (
        <Router>
            <Switch>
            <Route path="*">
                <div>Hello World!</div>
            </Route>
            </Switch>
        </Router>
    );
}