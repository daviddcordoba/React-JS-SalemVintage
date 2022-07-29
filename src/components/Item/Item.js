import { useState } from 'react';
import './Item.scss'

const Item = ({data}) => {

    const {title,price,image,stock}=data
    const [contador,setContador] = useState(1)




    const addNumber = () => {
        if(stock>contador){ 
        setContador(contador + 1)
        }
    }
    const deleteNumber = () => {
        if( contador!==0)
        setContador(contador - 1)
    }

    return(
        <div className='item-product'>
            <img src={image} alt='producto' />
            <p>{title}</p>
            <span>$ {price}</span>
            <div className='contadorProductos'>
                <button onClick={deleteNumber}> - </button>
                <p>{contador}</p>
                <button onClick={addNumber}> + </button>
            </div>
            <button > Comprar </button>
        </div>
    )
}

export default Item




