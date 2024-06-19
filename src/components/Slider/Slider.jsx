import React, { useRef, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { cardStore } from '../../stores/cardStore'
import { AddElementBtn, SliderContainer, SliderWrapper } from './Slider.styles'
import Card from '../Card/Card'
import BaseCard from '../BaseCard/BaseCard'
import SliderControls from './SliderControls'
import {
	handleAddCard,
	handleDeleteCard,
	handleDeleteBaseCard,
	handleSetBaseCard,
	handleNext,
	handlePrev,
} from '../../utils/cardActions'

const Slider = observer(() => {
	const sliderRef = useRef(null)

	useEffect(() => {
		const handleResize = () => {
			const sliderWidth = sliderRef.current.clientWidth
			const cardWidth = 220 // предполагаемая ширина карточки
			const visibleCardsCount = Math.floor(sliderWidth / cardWidth)

			cardStore.setShowControls(
				cardStore.cards.length > visibleCardsCount
			)
		}

		window.addEventListener('resize', handleResize)
		handleResize()

		return () => window.removeEventListener('resize', handleResize)
	}, [cardStore.cards.length])

	return (
		<div>
			<AddElementBtn onClick={handleAddCard} className="mb-3">
				+ elem
			</AddElementBtn>
			<SliderContainer>
				<SliderWrapper
					style={{
						transform: `translateX(-${
							cardStore.currentIndex * 220
						}px)`,
						transition: 'transform 0.3s ease-in-out',
					}}
					ref={sliderRef}
				>
					{cardStore.baseCard && (
						<BaseCard
							value={cardStore.baseCard.value}
							onDelete={handleDeleteBaseCard}
						/>
					)}
					{cardStore.cards.map(card => (
						<Card
							key={card.id}
							id={card.id}
							value={card.value}
							onDelete={() => handleDeleteCard(card.id)}
							onSetBase={() => handleSetBaseCard(card.id)}
						/>
					))}
				</SliderWrapper>
				{cardStore.showControls && (
					<SliderControls
						onPrev={handlePrev}
						onNext={handleNext}
						showPrev={cardStore.currentIndex > 0}
						showNext={
							cardStore.currentIndex < cardStore.cards.length - 1
						}
					/>
				)}
			</SliderContainer>
		</div>
	)
})

export default Slider
