/**
 * @flow
 */
import React from 'react'
import Helmet from 'react-helmet'
import { Grid, Button, Header, Icon } from 'semantic-ui-react'
import ProfilItem from './ProfilItem'
import _ from 'lodash'

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

export default class Profil extends React.Component {
	render () {
		return (
			<div>
				<Helmet>
					<title>Profil</title>
				</Helmet>
				<div>
					<Header as='h2' icon textAlign='center'>
						<Icon name='users' circular />
						<Header.Content>
							Mes projets supportés
						</Header.Content>
					</Header>
					<Grid columns={3} divided>
						{_.map(projects, (item, i) => {
							return <ProfilItem key={i} {...item} />
						})}
					</Grid>
					<br />
					<Button positive floated='right' as='a' href='/swipes'>Ajouter</Button>
				</div>
			</div>
		)
	}
}
