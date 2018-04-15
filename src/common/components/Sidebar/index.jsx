// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Menu, Icon, Image} from 'semantic-ui-react'
import {withRouter} from 'react-router'
import {NavLink} from 'react-router-dom'
import {getLayoutState} from 'selectors'
import {StyledSidebar} from './style'

type Props = {
	sidebarOpened: boolean
}

class SidebarComponent extends Component<Props> {
	render () {
		const {sidebarOpened} = this.props
		const routing: any[] = [
			{
				path: '/',
				exact: true,
				name: 'Dashboard',
				icon: 'newspaper'
			},
			{
				path: '/',
				exact: true,
				name: 'Categories',
				icon: 'bookmark'
			},
			{
				path: '/news',
				exact: true,
				name: 'News',
				icon: 'bookmark'
			},
			{
				path: '/subcategories',
				exact: true,
				name: 'SubCategories',
				icon: 'bookmark'
			},
			{
				path: '/projects',
				exact: true,
				name: 'projects',
				icon: 'list'
			},
			{
				path: '/profil',
				exact: true,
				name: 'profil',
				icon: 'user'
			}
		]

		const sidebarProps = {
			visible: sidebarOpened,
			as: Menu,
			vertical: true,
			icon: 'labeled',
			animation: 'push',
			width: 'thin',
			inverted: true
		}

		const routes = routing.map((route, i) => {
			const {path, icon, name, exact} = route
			// external links cannot use <Link> componen
			const external = path.split('://').length > 1
			const linkProps = external
				? {href: path, rel: 'noopener', as: 'a'}
				: {activeClassName: 'active', to: path, as: NavLink, exact}

			return (
				<Menu.Item key={i} {...linkProps} icon link>
					<Icon name={icon} /> {name}
				</Menu.Item>
			)
		})

		return (
			<StyledSidebar {...sidebarProps}>
				<a className="logo-container">
					<Image
						src={require('static/images/Logo110.png')}
						alt="logo"
						shape="circular"
						centered
						as={NavLink} to='/'
					/>
				</a>
				{routes}
			</StyledSidebar>
		)
	}
}

const mapStateToProps = state => {
	const {sidebarOpened} = getLayoutState(state)
	return {
		sidebarOpened
	}
}

const mapDispatchToProps = dispatch => ({})
// re-update current active link in sidebar on location change
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SidebarComponent))
