import {
	createRootRoute,
	createRoute,
	createRouter,
	RouterProvider,
	Outlet,
	RouteComponent
} from "@tanstack/react-router"
import Navbar from "./Navbar";
import NotFound from "../views/NotFound";
import { ReactNode } from "react";

interface Route {
	path: string,
	component: RouteComponent<ReactNode>,
}

interface Props {
	routes: Route[]
}

export default function Router(props: Props)  {
	const rootRoute = createRootRoute({
			component: () => (
				<>
					<Navbar />
					<Outlet />
				</>
			),
			notFoundComponent: NotFound
		});
		
		const routes = props.routes.map(r => createRoute({
			getParentRoute: () => rootRoute,
			path: r.path,
			component: r.component
		}));
	
		const routeTree = rootRoute.addChildren(routes);
		const router = createRouter({
			routeTree,
			defaultPreload: 'intent',
			scrollRestoration: true
		})
	
		return <RouterProvider router={router} />;
}