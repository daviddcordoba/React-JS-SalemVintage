import './ItemDetail.scss'
import React  from 'react'
import ItemCount from '../Item/ItemCount'


const ItemDetail = ({dataDetail}) => {

    const {title,price,image,stock}= dataDetail
    
    return(
            <>
        <div className="container detalle-producto">
            <div className='row '>
                <div className='imageProduct col-lg-4'>
                    <img src={image} alt='detail'/>
                </div>
                <div className='descriptionProduct col-lg-6'>
                    <p>Inicio/ {title}</p>
                    <h1>{title}</h1>
                    <h4>${price}</h4>
                        <select>
                            <option>Talle</option>
                            <option>XXL</option>
                            <option>XL</option>
                            <option>L</option>
                            <option>M</option>
                            <option>S</option>
                        </select>
                    <div className='subFila'>

                        <div className='contadorProductos '>
                            {
                            <ItemCount dataStock={stock} dataDetail={dataDetail}/>
                            }
                            
                        </div>
                    
                    </div>
                    <h3>Detalle de producto</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
                </div>
            </div>
        
        </div>
            </>
    )
}

export default ItemDetail
