import React, {Component} from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'

export default class Categories extends Component {
	static propTypes = {
		categories: PropTypes.array,
		show: PropTypes.bool
	}

	constructor (props) {
		super(props)
		this.state = {
			selectedArray: []
		}
	}

	componentWillMount () {
		this.setState({categories: this.props.categories})
	}

	render () {
		if (this.props.show === false) {
			return null
		}
		return (
			<div>
				<Card.Group>
					{
						this.props.categories.map((category) => {
							var selected = false
							return (
								<Card key={category.id} centered style={{backGroundColor: this.state.selectedArray.includes(category.id) ? 'lightgray' : 'white'}}>
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
												color='orange'
												toggle
												active={category.isActive}
												onClick={() => this.state.selectedArray.push(category.id)}>
												Select
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
