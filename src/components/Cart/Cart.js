import CartList from "./CartList"
import './Cart.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext, useState } from "react"
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore} from 'firebase/firestore'

const Cart = () => {
    const {clear,cart} = useContext(CartContext)

    const order ={
        buyer:{
            name: '',
            email:'',
            phone:'',
            adress:''
        },
        items: cart.map(product => ({
            id : product.id,
            title: product.title,
            price: product.price,
            quantity: product.quantity
        })),
        total:cart.reduce((acc,prod) => acc + (prod.price*prod.quantity), 0) ,
    }

    const [showForm, setShowForm] = useState(false)
    const orderGenerate = () =>{
        /* Intancia de firestore y referencia */
        const db = getFirestore()
        const ordersCollection = collection(db,'orders')

        /* Promesa para que guarde order en ordersCollection*/

        addDoc(ordersCollection,order)
                                        .then( ({id}) => console.log(id))

        
        setTimeout(() => {
            setShowForm(true)
        }, 2000);
    }
    
    const handlechange = (e) => {
        order.buyer.e.target.value
    }
    
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
                                                <th><button onClick={orderGenerate}>Generar orden</button></th>
                                            </tr>
                                        </tfoot>
                                    </table>)
            }
            
            {showForm && (<form>
                            <input 
                            type='text' 
                            name='name' 
                            placeholder= "Ingresa tu nombre"
                            value={order.buyer.name}
                            onChange = {handlechange}
                            />
                            <input 
                            type='number' 
                            name='phone'
                            placeholder="Ingresa tu telefono"
                            value={order.buyer.phone} 
                            />
                            <input 
                            type='email' 
                            name='email' 
                            placeholder="Ingresa tu email"
                            value={order.buyer.email} 
                            />
                            
                            
                            <button>Enviar</button>
                        </form>) }
            
        </div>
    )
}

export default Cart