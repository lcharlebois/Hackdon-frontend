// @flow
import React from 'react'
import { List, Grid, Image, Input } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import Cookies from 'js-cookie'

export default class ProfilProject extends React.Component {
	render () {
		return (
			<Grid.Row divided='vertically'>
				<Grid.Column width={3} verticalAlign='middle'>
					<Image src={this.props.icon} />
				</Grid.Column>
				<Grid.Column width={10} verticalAlign='middle'>
					<List.Content>
						<List.Header as='a' href={this.props.link} target='blank'>{this.props.name}</List.Header>
						<List.Description>{this.props.desc}</List.Description>
					</List.Content>
				</Grid.Column>
				<Grid.Column width={3} verticalAlign='middle'>
					<Input
						label={{ basic: true, content: '%' }}
						labelPosition='right'
						type='number'
						defaultValue={this.props.percentage}
						onChange={this.onChange}>
					</ Input>
				</Grid.Column>
			</Grid.Row>
		)
	}
}

ProfilProject.propTypes = {
	id: PropTypes.number,
	link: PropTypes.string,
	name: PropTypes.string,
	desc: PropTypes.string,
	icon: PropTypes.string,
	percentage: PropTypes.number
}
