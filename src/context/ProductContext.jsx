import axios from 'axios';
import { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext();

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const comingData = async() => {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data);
        }
        comingData();
    },[])

    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductContext.Provider>
    )
}