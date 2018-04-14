import React, {Component} from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'

export default class Categories extends Component {
	static propTypes = {
		categories: PropTypes.array
	}

	constructor (props) {
		super(props)
		this.state = {}
	}

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

	componentWillMount () {
		this.setState({categories: this.props.categories})
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
