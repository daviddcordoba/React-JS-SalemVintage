import './Item.scss'
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const Item = ({data}) => {

    const {title,price,image,id}=data
    const {addToCart} = useContext(CartContext)
    
    return(
        <div className='item-product'>
            <Link  className='link' to={`/productos/${id}`}>
                <img src={image} alt='producto' />
            </Link>
            <p>{title}</p>
            <span>$ {price}</span>
            <button onClick = { () => addToCart({...data}) } > Agregar al carrito </button>
        </div>
    )
}

export default Item




