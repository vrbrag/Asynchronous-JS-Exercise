let base_url = "http://deckofcardsapi.com/api/deck"

// 1.
async function shuffleAndDraw() {
   let res = await axios.get(`${base_url}/new/draw`)
   // console.log(res)
   let { suit, value } = res.data.cards[0]
   console.log(`${value} of ${suit} `)
}
// shuffleAndDraw()

// 2.
async function drawTwice() {
   let firstCard = await axios.get(`${base_url}/new/draw`)
   let deckID = firstCard.data.deck_id
   let secondCard = await axios.get(`${base_url}/${deckID}/draw`)

   console.log(firstCard.data)
   console.log(secondCard.data)

   [firstCard, secondCard].forEach(card => {
      console.log(
         `${card.suit} of ${card.value}`
      )
   })
}
// drawTwice()

// 3. 
async function fiveTwoCardPickup() {
   let $btn = $('button')
   let $cardArea = $('#card-area')

   let new_deck = await $.getJSON(`${base_url}/new/shuffle`)
   let deckID = new_deck.deck_id
   $btn.show()

   $btn.on('click', async function () {
      let drawCard = await $.getJSON(`${base_url}/${deckID}/draw`)
      console.log(drawCard)
      let cardSrc = drawCard.cards[0].image;
      let angle = Math.random() * 90 - 45
      $cardArea.append(
         $('<img>', {
            src: cardSrc,
            css: { transform: `rotate(${angle}deg)` }
         })
      )
      if (drawCard.remaining === 0) $btn.remove()
   })

}
fiveTwoCardPickup()