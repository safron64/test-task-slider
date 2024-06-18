import React, { useState, useRef } from 'react'
import { AddElementBtn, SliderContainer, SliderWrapper } from './Slider.styles'
import Card from '../Card/Card'
import BaseCard from '../BaseCard/BaseCard'
import SliderControls from './SliderControls'

const Slider = () => {
	const [cards, setCards] = useState([])
	const [baseCard, setBaseCard] = useState(null)
	const [currentIndex, setCurrentIndex] = useState(0)
	const sliderRef = useRef(null)

	const handleAddCard = () => {
		const newCard = { id: Date.now(), value: `Card ${cards.length + 1}` }
		setCards([...cards, newCard])
	}

	const handleDeleteCard = id => {
		setCards(cards.filter(card => card.id !== id))
	}

	const handleDeleteBaseCard = () => {
		setBaseCard(null)
	}

	const handleSetBaseCard = id => {
		const baseCard = cards.find(card => card.id === id)
		setBaseCard(baseCard)
		setCards(cards.filter(card => card.id !== id))
	}

	const handleNext = () => {
		if (currentIndex < cards.length) {
			setCurrentIndex(currentIndex + 1)
		}
	}

	const handlePrev = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1)
		}
	}

	return (
		<div>
			<AddElementBtn onClick={handleAddCard}>+ elem</AddElementBtn>
			<SliderContainer>
				<SliderWrapper
					style={{
						transform: `translateX(-${currentIndex * 220}px)`,
					}}
					ref={sliderRef}
				>
					{baseCard && (
						<BaseCard
							value={baseCard.value}
							onDelete={handleDeleteBaseCard}
						/>
					)}
					{cards.map(card => (
						<Card
							key={card.id}
							id={card.id}
							value={card.value}
							onDelete={handleDeleteCard}
							onSetBase={handleSetBaseCard}
						/>
					))}
				</SliderWrapper>
				<SliderControls
					onPrev={handlePrev}
					onNext={handleNext}
					showPrev={currentIndex > 0}
					showNext={
						currentIndex < cards.length + (baseCard ? 0 : 1) - 1
					}
				/>
			</SliderContainer>
		</div>
	)
}

export default Slider
