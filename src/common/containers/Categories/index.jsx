import React, {Component} from 'react'
import { Button, Grid, Icon } from 'semantic-ui-react'
import Fetch from 'react-fetch-component'
import OData from 'react-odata'
import Categories from '../../components/Categories'
const baseUrl = 'http://a654mdkhmg6h-wua6.humbledonations.com/Categories'

export default class CategoriesContainer extends Component {
	constructor (props) {
		super(props)
		this.state = {}
	}

	render () {
		return (
			<div>
				<OData baseUrl={baseUrl}>
					{({ loading, data, error }) => (
						<Categories categories={data.value}/>
					)}
				</OData>
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
