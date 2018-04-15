/**
 * @flow
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Helmet from 'react-helmet'
import {Loader, Grid, List, Image, Button, Header, Icon} from 'semantic-ui-react'
import {GET_LINKS} from 'actions/links'
import LinkItem from './components/LinkItem'
import {getEntitiesLinksState, isLoaded} from 'selectors'
import _ from 'lodash'
import {NavLink} from 'react-router-dom'

type Props = {
	links: Object,
	getLinks: () => void,
	isLinksLoaded: boolean
}

const projects = [
	{
		id: 1,
		name: 'Greenpeace0',
		icon: 'https://baconmockup.com/50/50',
		desc: 'Sauver mon chat',
		link: '/projects/1',
		pourcentage: 10
	}, {
		id: 2,
		name: 'Greenpeace0',
		icon: 'https://baconmockup.com/50/50',
		desc: 'Sauver mon chat',
		link: '/projects/1',
		pourcentage: 10
	}, {
		id: 3,
		name: 'Greenpeace0',
		icon: 'https://baconmockup.com/50/50',
		desc: 'Sauver mon chat',
		link: '/projects/1',
		pourcentage: 10
	}, {
		id: 4,
		name: 'Greenpeace0',
		icon: 'https://baconmockup.com/50/50',
		desc: 'Sauver mon chat',
		link: '/projects/1',
		pourcentage: 10
	}
]

class Links extends Component<Props> {
	componentDidMount () {
		if (!this.props.isLinksLoaded) {
			this.props.getLinks()
		}
	}

	async asyncBootstrap () {
		if (!this.props.isLinksLoaded) {
			await this.props.getLinks()
		}
		return true
	}

	render () {
		const {links, isLinksLoaded} = this.props
		return (
			<div>
				<Helmet>
					<title>Suicrux:Projets</title>
				</Helmet>
				{!isLinksLoaded ? (
					<Loader active>Loading data...</Loader>
				) : (
					<div>
						<Header as='h2' icon textAlign='center'>
							<Icon name='users' circular />
							<Header.Content>
							Mes projets supportés
							</Header.Content>
						</Header>
						<Grid columns={3} divided>
							{_.map(projects, (linkItem, i) => {
								return <LinkItem key={i} {...linkItem} />
							})}
						</Grid>
						<br/>
						<Button positive floated='right' as={NavLink} to='/swipes'>Ajouter</Button>
						<Button primary floated='right' as='a'>Modifier</Button>
					</div>
				)}
			</div>
		)
	}
}

function mapStateToProps (state) {
	const linksState = getEntitiesLinksState(state)
	const links = linksState.entities
	const isLinksLoaded = isLoaded(linksState)
	return {links, isLinksLoaded}
}

const mapDispatchToProps = dispatch => ({
	async getLinks () {
		return dispatch(GET_LINKS())
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Links)
