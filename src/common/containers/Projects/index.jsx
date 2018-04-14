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

type Props = {
	links: Object,
	getLinks: () => void,
	isLinksLoaded: boolean
}

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
					/* <Grid stackable>
						<Grid.Column width={16}>
							<List relaxed divided animated>
								{_.map(links, (linkItem, i) => {
									return <LinkItem key={i} {...linkItem} />
								})}
							</List>
						</Grid.Column>
					</Grid> */
					<div>
						<Header as='h2' icon textAlign='center'>
							<Icon name='users' circular />
							<Header.Content>
							Mes projets supportés
							</Header.Content>
						</Header>
						<Grid columns={3} divided>
							<Grid.Row>
								<Grid.Column width="3">
									<Image avatar src='https://baconmockup.com/50/50' />
								</Grid.Column>
								<Grid.Column width="10">
									<List.Content>
										<List.Header as='a'>{'Fondation du CHUS'}</List.Header>
										<List.Description>{'Pour les malades, plain de nouvelle machine'}</List.Description>
									</List.Content>
								</Grid.Column>
								<Grid.Column width="3">
									90 %
								</Grid.Column>
							</Grid.Row>

							<Grid.Row>
								<Grid.Column width="3">
									<Image avatar src='https://baconmockup.com/50/50' />
								</Grid.Column>
								<Grid.Column width="10">
									<List.Content>
										<List.Header as='a'>{'Operation enfant soleil.'}</List.Header>
										<List.Description>{'Pour les enfants.'}</List.Description>
									</List.Content>
								</Grid.Column>
								<Grid.Column width="3">
									5 %
								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column width="3">
									<Image avatar src='https://baconmockup.com/50/50' />
								</Grid.Column>
								<Grid.Column width="10">
									<List.Content>
										<List.Header as='a'>{'Albert LaTulipe'}</List.Header>
										<List.Description>{'Sauver mon chat'}</List.Description>
									</List.Content>
								</Grid.Column>
								<Grid.Column width="3">
									2.5 %
								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column width="3">
									<Image avatar src='https://baconmockup.com/50/50' />
								</Grid.Column>
								<Grid.Column width="10">
									<List.Content>
										<List.Header as='a'>{'Veronika Ossi'}</List.Header>
										<List.Description>{'Has not watched anything recently'}</List.Description>
									</List.Content>
								</Grid.Column>
								<Grid.Column width="3">
									2.5 %
								</Grid.Column>
							</Grid.Row>

						</Grid>
						<br/>
						<Button positive floated='right'>Ajouter</Button>
					</div>
					/* <List>
						<List.Item>
							<Image avatar src='https://baconmockup.com/50/50' />
							<List.Content>
								<List.Header as='a'>{'Village de sherbrooke'}</List.Header>
								<List.Description>{'Reconstruire un puit, un don pour une goute'}</List.Description>
							</List.Content>
						</List.Item>
						<List.Item>
							<Image avatar src='https://baconmockup.com/50/50' />
							<List.Content>
								<List.Header as='a'>{'Veronika Ossi'}</List.Header>
								<List.Description>{'Has not watched anything recently'}</List.Description>
							</List.Content>
						</List.Item>
					</List> */
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
