import React, {Component} from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
// import GET_CATEGORIES

export default class Categories extends Component {
	constructor (props) {
		super(props)
		this.state = {
			categories:
			[
				{
					id: 0,
					title: 'Cancer',
					description: 'description',
					iconUrl: 'http://via.placeholder.com/50x50',
					isActive: true
				},
				{
					id: 1,
					title: 'Cancer',
					description: 'description',
					iconUrl: 'http://via.placeholder.com/50x50',
					isActive: true
				},
				{
					id: 2,
					title: 'Cancer2',
					description: 'description',
					iconUrl: 'http://via.placeholder.com/50x50',
					isActive: false
				},
				{
					id: 3,
					title: 'Cancer',
					description: 'description',
					iconUrl: 'http://via.placeholder.com/50x50',
					isActive: true
				},
				{
					id: 4,
					title: 'Cancer2',
					description: 'description',
					iconUrl: 'http://via.placeholder.com/50x50',
					isActive: false
				},
				{
					id: 5,
					title: 'Cancer2',
					description: 'description',
					iconUrl: 'http://via.placeholder.com/50x50',
					isActive: false
				}
			]
		}
	}

	/* getCategories () {
		var promise = new Promise((resolve, reject) => {
			// resolve(GET_CATEGORIES)
			resolve(null)
		})
		return promise
	}

	componentWillMount () {
		this.getCategories()
			.then(categories => {
				categories.map(category => {
					this.state.categories.push({
						id: category.Id,
						title: category.Title,
						description: category.Description,
						iconUrl: category.IconUrl,
						isActive: false
					})
				})
			})
	} */

	handleClick (id) {
		let oldCategories = this.state.categories
		oldCategories.forEach((category) => {
			if (category.id === id) {
				category.isActive = !category.isActive
			}
		})

		this.setState = {
			categories: oldCategories
		}
		this.forceUpdate()
	}

	render () {
		return (
			<Card.Group>
				{
					this.state.categories.map(category => {
						return (
							<Card key={category.id}>
								<Card.Content>
									<Image floated='right' size='mini' src={category.iconUrl} />
									<Card.Header>
										{category.title}
									</Card.Header>
									<Card.Description>
										{category.description}
									</Card.Description>
								</Card.Content>
								<Card.Content extra>
									<div className='ui two buttons'>
										<Button
											toggle
											active={category.isActive}
											onClick={() => this.handleClick(category.id)}>
											{category.isActive ? 'Selected' : 'Select'}
										</Button>
									</div>
								</Card.Content>
							</Card>
						)
					})
				}
			</Card.Group>
		)
	}
}
