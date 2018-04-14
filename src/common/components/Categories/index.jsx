import React, {Component} from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
// import GET_CATEGORIES

export class Categories extends Component {
	constructor (props) {
		super(props)
		this.state = {
			categories: []
			// category = {
			//     id: null,
			//     description: '',
			//     iconUrl: '',
			//     isActive: true
			// }
		}
		this.handleClick = this.handleClick.bind(this)
	}

	getCategories () {
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
	}

	handleClick (id) {
		let oldCategories = this.state.categories
		oldCategories.forEach((category, index) => {
			if (category.id === id) {
				oldCategories[index].isActive = !oldCategories[index].isActive
			}
		})

		this.setState = {
			categories: oldCategories
		}
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
										<Button toggle active={category.active} onClick={this.handleClick(category.id)}>Select</Button>
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
