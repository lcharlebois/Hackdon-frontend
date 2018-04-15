// @flow
import ProjectCard from './ProjectCard'
import React from 'react'
import Helmet from 'react-helmet'
import { Grid, Header, Icon, Divider } from 'semantic-ui-react'

const projects = [
	{ id: 0, name: 'Greenpeace0', description: 'En ce moment même, l’Arctic Sunrise, le brise-glace de la flotte arc-en-ciel de Greenpeace, met le cap sur l’extrême sud de notre globe. Au cours des trois prochains mois, son équipage travaillera coude-à-coude avec des scientifiques, des photographes et des journalistes du monde entier pour promouvoir la création, dans l’océan Antarctique, de la plus grande réserve marine du monde. Enfilez vos gants et votre bonnet, on vous embarque !', email: 'http://www.greenpeace.org', contributorCount: 10, image: 'https://cdn-images-1.medium.com/max/1200/1*2ZhAYHG33LmdNMJ3vNk2qw.jpeg', logo: 'https://aladecouvertede2cultures.files.wordpress.com/2017/01/greenpeace.jpg' },
	{ id: 1, name: 'Greenpeace1', description: 'En ce moment même, l’Arctic Sunrise, le brise-glace de la flotte arc-en-ciel de Greenpeace, met le cap sur l’extrême sud de notre globe. Au cours des trois prochains mois, son équipage travaillera coude-à-coude avec des scientifiques, des photographes et des journalistes du monde entier pour promouvoir la création, dans l’océan Antarctique, de la plus grande réserve marine du monde. Enfilez vos gants et votre bonnet, on vous embarque !', email: 'http://www.greenpeace.org', contributorCount: 11, image: 'https://cdn-images-1.medium.com/max/1200/1*2ZhAYHG33LmdNMJ3vNk2qw.jpeg', logo: 'https://aladecouvertede2cultures.files.wordpress.com/2017/01/greenpeace.jpg' },
	{ id: 2, name: 'Greenpeace2', description: 'En ce moment même, l’Arctic Sunrise, le brise-glace de la flotte arc-en-ciel de Greenpeace, met le cap sur l’extrême sud de notre globe. Au cours des trois prochains mois, son équipage travaillera coude-à-coude avec des scientifiques, des photographes et des journalistes du monde entier pour promouvoir la création, dans l’océan Antarctique, de la plus grande réserve marine du monde. Enfilez vos gants et votre bonnet, on vous embarque !', email: 'http://www.greenpeace.org', contributorCount: 12, image: 'https://cdn-images-1.medium.com/max/1200/1*2ZhAYHG33LmdNMJ3vNk2qw.jpeg', logo: 'https://aladecouvertede2cultures.files.wordpress.com/2017/01/greenpeace.jpg' },
	{ id: 3, name: 'Greenpeace3', description: 'En ce moment même, l’Arctic Sunrise, le brise-glace de la flotte arc-en-ciel de Greenpeace, met le cap sur l’extrême sud de notre globe. Au cours des trois prochains mois, son équipage travaillera coude-à-coude avec des scientifiques, des photographes et des journalistes du monde entier pour promouvoir la création, dans l’océan Antarctique, de la plus grande réserve marine du monde. Enfilez vos gants et votre bonnet, on vous embarque !', email: 'http://www.greenpeace.org', contributorCount: 13, image: 'https://cdn-images-1.medium.com/max/1200/1*2ZhAYHG33LmdNMJ3vNk2qw.jpeg', logo: 'https://aladecouvertede2cultures.files.wordpress.com/2017/01/greenpeace.jpg' },
	{ id: 4, name: 'Greenpeace4', description: 'En ce moment même, l’Arctic Sunrise, le brise-glace de la flotte arc-en-ciel de Greenpeace, met le cap sur l’extrême sud de notre globe. Au cours des trois prochains mois, son équipage travaillera coude-à-coude avec des scientifiques, des photographes et des journalistes du monde entier pour promouvoir la création, dans l’océan Antarctique, de la plus grande réserve marine du monde. Enfilez vos gants et votre bonnet, on vous embarque !', email: 'http://www.greenpeace.org', contributorCount: 14, image: 'https://cdn-images-1.medium.com/max/1200/1*2ZhAYHG33LmdNMJ3vNk2qw.jpeg', logo: 'https://aladecouvertede2cultures.files.wordpress.com/2017/01/greenpeace.jpg' }]

export default class Projects extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			index: 0
		}

		this.onRightSwipe = this.onRightSwipe.bind(this)
		this.onLeftSwipe = this.onLeftSwipe.bind(this)
	}

	render () {
		return (
			<div>
				<Helmet>
					<title>SwipePage</title>
				</Helmet>
				<Header as="h1">Quelques suggestions basés sur vos préférences</Header>
				<Header as="h3">Choisissez des projets qui vous tienne à coeur</Header>
				<Divider />
				<Grid columns={3} padded='horizontally'>
					<Grid.Column verticalAlign='middle' textAlign='center' onClick={this.onLeftSwipe}>
						<Icon name='angle left' size='massive' color='orange' />
					</Grid.Column>
					<Grid.Column>
						<ProjectCard {...projects[this.state.index]} />
					</Grid.Column>
					<Grid.Column verticalAlign='middle' textAlign='center' onClick={this.onRightSwipe}>
						<Icon name='angle right' size='massive' color='orange' />
					</Grid.Column>
				</Grid>
			</div>
		)
	}

	onRightSwipe () {
		if (this.state.index < (projects.length - 1)) {
			this.setState({
				index: this.state.index + 1
			})

			console.log('Liked') // TODO
		}

		console.log(this.state.index)
	}

	onLeftSwipe () {
		if (this.state.index < (projects.length - 1)) {
			this.setState({
				index: this.state.index + 1
			})

			console.log('Disliked') // TODO
		}

		console.log(this.state.index)
	}
};
