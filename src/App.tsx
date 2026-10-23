import { useState, useEffect } from "react"
import { Banner } from "./components/Banner/Banner"
import { Categories } from "./components/Categories/Categories"
import { Header } from "./components/Header/Header"
import type { Product } from "./types/product"
import { getProducts } from "./services/products"
import { ProductCarousel } from "./components/ProductCarousel/ProductCarousel"
import { ProductModal } from "./components/ProductModal/ProductModal"

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  useEffect(() => {
    let ignore = false
    const loadProducts = async () => {
      try {
        const result = await getProducts()
        if (!ignore) {
          setProducts(result)
        }
      } catch (err) {
        if (!ignore) {
          setError((err as Error).message)
        }
      } finally {
        if (!ignore) {
          setLoading(false)
        }
      }
    }
    loadProducts()
    return () => {
      ignore = true
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        <Banner />
        <Categories />
        {loading && <p>Carregando produtos...</p>}
        {error && <p>Erro ao carregar produtos: {error}</p>}
        {!loading && !error && (
          <div className="container">
            <h2 className="section-title" id="produtos">Produtos relacionados</h2>
            <ProductCarousel products={products} onSelect={setSelectedProduct} />
          </div>
        )}
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </main>
    </>
  )
}

export default App
