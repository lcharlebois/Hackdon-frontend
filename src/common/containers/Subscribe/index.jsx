import React, { Component } from 'react'
import { Form, Header, Divider, Checkbox, Button, Icon } from 'semantic-ui-react'
import Helmet from 'react-helmet'
import Fetch from 'react-fetch-component'
import OData from 'react-odata'
import {NavLink} from 'react-router-dom'
import Cookies from 'js-cookie'
const baseUrl = 'http://a654mdkhmg6h-wua6.humbledonations.com/Subscribe'

export default class Subscribe extends Component {
	constructor (props) {
		super(props)

		var credit = Cookies.get('credit') | 0

		this.state = {
			value: credit
		}
	}

	handleChange = (e, { value }) => {
		this.setState({ value })
	}

	onSave = () => {
		Cookies.set('credit', this.state.value, {expires: 365})
	}

	render () {
		return (
			<div>
				<Helmet>
					<title>Subscribe</title>
				</Helmet>
				<Header as="h1">Devenez donateur mensuel</Header>
				<Divider />
				<br />
				<Form size='massive'>
					<Form.Field inline>
						<Header as="h3">Vous donnerez  <b>{this.state.value}$ chaque mois</b></Header>
					</Form.Field>
					<br />
					<Form.Group inline>
						<Form.Field width={2}>
							<Checkbox
								radio
								label='1$'
								name='checkboxRadioGroup'
								value='1'
								checked={this.state.value.toString() === '1'}
								onChange={this.handleChange}
							/>
						</Form.Field>
						<Form.Field width={2}>
							<Checkbox
								radio
								label='2$'
								name='radioGroup'
								value='2'
								checked={this.state.value.toString() === '2'}
								onChange={this.handleChange}
							/>
						</Form.Field>
						<Form.Field width={2}>
							<Checkbox
								radio
								label='3$'
								name='radioGroup'
								value='3'
								checked={this.state.value.toString() === '3'}
								onChange={this.handleChange}
							/>
						</Form.Field>
						<Form.Field width={2}>
							<Checkbox
								radio
								label='5$'
								name='radioGroup'
								value='5'
								checked={this.state.value.toString() === '5'}
								onChange={this.handleChange}
							/>
						</Form.Field>
					</Form.Group>
				</Form>
				<br />
				<br />
				<Button to='/user' as={NavLink} icon labelPosition='left' floated='right' color='orange' onClick={this.onSave}>
					<Icon name='credit card' />
					Enregistrer
				</Button>
			</ div>
		)
	}
}
