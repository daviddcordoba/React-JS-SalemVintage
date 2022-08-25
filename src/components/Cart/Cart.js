import CartList from "./CartList"
import './Cart.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext, useState } from "react"
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore} from 'firebase/firestore'

const Cart = () => {
    
    const {clear,cart} = useContext(CartContext)

    const [formData, setFormData] = useState({
        name: '',
        email:'',
        phone:''
    })
    
    const handleChange = (e) => {setFormData( {...formData, [e.target.name]: e.target.value} )}
    

    const order ={
        buyer:{
            name: formData.name,
            email:formData.email,
            phone:formData.phone
        },
        items: cart.map(product => ({
            id : product.id,
            title: product.title,
            price: product.price,
            quantity: product.quantity
        })),

        total: cart.reduce((acc,prod) => acc + (prod.price*prod.quantity), 0) ,
    }
    
    
    const [showForm, setShowForm] = useState(false)

    const orderGenerate = (newOrder) =>{
        /* Intancia de firestore y referencia */
        const db = getFirestore()
        const ordersCollection = collection(db,'orders')

        /* Promesa para que guarde order en ordersCollection*/

        addDoc(ordersCollection,newOrder)
                                        .then( setTimeout(() => {setShowForm(false)}, 2000))
                                        .catch( error => console.log('erro:', error))
        
        
    }

    const sendData = (e) => {
        e.preventDefault()
        orderGenerate({...order,buyer:formData});
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
                                                <th><button onClick={()=>setTimeout(() => {setShowForm(true)}, 2000)}>Siguiente</button></th>
                                            </tr>
                                        </tfoot>
                                    </table>)
            }
            
            {showForm && (<form onSubmit={sendData}>
                            <input 
                            type='text' 
                            name='name' 
                            placeholder= "Ingresa tu nombre"
                            value={formData.name}
                            onChange = {handleChange}
                            />
                            <input 
                            type='number' 
                            name='phone'
                            placeholder="Ingresa tu telefono"
                            value={formData.phone} 
                            onChange = {handleChange}
                            />
                            <input 
                            type='email' 
                            name='email' 
                            placeholder="Ingresa tu email"
                            value={formData.email} 
                            onChange = {handleChange}
                            />
                            
                            <button type="submit">Enviar</button>
                        </form>) }
            
        </div>
    )
}

export default Cart