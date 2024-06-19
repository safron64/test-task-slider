import React from 'react'
import {
	BaseCardContainer,
	BaseTitle,
	Button,
	FLexColumn,
} from './BaseCard.styles'

const BaseCard = ({ value, onDelete }) => (
	<BaseCardContainer>
		<BaseTitle>BASE CARD</BaseTitle>
		<FLexColumn>
			{' '}
			<div>{value}</div>
			<Button onClick={onDelete}>DEL</Button>
		</FLexColumn>
	</BaseCardContainer>
)

export default BaseCard
