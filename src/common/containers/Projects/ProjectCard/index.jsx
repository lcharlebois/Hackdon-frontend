// @flow
import React from 'react'
import { Card, Icon, Image, Item } from 'semantic-ui-react'
import PropTypes from 'prop-types'

export default class Project extends React.Component {
	render () {
		if (this.props.id === undefined) {
			return 	<Item.Header as='h1'>Revenez plus tard pour plus de suggestions</Item.Header>
		}
		return (
			<Card centered href={this.props.url}>
				<Image src={this.props.image} />
				<Card.Content>
					<Card.Header>
						<Item.Group>
							<Item>
								<Item.Image size='tiny' src={this.props.logo} />
								<Item.Content verticalAlign='middle'>
									<Item.Header as='h3'>{this.props.name}</Item.Header>
								</Item.Content>
							</Item>
						</Item.Group>
					</Card.Header>
					<Card.Description>
						{this.props.description}
					</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<a>
						<Icon name='user' />
						{this.props.contributorCount} Contributors
					</a>
				</Card.Content>
			</Card>
		)
	}
}

Project.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	description: PropTypes.string,
	url: PropTypes.string,
	image: PropTypes.string,
	logo: PropTypes.string,
	contributorCount: PropTypes.number
}
