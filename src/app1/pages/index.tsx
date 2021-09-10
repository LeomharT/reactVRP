import { Provider } from 'react-redux';
import {
    BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import { storeHome } from '../redux/HomeStore/Home_Store';
import { router, RouterType } from '../route/routers';

function App1() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Provider store={storeHome}>
                        {router.map((r: RouterType) => {
                            return (
                                <Route
                                    key={r.path}
                                    exact={r.exact}
                                    component={r.component}
                                />
                            );
                        })}
                    </Provider>
                </Switch>
            </Router>
        </div>
    );
}

export default App1;
