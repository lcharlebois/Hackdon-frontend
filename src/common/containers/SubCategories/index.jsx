import React, {Component} from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import Categories from '../../components/Categories'

export default class SubCategoriesContainer extends Component {
	constructor (props) {
		super(props)
		this.state = {
			categories:
			[
				{
					id: 0,
					title: 'SubCancer',
					description: 'description',
					iconUrl: 'http://via.placeholder.com/50x50',
					isActive: true
				},
				{
					id: 1,
					title: 'SubCancer',
					description: 'description',
					iconUrl: 'http://via.placeholder.com/50x50',
					isActive: true
				},
				{
					id: 2,
					title: 'SubCancer2',
					description: 'description',
					iconUrl: 'http://via.placeholder.com/50x50',
					isActive: false
				},
				{
					id: 3,
					title: 'SubCancer',
					description: 'description',
					iconUrl: 'http://via.placeholder.com/50x50',
					isActive: true
				},
				{
					id: 4,
					title: 'subCancer2',
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

	/* getCategories () {
		var promise = new Promise((resolve, reject) => {
			// resolve(GET_CATEGORIES)
			resolve(null)
		})
		return promise
	}

	componentWillMount () {
		this.getCategories()
			.then(categories => {
				categories.map(category => {
					this.state.categories.push({
						id: category.Id,
						title: category.Title,
						description: category.Description,
						iconUrl: category.IconUrl,
						isActive: false
					})
				})
			})
    } */

	render () {
		return (
			<Categories categories={this.state.categories}/>
		)
	}
}
