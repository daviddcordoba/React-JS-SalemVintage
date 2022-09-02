import { React,useEffect, useState} from 'react'
import './ItemListContainer.scss'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection,getDocs } from 'firebase/firestore'
import db from '../../firebaseConfig'

const ItemListContainer = ({titulo}) => {

    const {categoryName} = useParams()
    
    const [listProducts, setListProducts] = useState([])
    
    const getProducts = async () => {
        const productCollection = collection(db, 'productos')
        const productSnapshot = await getDocs(productCollection)
        
        const productList = productSnapshot.docs.map( (documents) => {
            let product = documents.data()
            product.id = documents.id
            /* product.categoryName = categoryName */
            return product
            
        })
        const filterByCategory = productList.filter( item => item.categoryName === categoryName) 
        if(categoryName){
            return filterByCategory
        }else{
            return productList

        }

    }
    

    useEffect ( () =>{
        getProducts()
                        .then( res => setListProducts(res))
                        .catch( err => console.log('error:',err))
    }, [categoryName] ) 
    
    return(
        
        <div className='list-products'>
            <h2>{titulo}</h2>
            <div className='products-container container'>
                <div className='row'>
                    <ItemList dataProducts={listProducts} /> {/* muestra los productos por pantalla */}
                </div> 
            </div>
        </div>
        
    )
}

export default ItemListContainer