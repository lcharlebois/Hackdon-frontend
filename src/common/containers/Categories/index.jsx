import React, {Component} from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import Fetch from 'react-fetch-component'
import OData from 'react-odata'
import Categories from '../../components/Categories'
const baseUrl = 'http://10.221.1.40:5000/Categories'

export default class CategoriesContainer extends Component {
	constructor (props) {
		super(props)
		this.state = {
			categories:
			[
				{
					id: 0,
					title: 'Cancer',
					description: 'description',
					iconUrl: 'http://via.placeholder.com/50x50',
					isActive: true
				},
				{
					id: 1,
					title: 'Cancer',
					description: 'description',
					iconUrl: 'http://via.placeholder.com/50x50',
					isActive: true
				},
				{
					id: 2,
					title: 'Cancer2',
					description: 'description',
					iconUrl: 'http://via.placeholder.com/50x50',
					isActive: false
				},
				{
					id: 3,
					title: 'Cancer',
					description: 'description',
					iconUrl: 'http://via.placeholder.com/50x50',
					isActive: true
				},
				{
					id: 4,
					title: 'Cancer2',
					description: 'description',
					iconUrl: 'http://via.placeholder.com/50x50',
					isActive: false
				},
				{
					id: 5,
					title: 'Cancer2',
					description: 'description',
					iconUrl: 'http://via.placeholder.com/50x50',
					isActive: false
				}
			]
		}
	}

	render () {
		return (
			<OData baseUrl={baseUrl}>
				{({ loading, data, error }) => (
					<Categories categories={data.value}/>
				)}
			</OData>
		)
	}
}
