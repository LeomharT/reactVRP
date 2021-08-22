import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'
import routes from './routes'

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					{
						routes.map(({ path, component, exact }) => (
							<Route 
								key={path}
								exact={exact}
								path={path}
								component={component}
							/>
						))
					}
				</Switch>
			</Router>
		</div>
	);
}

export default App;
