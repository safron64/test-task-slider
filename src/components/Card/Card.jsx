import React from 'react'
import { CardContainer, Button, Flex } from './Card.styles'

const Card = ({ id, value, onDelete, onSetBase }) => {
	return (
		<CardContainer>
			<h3>{value}</h3>
			<Flex>
				<Button onClick={() => onDelete(id)}>DEL</Button>
				<Button onClick={() => onSetBase(id)}>BASE</Button>
			</Flex>
		</CardContainer>
	)
}

export default Card
