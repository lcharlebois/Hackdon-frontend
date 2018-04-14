// @flow
import React from 'react'
import {List, Grid, Image} from 'semantic-ui-react'
import PropTypes from 'prop-types'

export default class ProfilItem extends React.Component {
	render () {
		return (
			<Grid.Row>
				<Grid.Column width="3">
					<Image avatar src={this.props.icon} />
				</Grid.Column>
				<Grid.Column width="10">
					<List.Content>
						<List.Header as='a' href={this.props.link}>{this.props.name}</List.Header>
						<List.Description>{this.props.desc}</List.Description>
					</List.Content>
				</Grid.Column>
				<Grid.Column width="3">
					{this.props.pourcentage} %
				</Grid.Column>
			</Grid.Row>
		)
	}
}

ProfilItem.propTypes = {
	link: PropTypes.string,
	name: PropTypes.string,
	desc: PropTypes.string,
	icon: PropTypes.string,
	pourcentage: PropTypes.number
}
