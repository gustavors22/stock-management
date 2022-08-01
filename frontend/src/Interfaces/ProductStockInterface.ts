import { ProductInterface } from "./ProductInterface"

export interface ProductStockInterface {
    id: number,
    product_id: number,
    quantity: number,
    created_at: string,
    updated_at: string
    product: ProductInterface
}
