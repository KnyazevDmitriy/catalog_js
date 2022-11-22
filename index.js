const cartShop = document.querySelector('.cart')
const closeBtn = document.querySelector('.close')
const cartBtn = document.querySelector('.cart-button')
const background = document.querySelector('.bg-gray')
const cart = document.querySelector('.cart')
const body = document.querySelector('body')
const line = document.querySelector('.line')
const totalPrice = document.querySelector('.total-price')
let price = 0.00
// let count = 0

fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then((data) => {
    console.log(data.products);
    const wrapper = document.querySelector('.wrapper')

    data.products.forEach((element, index) => {
      let count = 0
      
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
      cardFooter.classList.add('card-btn', 'justify-content-center', 'd-flex')

      const cardFooterInto = document.createElement('div')
      cardFooterInto.classList.add('card-footer', 'justify-content-between', 'd-flex')

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

      const addToCartButton = document.createElement('a')
      addToCartButton.classList.add('btn', 'btn-primary')
      addToCartButton.textContent = 'Add to cart'

      const product = document.createElement('div')
      product.classList.add('product')
      const productImg = document.createElement('img')
      productImg.classList.add('product-img')
      productImg.setAttribute('src', element.thumbnail)
      productImg.setAttribute('alt', element.brand)

      const productTitle = document.createElement('h5')
      productTitle.classList.add('product-title')
      productTitle.textContent = element.title

      const block = document.createElement('div')
      block.classList.add('product-block')

      const productMinus = document.createElement('button')
      productMinus.classList.add('product-minus')
      productMinus.textContent = '-'

      const productCount = document.createElement('div')
      productCount.classList.add('product-count')
      productCount.textContent = `${count}`

      const productPlus = document.createElement('button')
      productPlus.classList.add('product-plus')
      productPlus.textContent = '+'

      const removeProduct = document.createElement('button')
      removeProduct.classList.add('remove-product')
      removeProduct.textContent = 'Remove form order'

      removeProduct.addEventListener('click', () => {
        product.remove()
        
      })

      const clickOnAdd = addToCartButton.addEventListener('click', () => {
        cartBtn.textContent = `Your cart: ${price += currentPrice}$`
        productCount.textContent = `${++count}x${currentPrice}$`

        product.appendChild(productImg)
        product.appendChild(productTitle)
        block.appendChild(productMinus)
        block.appendChild(productCount)
        block.appendChild(productPlus)
        block.appendChild(removeProduct)
        product.appendChild(block)
        line.insertAdjacentElement('afterEnd', product)
      })

      function addProduct() {
        cartBtn.textContent = `Your cart: ${price += currentPrice}$`
        productCount.textContent = `${++ count}x${currentPrice}$`
        // totalPrice.textContent = `Total: ${price += currentPrice}$`
        if (count < 2) {
          productMinus.setAttribute('disabled', 'disabled')
        } else if (count > 1) {
          productMinus.removeAttribute('disabled', 'disabled')
        }
      }

      function abateProduct() {
        cartBtn.textContent = `Your cart: ${price -= currentPrice}$`
        productCount.textContent = `${-- count}x${currentPrice}$`
        // totalPrice.textContent = `Total: ${price -= currentPrice}$`
        console.log(count)

        if (count < 2) {
          productMinus.setAttribute('disabled', 'disabled')
        } else if (count > 1) {
          productMinus.removeAttribute('disabled', 'disabled')
        }
      }

      productPlus.addEventListener('click', addProduct)
      productMinus.addEventListener('click', abateProduct)


      const currentPrice = element.price


      const printFullPrice = () => {
        cartBtn.textContent = `Your cart: ${price}$`
        totalPrice.textContent = `Total: ${price}$`
      }
      printFullPrice()

      cardFooter.appendChild(addToCartButton)
      cardPrice.appendChild(cardBoldPrice)
      cardFooterInto.appendChild(cardPrice)
      cardRating.appendChild(cardBoldRating)
      cardFooterInto.appendChild(cardRating)
      cardBody.appendChild(cardTitle)
      cardBody.appendChild(cardText)
      cardBody.appendChild(cardFooterInto)
      cardBody.appendChild(cardFooter)
      card.appendChild(img)
      card.appendChild(cardBody)
      wrapper.appendChild(card)
    })
  }
)


cartBtn.addEventListener('click', () => {
  cartShop.classList.toggle('active')
  background.classList.toggle('active')
  body.setAttribute('style', 'overflow: hidden;')
})

closeBtn.addEventListener('click', () => {
  cartShop.classList.remove('active')
  background.classList.remove('active')
  body.removeAttribute('style', 'overflow: hidden;')
})

document.onclick = (event) => {
  if (event.target === background) {
    cartShop.classList.remove('active')
    background.classList.remove('active')
    body.removeAttribute('style', 'overflow: hidden;')
  }
}
