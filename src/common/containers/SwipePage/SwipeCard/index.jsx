// @flow
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'

export default class SwipeCard extends React.Component {
	render () {
		return (
			<Card centered >
				<Image src={this.props.image} />
				<Card.Content>
					<Card.Header>
						{this.props.name}
					</Card.Header>
					<Card.Meta>
						<span className='email'>
							{this.props.email}
						</span>
					</Card.Meta>
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

SwipeCard.propTypes = {
	name: PropTypes.string,
	description: PropTypes.string,
	email: PropTypes.string,
	image: PropTypes.string,
	contributorCount: PropTypes.number
}
