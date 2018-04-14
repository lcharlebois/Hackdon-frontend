// @flow
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'

export default class Project extends React.Component {
	render() {
		return (
			<Card centered href={this.props.url}>
				<Image src={this.props.image} />
				<Card.Content>
					<Card.Header>
						<Item>
							<Item.Image size='small' src={this.props.logo} />
							<Item.Content verticalAlign='middle'>
								<Item.Header as='h3'>{this.props.name}</Item.Header>
							</Item.Content>
						</Item>
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
	name: PropTypes.string,
	description: PropTypes.string,
	url: PropTypes.string,
	image: PropTypes.string,
	logo: PropTypes.string,
	contributorCount: PropTypes.number
}
