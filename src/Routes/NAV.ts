import { lazy } from 'react'

export const NAV = {
	MAIN: '/',
	ANY: '/any'
}

export const components = [
	{
		path: NAV.MAIN,
		Component: lazy(() => import('Pages/Main/Main'))
	},
	{
		path: NAV.ANY,
		Component: lazy(() => import('Pages/AnyPage/AnyPage'))
	}
]
