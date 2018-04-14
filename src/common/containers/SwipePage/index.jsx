// @flow
import React from 'react'
import { Helmet } from 'react-helmet'
import { Header, Grid, Icon, Divider } from 'semantic-ui-react'
import SwipeCard from './SwipeCard'

const Swipes = () => {
	return (
		<div>
			<Helmet>
				<title>Swipes</title>
			</Helmet>
			<Header as="h1">Quelques suggestions basés sur vos préférences</Header>
			<Header as="h3">Choisissez des projets qui vous tienne à coeur</Header>
			<Divider />
			<Grid columns={3} padded='horizontally'>
				<Grid.Column verticalAlign='middle' textAlign='center'>
					<Icon name='angle left' size='massive' />
				</Grid.Column>
				<Grid.Column>
					<SwipeCard/>
				</Grid.Column>
				<Grid.Column verticalAlign='middle' textAlign='center'>
					<Icon name='angle right' size='massive' />
				</Grid.Column>
			</Grid>
		</div>
	)
}

export default Swipes
