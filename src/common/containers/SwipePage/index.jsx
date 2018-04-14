// @flow
import React from 'react'
import { Helmet } from 'react-helmet'
import { Header, Grid, Icon, Divider, Button } from 'semantic-ui-react'
import SwipeCard from './SwipeCard'

const projects = [
	{ id: 0, name: 'Greenpeace0', description: 'description0', email: 'email@lll0.com', contributorCount: 10, image: 'https://cdn-images-1.medium.com/max/1200/1*2ZhAYHG33LmdNMJ3vNk2qw.jpeg' },
	{ id: 1, name: 'Greenpeace1', description: 'description1', email: 'email@lll1.com', contributorCount: 11, image: 'https://cdn-images-1.medium.com/max/1200/1*2ZhAYHG33LmdNMJ3vNk2qw.jpeg' },
	{ id: 2, name: 'Greenpeace2', description: 'description2', email: 'email@lll2.com', contributorCount: 12, image: 'https://cdn-images-1.medium.com/max/1200/1*2ZhAYHG33LmdNMJ3vNk2qw.jpeg' },
	{ id: 3, name: 'Greenpeace3', description: 'description3', email: 'email@lll3.com', contributorCount: 13, image: 'https://cdn-images-1.medium.com/max/1200/1*2ZhAYHG33LmdNMJ3vNk2qw.jpeg' },
	{ id: 4, name: 'Greenpeace4', description: 'description4', email: 'email@lll4.com', contributorCount: 14, image: 'https://cdn-images-1.medium.com/max/1200/1*2ZhAYHG33LmdNMJ3vNk2qw.jpeg' }]

export default class SwipePage extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			swipeIndex: 0
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
						<Icon name='angle left' size='massive' />
					</Grid.Column>
					<Grid.Column>
						<SwipeCard {...projects[this.state.swipeIndex]} />
					</Grid.Column>
					<Grid.Column verticalAlign='middle' textAlign='center'>
						<Icon name='angle right' size='massive' onClick={this.onRightSwipe}/>
					</Grid.Column>
				</Grid>
			</div>
		)
	}

	onRightSwipe () {
		if (this.state.swipeIndex < (projects.length - 1)) {
			this.setState({
				swipeIndex: this.state.swipeIndex + 1
			})

			console.log('Liked') // TODO
		}

		console.log(this.state.swipeIndex)
	}

	onLeftSwipe () {
		if (this.state.swipeIndex < (projects.length - 1)) {
			this.setState({
				swipeIndex: this.state.swipeIndex + 1
			})

			console.log('Disliked') // TODO
		}

		console.log(this.state.swipeIndex)
	}
};
