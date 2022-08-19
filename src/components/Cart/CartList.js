import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import RemoveIcon from '@mui/icons-material/Remove';
const CartList = ()=> {
    const {cart,removeItem} = useContext(CartContext)

    return(
        <>
        {cart.map( product => {
            return(
                
                    <tr key={product.id} >
                        <td>{product.title}<button onClick={()=>{removeItem(product.id)}}><RemoveIcon/></button></td>
                        <td>{product.quantity}</td>
                        <td>{product.price*product.quantity}</td>
                    </tr>
                )
        })
        }
        </>

    )
}

export default CartList