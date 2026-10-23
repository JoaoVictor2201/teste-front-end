import './ProductCarousel.scss'
import type { Product } from "../../types/product"
import { ProductCard } from "../ProductCard/ProductCard"
import { useRef } from 'react'

interface CarouselProps {
    products: Product[]
    onSelect: (product: Product) => void
}

export const ProductCarousel = ({products, onSelect}: CarouselProps) => {
    const trackRef = useRef<HTMLUListElement | null>(null)
    function moveCarousel(direction: 1 | -1) {
        const track = trackRef.current
        if (!track) return

        const firstItem = track.firstElementChild
        if (!firstItem) return

        const itemWidth = firstItem.getBoundingClientRect().width
        const maxScroll = track.scrollWidth - track.clientWidth
        const atStart = track.scrollLeft <= 1
        const atEnd = track.scrollLeft >= maxScroll - 1
        if (maxScroll <= 1) {
            return
        }
        if (direction === 1 && atEnd) {
            track.scrollTo({left: 0, behavior:'smooth'})
            return
        }
        if (direction === -1 && atStart) {
            track.scrollTo({left: maxScroll, behavior:'smooth'})
            return
        }
        const gap = parseFloat(getComputedStyle(track).columnGap) || 0
        const distance = direction * (itemWidth + gap)
        track.scrollBy({left: distance, behavior: 'smooth'})
    }
    return (
        <section className="products-carousel">
            <button 
                type="button"
                className='carousel-btn previous'
                aria-label="Produtos Anteriores" 
                onClick={() => moveCarousel(-1)}
            >
                {'<'}
            </button>
                <ul className='products-list' ref={trackRef}>
                    {products.map((product) => (
                        <li key={product.productName}>
                            <ProductCard product={product} onSelect={onSelect} />
                        </li>
                    ))}
                </ul>
            <button 
                type="button"
                className='carousel-btn next'
                aria-label="Próximos Produtos" 
                onClick={() => moveCarousel(1)}
            >
                {'>'}
            </button>
        </section>
    )
}