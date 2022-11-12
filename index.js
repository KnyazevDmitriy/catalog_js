fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then((data) => {
    console.log(data.products);
    const wrapper = document.querySelector('.wrapper')

    data.products.forEach((element, index) => {
      const card = document.createElement('div')
      card.setAttribute('style', 'width: 18rem;')
      card.classList.add('card', `col-${index % 4 + 1}`)

      const img = document.createElement('img')
      img.setAttribute('src', element.thumbnail)
      img.setAttribute('alt', element.brand)
      img.classList.add('card-img-top')

      const cardBody = document.createElement('div')
      cardBody.classList.add('card-body')

      const cardTitle = document.createElement('h5')
      cardTitle.classList.add('card-title')
      cardTitle.textContent = element.title

      const cardText = document.createElement('p')
      cardText.classList.add('card-text')
      cardText.textContent = element.description

      const cardFooter = document.createElement('div')
      cardFooter.classList.add('card-footer', 'justify-content-between', 'd-flex')

      const cardPrice = document.createElement('small')
      cardPrice.classList.add('price', 'text-muted')
      cardPrice.textContent = `Price: `

      const cardBoldPrice = document.createElement('b')
      cardBoldPrice.textContent = `${element.price}$`

      const cardRating = document.createElement('small')
      cardRating.classList.add('rating', 'text-muted')
      cardRating.textContent = `Rating: `

      const cardBoldRating = document.createElement('b')
      cardBoldRating.textContent = `${element.rating}`

      cardPrice.appendChild(cardBoldPrice)
      cardFooter.appendChild(cardPrice)
      cardRating.appendChild(cardBoldRating)
      cardFooter.appendChild(cardRating)
      cardBody.appendChild(cardTitle)
      cardBody.appendChild(cardText)
      cardBody.appendChild(cardFooter)
      card.appendChild(img)
      card.appendChild(cardBody)
      wrapper.appendChild(card)
    })
  })