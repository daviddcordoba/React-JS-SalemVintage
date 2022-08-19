
import Item from "../Item/Item"


const ItemList = ({dataProducts}) => {
    return (
        <> 
        {dataProducts.map( (products) => <Item data={products} key={products.id} />)}
        </>

    )
}

export default ItemList