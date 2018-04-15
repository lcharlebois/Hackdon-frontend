/**
 * @flow
 */
import React from 'react'
import Helmet from 'react-helmet'
import { Grid, Button, Header, Image, Icon, Divider } from 'semantic-ui-react'
import ProfilProject from './ProfilProject'
import { NavLink } from 'react-router-dom'
import _ from 'lodash'
import Cookies from 'js-cookie'

export default class Profil extends React.Component {
	render () {
		return (
			<div>
				<Helmet>
					<title>Profil</title>
				</Helmet>
				<Header as='h2'>
					<Image src={user.photo} />
					<Header.Content>
						{user.name}
						<Header.Subheader>
							Vous donnez {Cookies.get('credit') | 0}$ par mois
						</Header.Subheader>
					</Header.Content>
					<Button to='/subscribe' floated='right' as={NavLink} color='orange'>Modifier votre don mensuel</Button>
				</Header>
				<Divider />
				<br />
				<Header as='h4'>
					<Icon name='unordered list' />
					<Header.Content>
						Vos donations
					</Header.Content>
				</Header>
				<br />
				<Grid columns='equal' divided>
					{_.map(projects, (item, i) => {
						return <ProfilProject key={i} {...item} onValueChange={this.onChange} />
					})}
				</Grid>
				<br />
				<br />
				<Button floated='right' color='orange' onClick={this.onSave}>Enregistrer</Button>
			</div>
		)
	}
}

const user = {
	name: 'Jean don pah',
	photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU1gJrTqXMz_DO0hDOyo2cMMJ76hmIfrTMA5mCalphghLhxkTj',
	credits: 2
}

var projects = [
	{
		id: 1,
		name: 'Fondation du CHUS - Cour en tête',
		icon: 'http://www.fondationchus.org/clients/Fondation/activites/coeur_en_tete/coeur_en_tete_logo.jpg',
		desc: 'Coeur en tête, c’est la bataille de Nathalie  Buisson, cette formidable danseuse des Grands Ballets Canadiens chez qui on diagnostiquait  en  2004  une  tumeur cérébrale maligne incurable. Sur sa route, elle a rencontré Dr David Fortin, neuro-chirurgien et neuro-oncologue au Centre hospitalier universitaire de Sherbrooke, qui lui prodigua un traitement précurseur permettant  de  combattre  les  tumeurs cérébrales.',
		link: 'http://www.fondationchus.org/activites-de-financement/coeur-en-tete/',
		percentage: 30
	}, {
		id: 2,
		name: 'Fondation du CHUS - Le futur centre Mère-Enfant',
		icon: 'http://www.chus.qc.ca/uploads/pics/CHUS_CFJF_2013.jpg',
		desc: 'Renouvellement des salles d’angiographie et de radiologie interventionnelle. Renouvellement des salles de cardiologie interventionnelle. Réaménagement majeur du Pavillon Émile-Noël, consacré à la santé mentale',
		link: 'http://www.fondationchus.org/realisations/projets-majeurs/',
		percentage: 25
	}, {
		id: 2,
		name: 'Greenpeace - L’Arctique ',
		icon: 'http://www.greenpeace.org/canada/Global/canada/image/2012/06/GP0506.jpg',
		desc: 'L’Arctique est en danger. À cause des changements climatiques, la fonte des glaces s’accélère et ouvre le chemin aux compagnies pétrolières et aux flottes de pêche assoiffées de profits qui voient dans cette catastrophe une opportunité d’affaires. La survie et la culture des peuples autochtones et de tous les habitants du Nord, ainsi que celle de la faune, sont inutilement mises en péril au nom d’une idée erronée de progrès et de croissance. Étant l’un de plus grands pays arctiques au monde, le Canada a la responsabilité de se distancier de tout projet ravageur de la nature, et de promouvoir un développement vraiment durable dans le Nord. La campagne Arctique de Greenpeace est un effort mondial pour interdire toute activité destructive dans l’océan Arctique. Ensemble, #SauvonslArctique !',
		link: 'http://www.greenpeace.org/canada/fr/campagnes/',
		percentage: 15
	}, {
		id: 3,
		name: 'LEUCAN shaved head challenge',
		icon: 'https://www.tetesrasees.com/wp-content/uploads/2018/04/574539_10152874021380644_1780884272_n-e1523371245652.jpg',
		desc: 'Leucan is proud to launch the 18th edition of the Leucan Shaved Head Challenge, presented by PROXIM today and to invite our next generation of leaders to join the Leucan Leadership Challenge',
		link: 'https://www.tetesrasees.com/en/category/news/',
		percentage: 15
	}]
