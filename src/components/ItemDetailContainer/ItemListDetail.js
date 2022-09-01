import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ItemDetail from "./ItemDetail"
//Firebase
import db from "../../firebaseConfig"
import {doc,getDoc} from 'firebase/firestore'


const ItemListDetail = () => {
    const [productDetail, setProductDetail] = useState({})
    
    const {id} = useParams()

    const getProduct = async () => {
        const docRef = doc(db, 'productos', id)
        const docSnapshot = await getDoc(docRef)

        let product = docSnapshot.data()
        product.id = id
        return product
    }
    
    useEffect ( () =>{
        getProduct()
                    .then( res => setProductDetail(res))
                    .catch( err => console.log('error: ', err))
    }, [id] )


    return (
        <> 
        <div className='detail-products'>
            <div className='details-container'>
                <ItemDetail dataDetail={productDetail} key={id} />
            </div>
        </div>
        </>
            

    )
}

export default ItemListDetail