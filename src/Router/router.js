import { lazy } from 'react';
import Loading from '../Components/elements/Loading/Loading';
export const router = {
	fallback : <Loading/>,
	routes   : [
		{
			path      : '/',
			exact     : true,
			component : lazy(() => import('./../Pages/Home/Home'))
		},
		{
			path      : '/about',
			component : lazy(() => import('./../Pages/About/About'))
		},
		{
			path      : '/contact',
			component : lazy(() => import('./../Pages/Cantact/Contact'))
		},
		{
			path        : '/admin',
			component   : lazy(() => import('./../Pages/Admin/Admin')),
			routeConfig : {
				fallback : <Loading/>,
				routes   : [
					{
						path        : '/',
						exact       : true,
						canActivate : true,
						component   : lazy(() => import('./../Components/Admin/Dashboard/Dashboard'))
					},
					{
						path        : '/NationalCode',
						canActivate : true,
						component   : lazy(() => import('./../Components/Admin/NationalCode/NationalCode'))
					},
					{
						path      : '/login',
						component : lazy(() => import('./../Components/Admin/Login/Login'))
					}
				]
			}
		},
		{
			path      : '*',
			component : lazy(() => import('../Components/elements/NotFound/NotFound'))
		}
	]
};
// export const routeConfig = {
//     fallback: <div>Loading...</div>,
//     routes: [
//       {
//         path: '/',
//         exact: true,
//         component: lazy(() => import('../../Components/elements/NationalCode/NationalCode')),
//         data: {
//           date: new Date(),
//         },
//       },
//       {
//         path: '/about',
//         component: lazy(() => import('../../Components/elements/NotFound/NotFound')),
//         canActivate: isAuthenticated,
//         routeConfig: {
//           fallback: <div>Loading friends...</div>,
//           routes: [
//             {
//               path: '/friends',
//               component: lazy(() => import('./About/Friends/Friends')),
//               routeConfig: {
//                 fallback: <div>Loading friend...</div>,
//                 routes: [
//                   {
//                     path: '/:name',
//                     component: lazy(() =>
//                       import('./About/Friends/Friend/Friend')
//                     ),
//                   },
//                 ],
//               },
//             },
//           ],
//         },
//       },
//     ],
//   };
