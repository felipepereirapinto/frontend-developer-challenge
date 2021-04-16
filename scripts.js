const API = {
  url: 'https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1',
  nextPage: '',
  products: {},

  async fetchProducts( url ) {
    let response = await fetch( url )
    let data = await response.json()

    API.nextPage = 'https://' + data.nextPage
    API.products = data.products
    return
  }
}

const DOM = {
  productsContainer: document.querySelector('#products-grid'),  

  populateProducts() {
    API.products.forEach( product => { 
      this.productsContainer.innerHTML += `
      <div class="product">
        <img src="https:${product.image}" alt="Imagem do produto ${product.name}">
        <h3>${product.name}</h3>
        <p class="description">${product.description}</p>
        <p class="oldPrice">De: ${Utils.parsePrice(product.oldPrice)}</p>
        <p class="price">Por: ${Utils.parsePrice(product.price)}</p>
        <p class="installments">ou ${product.installments.count}x de ${Utils.parsePrice(product.installments.value)}</p>
        <button>Comprar</button>
      </div>`
    })
  }
}

const Utils = {
  parsePrice(price) {
    return 'R$' + price.toFixed(2).replace('.',',')
  }
}

const App = {
  init() {
    API.fetchProducts(API.url).then( () => DOM.populateProducts() )
  },

  showMoreProducts() {
    API.fetchProducts(API.nextPage).then( () => DOM.populateProducts() )
  }
}

App.init()

