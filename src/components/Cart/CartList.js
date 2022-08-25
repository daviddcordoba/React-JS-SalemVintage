import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
const CartList = ()=> {
    const {cart,removeItem,addToCart} = useContext(CartContext)

    return(
        <>
        {cart.map( product => {
            return(
                
                    <tr key={product.id} >
                        <td><button onClick={()=>addToCart(product,0)}><AddIcon/></button>{product.title}<button onClick={()=>{removeItem(product.id)}}><RemoveIcon/></button></td>
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