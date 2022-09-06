// on page load new deck is fetched
const pile = document.getElementById('pile')
let deckId

function oneCard() {
    return axios.get(`http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`).then((data) => {
        console.log(data.data.deck_id)
        deckId = data.data.deck_id
        return data.data.deck_id
    })

}
oneCard()


// draws one card
function drawOneCard() {
    return axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`).then((data) => {
        console.log(data)
        img = document.createElement('img')
        img.setAttribute('src', data.data.cards[0].image)
        img.className = 'card'
        pile.append(img)
    })
}

function removeCard() {
    pile.remove(oldCard)
}

const draw = document.getElementById('draw')
draw.addEventListener('click', drawOneCard)