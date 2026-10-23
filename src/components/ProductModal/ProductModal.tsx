import './ProductModal.scss'
import { useEffect, useRef, useState } from "react"
import type { Product } from "../../types/product"
import { formatCurrency } from "../../utils/formatCurrency"

type ProductModalProps = {
    product: Product
    onClose: () => void
}

export const ProductModal = ({product, onClose}: ProductModalProps) => {
    const [quantity, setQuantity] = useState(1)

    const dialogRef = useRef<HTMLDialogElement | null>(null)
    useEffect(() => {
        const modal = dialogRef.current
        if (!modal) return
        modal.showModal()
        return () => {
            if (modal) {
                modal.close()
            }
        }
    }, [])

    const handleClose = () => {
        dialogRef.current?.close()
        onClose()
    }

    return (
        <dialog 
            className="product-modal" 
            aria-labelledby="modal-title" 
            ref={dialogRef} 
            onCancel={(event) => {
                event.preventDefault()
                handleClose()
            }}
        >
            <button type="button" className="modal-close" onClick={handleClose} aria-label="Fechar detalhes do produto">X</button>
            <div className="modal-image">
                <img src={product.photo} alt={product.productName} />
            </div>
            <div className="modal-content">
                <div className="modal-info">
                    <h2 id="modal-title">{product.productName}</h2>
                    <p className='modal-price'>{formatCurrency(product.price)}</p>
                    <p className='modal-description'>{product.descriptionShort}</p>
                    <a className='modal-link' href="#">{`Veja mais detalhes do produto >`}</a>
                </div>
                <div className="modal-actions">
                    <div className="qtd-count">
                        <button 
                            className='qtd-btn' 
                            type="button" 
                            aria-label="Diminuir quantidade"
                            onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                            disabled={quantity === 1}
                        > - </button>
                        <span className='product-qtd'>{quantity}</span>
                        <button 
                            className='qtd-btn' 
                            type="button" 
                            aria-label="Aumentar quantidade"
                            onClick={() => setQuantity((current) => current + 1)}
                        > + </button>
                    </div>
                    <a href='#' className="buy-button">Comprar</a>
                </div>
            </div>
        </dialog>
    )
}