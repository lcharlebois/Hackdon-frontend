// @flow
import React from 'react'
import {List, Grid, Image} from 'semantic-ui-react'

type Props = {
	link: string,
	name: string,
	desc: string,
	icon: string,
	pourcentage: string
}

const LinkItem = ({name, icon, desc, link, pourcentage}: Props) => {
	return (
		<Grid.Row>
			<Grid.Column width="3">
				<Image avatar src={icon} />
			</Grid.Column>
			<Grid.Column width="10">
				<List.Content>
					<List.Header as='a' href={link}>{name}</List.Header>
					<List.Description>{desc}</List.Description>
				</List.Content>
			</Grid.Column>
			<Grid.Column width="3">
				{pourcentage} %
			</Grid.Column>
		</Grid.Row>
	)
}

export default LinkItem
