// @flow
import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const Login = () => {
	return (
		<Form>
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

export default Login
