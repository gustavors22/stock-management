import { useEffect, useState } from "react";
import { ProductInterface } from "../../Interfaces/ProductInterface";
import Input from "../Input";

interface SeeProductProps{
    productId: number | string
}

export default function SeeProduct(props: SeeProductProps){
    const [product, setProduct] = useState<ProductInterface>()

    const formatDate = (date: any) => new Date(date).toLocaleDateString()
    
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/products/${props.productId}`)
            .then(response => response.json())
            .then(data => setProduct(data))
    }, []);

    return (
        <>
            <div className="w-full max-w-xs">
                <form className="shadow-md rounded">
                    <Input label="Produto" value={product?.name} type="text" disabled={true}/>
                    <Input label="Preço" value={product?.price} type="text" disabled={true}/>
                    <Input label="Data de Criação" value={formatDate(product?.created_at)} type="text" disabled={true}/>
                    <Input label="Data de Modificação" value={formatDate(product?.updated_at)} type="text" disabled={true}/>
                </form>
                
            </div>
        </>
    )
}