const API = {
  url: 'https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1',
  nextPage: '',
  products: {},

  async fetchProducts( url ) {
    let response = await fetch( url )
    let data = await response.json()
    API.nextPage = data.nextPage
    API.products = data.products
    return
  }
}


/* 
<div id="products-grid">
  <div class="product" id="prod-1">
    <img src="assets/productPlaceholder.png" alt="Imagem do produto">
    <h3>Nome do produto</h3>
    <p class="description">Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata.</p>
    <p class="oldPrice">De: R$23,99</p>
    <p class="price">Por: R$19,99</p>
    <p class="installments">ou 2x de R$9,99</p>

    <button>Comprar</button>
  </div>
*/

const DOM = {
  productsContainer: document.querySelector('#products-grid'),
  product: document.querySelectorAll('.product'),
  
  clearProducts() {
    DOM.productsContainer.innerHTML = ''
  },

  populateProducts() {
    console.log(DOM.product[0])


    API.products.forEach( product => {


      
      // console.log(product)
      // console.log(product.image)
      // console.log(product.name)
      // console.log(product.oldPrice)
      // console.log(product.price)
      // console.log(product.description)
      // console.log(product.installments.count)
      // console.log(product.installments.value)
    })
  }
}

const App = {
  init() {
    API.fetchProducts(API.url).then( () => {
      DOM.populateProducts()

    })

  }
}

App.init()