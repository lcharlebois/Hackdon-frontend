import React, {Component} from 'react'
import { Button, Grid, Icon } from 'semantic-ui-react'
import Fetch from 'react-fetch-component'
import Categories from '../../components/Categories'
import { apiUrl } from '../../../../package.json'

export default class SubCategoriesContainer extends Component {
	constructor (props) {
		super(props)
		this.state = {
			subCategories: []
		}
	}

	componentDidMount () {
		fetch(apiUrl + '/SubCategories')
		  .then(response => response.json())
		  .then(data => this.setState({ subCategories: data }))
	}

	render () {
		return (
			<div>
				<Categories categories={this.state.subCategories}/>
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
