// @flow
import React, {Component} from 'react'
import { Button, Form } from 'semantic-ui-react'
import PropTypes from 'prop-types'

export default class Login extends Component {
	static propTypes = {
		show: PropTypes.bool
	}

	constructor (props) {
		super(props)
		this.state = {}
	}

	render () {
		if (this.props.show === false) {
			return null
		}
		return (
			<Form style={{marginBottom: '52px'}} >
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
				<Button type='submit' floated='right' color='orange' onClick='/user'>Sign up</Button>
			</Form>
		)
	}
}
