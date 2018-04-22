// @flow
import React, { Component } from 'react'
import { Button, Form, TransitionablePortal, Segment, Header } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

export default class Login extends Component {
	static propTypes = {
		show: PropTypes.bool
	}

	constructor (props) {
		super(props)
		this.state = {
			open: false
		}
	}
	render () {
		if (this.props.show === false) {
			return null
		}

		const { open } = this.state

		return (
			<Form style={{ marginBottom: '52px' }} >
				<Form.Field>
					<label>Email address</label>
					<input placeholder='Email address' />
				</Form.Field>
				<Form.Field>
					<label>Password</label>
					<input type="password" placeholder='Password' />
				</Form.Field>
				<Form.Field>
					<label>Password confirmation</label>
					<input type="password" placeholder='Password confirmation' />
				</Form.Field>

				<TransitionablePortal
					closeOnTriggerClick
					openOnTriggerClick
					trigger={(
						<Button
							floated='right'
							color='orange'
							content='Enregistrer'
							to='/user' as={NavLink}/>
					)}>
					<Segment style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}>
						<Header>Votre compte à été créé avec succès</Header>
						<br />
					</Segment>
				</TransitionablePortal>
			</Form>
		)
	}
}
