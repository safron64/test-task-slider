import { cardStore } from '../stores/cardStore'

export const handleAddCard = () => {
	cardStore.addCard(`Card ${cardStore.cards.length + 1}`)
}

export const handleDeleteCard = id => {
	cardStore.deleteCard(id)
}

export const handleDeleteBaseCard = () => {
	cardStore.deleteBaseCard()
}

export const handleSetBaseCard = id => {
	cardStore.setBaseCard(id)
}

export const handleNext = () => {
	cardStore.next()
}

export const handlePrev = () => {
	cardStore.prev()
}
