import { createContext, useState } from "react";


export const CartContext = createContext()

const CartProvider = ({children}) => {  // componente q recibe un children(hijos q reciben la info)
    
    const [cart,setCart]= useState([])

    // Agregar al carrito
    const addToCart = (dataProduct,contador) => {

        const item = cart.find(prod => prod.id === dataProduct.id) // se crea si el elemento ya esta en el carrito

        if(item) // existe item?
        {
            if(contador > 1){ // ademas, me esta llegando una cantidad seleccionada
                item.quantity+=contador; // entonces a la cantidad de mi producto(que ya esta en el carrito) le sumo la cantidad seleccionada
            }
            else{ // si no me estaa llegando una cantidad seleccionada => aumento en uno la cantidad de mi producto
                item.quantity++ 
            }
        }
        else{ // NO existe item(no esta en el carrito)
            if(!contador){ // ademas, no existe contador(no hay una cantidad seleccionada)
                setCart([...cart,dataProduct]) // entonces se agrega el producto con cantidad 1 y lo que ya esta en el carro
            }
            else{ // si hay contador y ademas el producto no esta en carrito 
                dataProduct.quantity = contador // la cantidad de mi producto va a ser igual a la cantidad seleccionada que me esta llegadndo
                setCart([...cart,dataProduct]) // ent0nces se agrega el porducto con la nueva cantidad y lo que esta en el carro
            }
        }

    }


    // Vaciar carrito
    const clear = () => setCart([])
    
    // Eliminar del carrito
    const removeItem = (prodId) => {
        const itemInCart = cart.find(prod => prod.id == prodId) // 
        
        if(itemInCart.quantity === 1){
            setCart(cart.filter( prod => prod.id !== itemInCart.id))
        }
        else{
                itemInCart.quantity--; //                
                setCart([...cart]) // aca solo seteo el cart porque cuando modifique la cantidad se va actualizar en carrito
            }
        }
    


    const dataProvide = {
        cart,
        setCart,
        addToCart,
        clear,
        removeItem
    }

    return(
        <CartContext.Provider value={dataProvide}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider
