import "./ProductCard.scss"
import type { Product }  from "../../types/product"
import { formatCurrency } from "../../utils/formatCurrency"

type ProductCardProps = {
    product: Product
    onSelect: (product: Product) => void 
}

export const ProductCard = ({ product, onSelect }: ProductCardProps) => {
    const { productName, descriptionShort, photo, price } = product
    return (
            <article className="product-card">
                <img className="product-image" src={photo} alt={productName} />
                <h3 className="product-name">{productName}</h3>
                <span className="product-description">{descriptionShort}</span>
                <span className="product-previous-price">{formatCurrency(price + 400)}</span>
                <p className="product-price">{formatCurrency(price)}</p>
                <span className="installment-info">ou 2x de {formatCurrency(price / 2)} sem juros</span>
                <span className="shipping-info">Frete grátis</span>
                <button type="button" className="product-button" onClick={() => onSelect(product)}>Comprar</button>
            </article>
    )
}