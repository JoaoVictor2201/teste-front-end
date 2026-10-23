import type { Product } from '../types/product'

type ProductsResponse = {
    success: boolean
    products: Product[]
}

export const getProducts = async (): Promise<Product[]> => {
    const url = '/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error(`Erro na API! status: ${response.status}`)
    }
    const data: ProductsResponse = await response.json()
    if (data.success !== true) {
        throw new Error('Erro na API! valor de success inválido')
    }
    if (!Array.isArray(data.products)) {
        throw new Error('Erro na API! resposta não contém um array válido de produtos')
    }
    return data.products
}