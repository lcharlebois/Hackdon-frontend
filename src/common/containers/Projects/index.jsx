// @flow
import ProjectCard from './ProjectCard'
import React from 'react'
import Helmet from 'react-helmet'
import { Grid, Header, Icon, Divider, Transition } from 'semantic-ui-react'

export default class Projects extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			index: 0,
			upVisible: true,
			downVisible: true
		}

		this.onRightSwipe = this.onRightSwipe.bind(this)
		this.onLeftSwipe = this.onLeftSwipe.bind(this)
	}

	render () {
		const { upVisible, downVisible } = this.state

		return (
			<div>
				<Helmet>
					<title>Projects</title>
				</Helmet>
				<Header as="h1">Voici quelques suggestions basés sur vos préférences</Header>
				<Header as="h3">Choisissez des projets qui vous tiennent à coeur</Header>
				<Divider />
				<br />
				<br />
				<Grid columns='equal'>
					<Grid.Column textAlign='center' onClick={this.onLeftSwipe}>
						<br />
						<br />
						<Transition animation='shake' duration='400' visible={downVisible}>
							<Icon disabled={ this.state.index === projects.length } name='thumbs outline down' size='massive' color='orange'/>
						</Transition>
					</Grid.Column>
					<Grid.Column >
						<ProjectCard {...projects[this.state.index]} />
					</Grid.Column>
					<Grid.Column textAlign='center' onClick={this.onRightSwipe}>
						<br />
						<br />
						<Transition animation='pulse' duration='400' visible={upVisible}>
							<Icon disabled={ this.state.index === projects.length } name='thumbs outline up' size='massive' color='orange'/>
						</Transition>
					</Grid.Column>
				</Grid>
			</div>
		)
	}

	onRightSwipe () {
		if (this.state.index < projects.length) {
			this.setState({
				index: this.state.index + 1,
				upVisible: !this.state.upVisible
			})

			console.log('Liked') // TODO
		}

		console.log(this.state.index)
	}

	onLeftSwipe () {
		if (this.state.index < projects.length) {
			this.setState({
				index: this.state.index + 1,
				downVisible: !this.state.downVisible
			})

			console.log('Disliked') // TODO
		}

		console.log(this.state.index)
	}
};

const projects = [
	{
		id: 0,
		logo: 'https://www.jedonneenligne.org/fondationchus/view.php?file_id=logo_Logoofficiel.jpg',
		name: 'Futur centre Mère-Enfant',
		image: 'http://www.chus.qc.ca/uploads/pics/CHUS_CFJF_2013.jpg',
		description: 'Renouvellement des salles d’angiographie et de radiologie interventionnelle. Renouvellement des salles de cardiologie interventionnelle. Réaménagement majeur du Pavillon Émile-Noël, consacré à la santé mentale',
		url: 'http://www.fondationchus.org/realisations/projets-majeurs/',
		contributorCount: 25
	}, {
		id: 1,
		name: 'Coeur en tête',
		logo: 'https://www.jedonneenligne.org/fondationchus/view.php?file_id=logo_Logoofficiel.jpg',
		image: 'http://www.fondationchus.org/clients/Fondation/activites/coeur_en_tete/coeur_en_tete_logo.jpg',
		description: 'Coeur en tête, c’est la bataille de Nathalie  Buisson, cette formidable danseuse des Grands Ballets Canadiens chez qui on diagnostiquait  en  2004  une  tumeur cérébrale maligne incurable. Sur sa route, elle a rencontré Dr David Fortin, neuro-chirurgien et neuro-oncologue au Centre hospitalier universitaire de Sherbrooke, qui lui prodigua un traitement précurseur permettant  de  combattre  les  tumeurs cérébrales.',
		url: 'http://www.fondationchus.org/activites-de-financement/coeur-en-tete/',
		contributorCount: 30
	}, {
		id: 2,
		name: 'L’Arctique ',
		logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtdMRL_O_R1Vrwooq0CElRMzuQxiJQXBHirRZFeDsSUThrfSDv',
		image: 'http://www.greenpeace.org/canada/Global/canada/image/2012/06/GP0506.jpg',
		description: 'L’Arctique est en danger. À cause des changements climatiques, la fonte des glaces s’accélère et ouvre le chemin aux compagnies pétrolières et aux flottes de pêche assoiffées de profits qui voient dans cette catastrophe une opportunité d’affaires. La survie et la culture des peuples autochtones et de tous les habitants du Nord, ainsi que celle de la faune, sont inutilement mises en péril au nom d’une idée erronée de progrès et de croissance. Étant l’un de plus grands pays arctiques au monde, le Canada a la responsabilité de se distancier de tout projet ravageur de la nature, et de promouvoir un développement vraiment durable dans le Nord. La campagne Arctique de Greenpeace est un effort mondial pour interdire toute activité destructive dans l’océan Arctique. Ensemble, #SauvonslArctique !',
		url: 'http://www.greenpeace.org/canada/fr/campagnes/',
		contributorCount: 15
	}, {
		id: 3,
		name: 'Shaved head challenge',
		logo: 'data:image/png;base64,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',
		image: 'https://www.tetesrasees.com/wp-content/uploads/2018/04/574539_10152874021380644_1780884272_n-e1523371245652.jpg',
		description: 'Leucan is proud to launch the 18th edition of the Leucan Shaved Head Challenge, presented by PROXIM today and to invite our next generation of leaders to join the Leucan Leadership Challenge',
		url: 'https://www.tetesrasees.com/en/category/news/',
		contributorCount: 15
	}]
