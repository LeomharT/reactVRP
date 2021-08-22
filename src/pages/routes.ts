import { FunctionComponent } from "react";
import Home from './home';
import ActivatedProducts from './activatedProducts'

interface Route {
	path: string
	component: FunctionComponent
	exact?: boolean
}

const routes: Route[] = [
	{
		path: '/',
		component: Home,
		exact: true
	},
	{
		path: '/activatedProducts',
		component: ActivatedProducts,
		exact: true
	}
].map((route) => ({
	...route,
	exact: route.exact !== false
}))

export default routes