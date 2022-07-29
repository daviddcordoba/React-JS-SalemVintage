
import './Item.scss'
import ItemCount from './ItemCount';

const Item = ({data}) => {

    const {title,price,image,stock}=data

    return(
        <div className='item-product'>
            <img src={image} alt='producto' />
            <p>{title}</p>
            <span>$ {price}</span>
            <div className='contadorProductos'>
                <ItemCount data={stock}/>
            </div>
            <button > Comprar </button>
        </div>
    )
}

export default Item




