import { Banner } from "./components/Banner/Banner"
import { Categories } from "./components/Categories/Categories"
import { Header } from "./components/Header/Header"
import { ProductCard } from "./components/ProductCard/ProductCard"
import type { Product } from "./types/product"

function App() {
  const product: Product = {
    "productName": "IPHONE 13 MINI 4",
    "descriptionShort": "IPHONE 13 MINI 4",
    "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
    "price": 520
  }

  return (
    <>
      <Header />
      <main>
        <Banner />
        <Categories />
        <ProductCard product={product} />
      </main>
    </>
  )
}

export default App
