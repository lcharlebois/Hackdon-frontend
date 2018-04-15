// @flow
import React from 'react'
import {createBrowserHistory, createMemoryHistory} from 'history'
import {asyncComponent} from 'react-async-component'
import {Loader, Dimmer, Header, Icon} from 'semantic-ui-react'
import _ from 'lodash'
import Profil from 'containers/Profil'
import Projects from 'containers/Projects'
import Login from 'containers/Login'
import CategoriesContainer from '../containers/Categories'
import SubCategoriesContainer from '../containers/SubCategories'
import Subscribe from '../containers/Subscribe'
import News from '../containers/News'

function asyncComponentCreator (url) {
	return asyncComponent({
		resolve: () => {
			if (!process.env.BROWSER) {
				// flow-disable-next-line
				return require(`containers/${url}/index.jsx`).default
			}
			// flow-disable-next-line: The parameter passed to import() must be a literal string
			return import(/* webpackChunkName:"[index].[request]" */ `containers/${url}/index.jsx`)
		},
		LoadingComponent () {
			return (
				<Dimmer active>
					<Loader size="large" active>
						Loading page...
					</Loader>
				</Dimmer>
			)
		},
		ErrorComponent () {
			return (
				<Dimmer active>
					<Header inverted as="h2" icon textAlign="center">
						<Icon name="refresh" />
						Refresh
						<Header.Subheader>Got error while loading page.</Header.Subheader>
					</Header>
				</Dimmer>
			)
		},
		autoResolveES2015Default: true,
		env: process.env.BROWSER ? 'browser' : 'node',
		serverMode: 'resolve'
	})
}

function routingFnCreator (useFor) {
	// const AsyncNotFound = asyncComponentCreator('NotFound')
	// Login and Links included in build
	// NotFound(404) is lazy
	const routes: any[] = [
		{
			path: '/',
			exact: true,
			component: CategoriesContainer,
			name: 'Categories'
		},
		{
			path: '/subcategories',
			exact: true,
			component: SubCategoriesContainer,
			name: 'Sous-Categories'
		},
		{
			path: '/projects',
			exact: true,
			component: Projects,
			name: 'Projets'
		},
		{
			path: '/login',
			exact: true,
			component: Login,
			icon: 'bookmark'
		},
		{
			path: '/user',
			exact: true,
			component: Profil,
			name: 'Profil d\'utilisateur'
		},
		{
			path: '/news',
			exact: true,
			component: News,
			name: 'Nouvelles'
		},
		{
			path: '/login',
			exact: true,
			component: Login,
			name: 'Login'
		},
		{
			path: '/subscribe',
			exact: true,
			component: Subscribe,
			name: 'Abonnement'
		},
		{
			component: asyncComponentCreator('NotFound'),
			name: '404'
		}
	]

	const fns = {
		// Returns routing for React-Router
		routing () {
			return routes.map(a => _.pick(a, ['path', 'strict', 'exact', 'component', 'lazy']))
		},
		// Returns `name` + `path`. used in Header
		meta () {
			return routes.map(a => _.pick(a, ['path', 'name', 'exact', 'strict']))
		}
	}

	return fns[useFor]
}

const createRequiredHistory = process.env.BROWSER ? createBrowserHistory : createMemoryHistory

export const getMetaRoutes = routingFnCreator('meta')
export const getRouterRoutes = routingFnCreator('routing')
export const history = createRequiredHistory()
