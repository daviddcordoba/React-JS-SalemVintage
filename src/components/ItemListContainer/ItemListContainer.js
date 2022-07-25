
import ItemProduct from '../ItemProduct/ItemProduct'
import './ItemListContainer.scss'

const ItemListContainer = ({titulo}) => {
    const product1 ={
        title: 'Camisa Black Lillies',
        price: 10000,
        image: "https://sc04.alicdn.com/kf/HLB1iMKPU3HqK1RjSZFEq6AGMXXac.jpg",
        stock: 6
    }
    
    return(
        <div className='list-products'>
            <h2>{titulo}</h2>
            <div className='products-container'> 
            <ItemProduct data={product1} />
            </div>

            
        </div>
    )
}

export default ItemListContainer