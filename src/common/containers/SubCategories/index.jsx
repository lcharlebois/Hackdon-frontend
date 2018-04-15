import React, {Component} from 'react'
import { Button, Card, Image, Grid } from 'semantic-ui-react'
import Categories from '../../components/Categories'
import Fetch from 'react-fetch-component'
import OData from 'react-odata'
const baseUrl = 'http://a654mdkhmg6h-wua6.humbledonations.com/SubCategories'

export default class SubCategoriesContainer extends Component {
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
							<Button.Group>
								<Button>Backs</Button>
								<Button.Or />
								<Button positive>Save</Button>
							</Button.Group>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		)
	}
}
