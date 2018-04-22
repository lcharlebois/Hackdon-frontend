import React, {Component} from 'react'
import { Step, Icon, Image, Button, Grid, Header, Divider, Transition, Segment, GridRow } from 'semantic-ui-react'
import Fetch from 'react-fetch-component'
import Categories from '../../components/Categories'
import Login from '../../components/Login'
import Projects from '../../containers/Projects'
import { apiUrl } from '../../../../package.json'

export default class PreferencesContainer extends Component {
	constructor (props) {
		super(props)
		this.state = {
			showedStepId: 1,
			subCategories: [],
			categories: []
		}
		this.onClickNext = this.onClickNext.bind(this)
		this.onClickBack = this.onClickBack.bind(this)
	}

	componentDidMount () {
		fetch(apiUrl + '/SubCategories')
		  .then(response => response.json())
			.then(data => this.setState({ subCategories: data }))

		fetch(apiUrl + '/Categories')
			.then(response => response.json())
			.then(data => this.setState({ categories: data }))
	}

	onClickNext () {
		this.setState(
			{
				showedStepId: this.state.showedStepId + 1
			}
		)
	}

	onClickBack () {
		this.setState(
			{
				showedStepId: this.state.showedStepId - 1
			}
		)
	}

	render () {
		return (
			<div>
				<Step.Group style={{width: '500px'}} attached='top'>
					<Step active={this.state.showedStepId === 1}>
						<Icon name='configure' />
						<Step.Content>
							<Step.Title>{'Choisissez vos intérêts'}</Step.Title>
						</Step.Content>
					</Step>

					<Step active={this.state.showedStepId === 2}>
						<Icon name='cogs' />
						<Step.Content>
							<Step.Title>{"Précisez vos champs d'intérêts"}</Step.Title>
						</Step.Content>
					</Step>

					<Step active={this.state.showedStepId === 3}>
						<Icon name='favorite' />
						<Step.Content>
							<Step.Title>Vos favoris</Step.Title>
						</Step.Content>
					</Step>

					<Step active={this.state.showedStepId === 4}>
						<Icon name='signup' />
						<Step.Content>
							<Step.Title>Création de compte</Step.Title>
						</Step.Content>
					</Step>
				</Step.Group>

				<Segment attached>
					<Categories show={this.state.showedStepId === 1} categories={this.state.categories} />
					<Categories show={this.state.showedStepId === 2} categories={this.state.subCategories} />
					<Projects show={this.state.showedStepId === 3} />
					<Login show={this.state.showedStepId === 4} />
				</Segment>
				<Grid>
					<GridRow columns={7}>
						<Grid.Column floated='left' width='3'>
							<Icon floated='left' onClick={this.onClickBack} disabled={this.state.showedStepId <= 1} name='arrow outline left' size='massive' color='orange'/>
						</Grid.Column>
						<Grid.Column width='1'>
						</Grid.Column>
						<Grid.Column floated='right' width='3'>
							<Icon floated='right' onClick={this.onClickNext} disabled={this.state.showedStepId >= 4} name='arrow outline right' size='massive' color='orange'/>
						</Grid.Column>
					</GridRow>
				</Grid>
			</div>
		)
	}
}
