import { useEffect, useState} from 'react'
import './ItemListContainer.scss'
import products from '../../utils/products.mock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({titulo}) => {

    const [listProducts, setListProducts] = useState([])

    const getProducts = new Promise( (resolve,reject) => {
        setTimeout( () => {
            resolve(products)
        }
        ,2000)
        
    })

    useEffect ( () =>{
        getProducts
                    .then( res => {
                        setListProducts(res)
                    })
                    .catch( error => {
                        console.log('error:', error);
                    })

    }, [] )
    
    return(
        <div className='list-products'>
            <h2>{titulo}</h2>
        
            <div className='products-container'> 
                <ItemList dataProducts={listProducts} />
            </div>

            
        </div>
    )
}

export default ItemListContainer