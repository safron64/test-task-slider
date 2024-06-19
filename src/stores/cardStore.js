import { makeAutoObservable } from 'mobx'

class CardStore {
	cards = []
	baseCard = null
	currentIndex = 0
	showControls = false
	visibleCardsCount = 0

	constructor() {
		makeAutoObservable(this)
	}

	addCard(value) {
		const newCard = { id: Date.now(), value }
		this.cards = [...this.cards, newCard]
	}

	deleteCard(id) {
		this.cards = this.cards.filter(card => card.id !== id)
	}

	setBaseCard(id) {
		this.baseCard = this.cards.find(card => card.id === id)
	}

	deleteBaseCard() {
		this.cards = this.cards.filter(card => card.id !== this.baseCard.id)
		this.baseCard = null
	}

	setCurrentIndex(index) {
		this.currentIndex = index
	}

	setShowControls(show) {
		this.showControls = show
	}

	setVisibleCardsCount(count) {
		this.visibleCardsCount = count
	}

	next() {
		if (this.currentIndex < this.cards.length - this.visibleCardsCount) {
			this.currentIndex += 1
		}
	}

	prev() {
		if (this.currentIndex > 0) {
			this.currentIndex -= 1
		}
	}
}

export const cardStore = new CardStore()
