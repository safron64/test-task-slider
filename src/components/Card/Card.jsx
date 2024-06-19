import React from 'react'
import { CardContainer, Button, Flex } from './Card.styles'

const Card = ({ id, value, onDelete, onSetBase }) => {
	return (
		<CardContainer>
			<p>{value}</p>
			<Flex>
				<Button onClick={() => onDelete(id)}>DEL</Button>
				<Button onClick={() => onSetBase(id)}>BASE</Button>
			</Flex>
		</CardContainer>
	)
}

export default Card
