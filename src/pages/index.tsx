import {
    BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import { router, RouterType } from '../route/routers';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    {
                        router.map((r: RouterType) => {
                            return (
                                <Route
                                    key={r.path}
                                    exact={r.exact}
                                    component={r.component}
                                />
                            );
                        })
                    }
                </Switch>
            </Router>
        </div>
    );
}

export default App;
