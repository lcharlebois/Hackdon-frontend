import React, {Component} from 'react'
import { Button, Grid, Icon } from 'semantic-ui-react'
import Fetch from 'react-fetch-component'
import Categories from '../../components/Categories'
import { apiUrl } from '../../../../package.json'

export default class CategoriesContainer extends Component {
	constructor (props) {
		super(props)
		this.state = {
			categories: []
		}
	}

	componentDidMount () {
		fetch(apiUrl + '/Categories')
		  .then(response => response.json())
		  .then(data => this.setState({ categories: data }))
	}

	render () {
		return (
			<div>
				<Categories categories={this.state.categories}/>
				<Grid columns={3}>
					<Grid.Row>
						<Grid.Column />
						<Grid.Column />
						<Grid.Column>
							<Button icon labelPosition='right'>
								Next
								<Icon name='right arrow' />
							</Button>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		)
	}
}
