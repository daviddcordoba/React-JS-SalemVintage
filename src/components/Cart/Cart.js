import CartList from "./CartList"
import './Cart.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom";

const Cart = () => {
    const {clear,cart} = useContext(CartContext)
    

    return(
        <div className="container cartContainer">
            {
                cart.length === 0 ? <Link to='/productos'><h2>No hay items, volver a comprar</h2> </Link>
                                    :(<table>
                                        <thead>
                                            <tr>
                                                <th>Producto</th>
                                                <th>Cantidad</th>
                                                <th>SubTotal</th>
                                                <th><DeleteIcon onClick={()=>clear()}/>Vaciar</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            <CartList/>
                                        </tbody>
                        
                                        <tfoot>
                                            <tr>
                                                <th>Total : ${cart.reduce((acc,prod) => acc + (prod.price*prod.quantity), 0)} </th>
                                            </tr>
                                        </tfoot>
                                    </table>)
            }
            
        </div>
    )
}

export default Cart