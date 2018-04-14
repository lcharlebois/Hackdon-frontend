// @flow
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const SwipeCard = () => {
	return (
		<Card centered >
			<Image src={require('static/images/avatar-user.png')} />
			<Card.Content>
				<Card.Header>
					Matthew
				</Card.Header>
				<Card.Meta>
					<span className='date'>
						Joined in 2015aaa
					</span>
				</Card.Meta>
				<Card.Description>
					Matthew is a musician living in Nashville.
				</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<a>
					<Icon name='user' />
					22 Friends
				</a>
			</Card.Content>
		</Card>
	)
}

export default SwipeCard
