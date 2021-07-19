import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { removeSelectedProducts, selectedProducts } from '../Redux/Actions/ProductActions';

function ProductDetails() {

    const product = useSelector(state => state.product.product)
    
    console.log(product)

    const {productId} = useParams();
    const dispatch = useDispatch()

    const fetchProductDetails= async()=>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${productId}`).catch((err)=>{
            console.log(err)
        })
        dispatch(selectedProducts(response.data));
    }

    useEffect(() => {
        fetchProductDetails();
        return ()=>{
            dispatch(removeSelectedProducts())
        }
    }, [productId])
    
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Id</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {product && <tr>
                        <td>{product.id}</td>
                        <td>{product.userId}</td>
                        <td>{product.title}</td>
                    </tr>}
                </tbody>
            </table>
        </div>
    )
}

export default ProductDetails
