import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';

const ItemCount = ({dataStock,dataDetail}) => {

    const [contador,setContador] = useState(1)

    const {addToCart} = useContext(CartContext)
    
    // aumenta contador
    const addNumber = () => {
        if(dataStock>contador){ 
        setContador(contador + 1)
        }
    }

    //disminuye contador
    const deleteNumber = () => {
        if( contador!==0)
        setContador(contador - 1)
    }

    // agregar al carrito desde Detail
    const onAdd = () => {

        /* console.log(contador); */
        addToCart(dataDetail,contador)

    }
    return( 
        <>
            <button onClick={deleteNumber}> - </button>
            <p >{contador}</p>
            <button onClick={addNumber}> + </button>
            <button onClick={()=>onAdd()}> Agregar al carrito </button>
        </>
    )
} 


export default ItemCount