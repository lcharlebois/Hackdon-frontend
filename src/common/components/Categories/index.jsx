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
			<div>
				<Card.Group>
					{
						this.categories.map((category) => {
							return (
								<Card key={category.id}>
									<Card.Content>
										<Image floated='right' size='mini' src={category.IconUrl} />
										<Card.Header>
											{category.Title}
										</Card.Header>
										<Card.Description>
											{category.Description}
										</Card.Description>
									</Card.Content>
									<Card.Content extra>
										<div className='ui two buttons'>
											<Button
												toggle
												active={category.IsActive}
												onClick={() => this.handleClick(category.Id)}>
												{category.isActive ? 'Selected' : 'Select'}
											</Button>
										</div>
									</Card.Content>
								</Card>
							)
						})
					}
				</Card.Group>
			</div>
		)
	}
}
