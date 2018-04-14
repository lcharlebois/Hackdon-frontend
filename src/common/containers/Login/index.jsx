// @flow
import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import {Helmet} from 'react-helmet'
import {FormattedMessage} from 'react-intl'

const Dashboard = () => {
	return (
		<Form>
			<Form.Field>
				<label>Courriel</label>
				<input placeholder='Courriel' />
			</Form.Field>
			<Form.Field>
				<label>Mot de passe</label>
				<input placeholder='Mot de passe' />
			</Form.Field>
			<Button type='submit'>Se connecter</Button>
		</Form>
	)
}

export default Dashboard
