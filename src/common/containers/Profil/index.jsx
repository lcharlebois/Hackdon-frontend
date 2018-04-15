/**
 * @flow
 */
import React from 'react'
import Helmet from 'react-helmet'
import { Grid, Button, Header, Image, Icon, Divider } from 'semantic-ui-react'
import ProfilProject from './ProfilProject'
import _ from 'lodash'

export default class Profil extends React.Component {
	render () {
		return (
			<div>
				<Helmet>
					<title>Profil</title>
				</Helmet>
				<Header as='h2' color='orange'>
					<Image src={user.photo} />
					<Header.Content>
						{user.name}
						<Header.Subheader>
							You donate {user.credits}$ per month
						</Header.Subheader>
					</Header.Content>
					<Button floated='right' as='a' color='orange'>Edit Subscription</Button>
				</Header>
				<Divider />
				<br />
				<Header as='h4'>
					<Icon name='unordered list' />
					<Header.Content>
						Your donations
					</Header.Content>
				</Header>
				<br />
				<Grid columns='equal' divided>
					{_.map(projects, (item, i) => {
						return <ProfilProject key={i} {...item} />
					})}
				</Grid>
				<br />
				<Button positive floated='right' as='a' href='/swipes'>Ajouter</Button>
			</div>
		)
	}
}

const user = {
	name: 'Jean don pah',
	photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU1gJrTqXMz_DO0hDOyo2cMMJ76hmIfrTMA5mCalphghLhxkTj',
	credits: 5
}

const projects = [
	{
		id: 1,
		name: 'Greenpeace0',
		icon: 'https://aladecouvertede2cultures.files.wordpress.com/2017/01/greenpeace.jpg',
		desc: 'En ce moment même, l’Arctic Sunrise, le brise-glace de la flotte arc-en-ciel de Greenpeace, met le cap sur l’extrême sud de notre globe. Au cours des trois prochains mois, son équipage travaillera coude-à-coude avec des scientifiques, des photographes et des journalistes du monde entier pour promouvoir la création, dans l’océan Antarctique, de la plus grande réserve marine du monde. Enfilez vos gants et votre bonnet, on vous embarque !',
		link: '/projects/1',
		pourcentage: 25
	}, {
		id: 2,
		name: 'Greenpeace0',
		icon: 'https://aladecouvertede2cultures.files.wordpress.com/2017/01/greenpeace.jpg',
		desc: 'En ce moment même, l’Arctic Sunrise, le brise-glace de la flotte arc-en-ciel de Greenpeace, met le cap sur l’extrême sud de notre globe. Au cours des trois prochains mois, son équipage travaillera coude-à-coude avec des scientifiques, des photographes et des journalistes du monde entier pour promouvoir la création, dans l’océan Antarctique, de la plus grande réserve marine du monde. Enfilez vos gants et votre bonnet, on vous embarque !',
		link: '/projects/1',
		pourcentage: 15
	}, {
		id: 3,
		name: 'Greenpeace0',
		icon: 'https://aladecouvertede2cultures.files.wordpress.com/2017/01/greenpeace.jpg',
		desc: 'En ce moment même, l’Arctic Sunrise, le brise-glace de la flotte arc-en-ciel de Greenpeace, met le cap sur l’extrême sud de notre globe. Au cours des trois prochains mois, son équipage travaillera coude-à-coude avec des scientifiques, des photographes et des journalistes du monde entier pour promouvoir la création, dans l’océan Antarctique, de la plus grande réserve marine du monde. Enfilez vos gants et votre bonnet, on vous embarque !',
		link: '/projects/1',
		pourcentage: 30
	}, {
		id: 4,
		name: 'Greenpeace0',
		icon: 'https://aladecouvertede2cultures.files.wordpress.com/2017/01/greenpeace.jpg',
		desc: 'En ce moment même, l’Arctic Sunrise, le brise-glace de la flotte arc-en-ciel de Greenpeace, met le cap sur l’extrême sud de notre globe. Au cours des trois prochains mois, son équipage travaillera coude-à-coude avec des scientifiques, des photographes et des journalistes du monde entier pour promouvoir la création, dans l’océan Antarctique, de la plus grande réserve marine du monde. Enfilez vos gants et votre bonnet, on vous embarque !',
		link: '/projects/1',
		pourcentage: 20
	}
]
