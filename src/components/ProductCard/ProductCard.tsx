import "./ProductCard.scss"
import type { Product }  from "../../types/product"
import { formatCurrency } from "../../utils/formatCurrency"

type ProductCardProps = {
    product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
    const { productName, descriptionShort, photo, price } = product
    return (
            <article className="product-card">
                <img className="product-image" src={photo} alt={productName} />
                <h3 className="product-name">{productName}</h3>
                <span className="product-description">{descriptionShort}</span>
                <span className="product-previous-price">R${formatCurrency(price + 400)}</span>
                <p className="product-price">R${formatCurrency(price)}</p>
                <span className="installment-info">ou 2x de R${formatCurrency(price / 2)} sem juros</span>
                <span className="shipping-info">Frete grátis</span>
                <button type="button" className="product-button">Comprar</button>
            </article>
    )
}