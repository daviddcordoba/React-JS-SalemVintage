import './ItemListContainer.scss'

const ItemListContainer = ({titulo}) => {

    return(
        <div className='list-products'>
            <h2>{titulo}</h2>
            <div className='products-container'> 
                <div className='product'>Soy un producto</div>
                <div className='product'>Soy otro producto</div>
            </div>
        </div>
    )
}

export default ItemListContainer