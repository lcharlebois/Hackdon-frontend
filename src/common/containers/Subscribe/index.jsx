import React, { Component } from 'react'
import { Form, Header, Divider, Checkbox, Button, Icon } from 'semantic-ui-react'
import Helmet from 'react-helmet'
import Fetch from 'react-fetch-component'
import OData from 'react-odata'
const baseUrl = 'http://a654mdkhmg6h-wua6.humbledonations.com/Subscribe'

export default class Subscribe extends Component {
	constructor (props) {
		super(props)
		this.state = {
			value: 0
		}
	}

	handleChange = (e, { value }) => this.setState({ value })

	render () {
		return (
			<div>
				<Helmet>
					<title>Subscribe</title>
				</Helmet>
				<Header as="h1">Subscribe to a monthly donation</Header>
				<Divider />
				<br />
				<Form size='massive'>
					<Form.Field inline>
						<Header as="h3">You will be giving  <b>{this.state.value}$ every month</b></Header>
					</Form.Field>
					<br />
					<Form.Group inline>
						<Form.Field width={2}>
							<Checkbox
								radio
								label='1$'
								name='checkboxRadioGroup'
								value='1'
								checked={this.state.value === '1'}
								onChange={this.handleChange}
							/>
						</Form.Field>
						<Form.Field width={2}>
							<Checkbox
								radio
								label='2$'
								name='radioGroup'
								value='2'
								checked={this.state.value === '2'}
								onChange={this.handleChange}
							/>
						</Form.Field>
						<Form.Field width={2}>
							<Checkbox
								radio
								label='3$'
								name='radioGroup'
								value='3'
								checked={this.state.value === '3'}
								onChange={this.handleChange}
							/>
						</Form.Field>
						<Form.Field width={2}>
							<Checkbox
								radio
								label='5$'
								name='radioGroup'
								value='5'
								checked={this.state.value === '5'}
								onChange={this.handleChange}
							/>
						</Form.Field>
					</Form.Group>
				</Form>
				<br />
				<br />
				<Button href='http://localhost:5000/user' icon labelPosition='left' floated='right' color='orange' onClick={this.onSave}>
					<Icon name='credit card' />
					Save
				</Button>
			</ div>
		)
	}
}
