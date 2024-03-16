import { createBrowserRouter } from 'react-router-dom'
import Template from '../pages/template'
// import Error from '../pages/Error'
import Home from "../pages/home";

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Template />,
		children: [
			{
				path: '/',
				element: <Home />,
			},

			// {
			// 	path: '*',
			// 	element: <Error />,
			// },
		],
	},
])
