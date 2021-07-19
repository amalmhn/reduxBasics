import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {setProducts} from '../Redux/Actions/ProductActions'
import { useHistory } from 'react-router-dom'

function ProductListing() {

    const products = useSelector(state => state.allProducts.products)
    console.log(products) 

    const history = useHistory()

    const dispatch = useDispatch();

    const fetchProducts = async ()=>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts").catch((err)=>{
            console.log(err)
        })
        dispatch(setProducts(response.data))
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                <th>User ID</th>
                <th>ID</th>
                <th>Title</th>
                </tr>
                </thead>
                <tbody>
                   {products ? products.map((itm)=>{
                       return(

                    <tr onClick={()=>{
                        history.push(`/products/${itm.id}`)
                    }}>
                        <td>{itm.id}</td>
                        <td>{itm.userId}</td>
                        <td>{itm.title}</td>
                    </tr>
                       )
                   }) : <h1>Loading...</h1>}
                        
                    
                </tbody>
            </table>

        </div>
    )
}

export default ProductListing
