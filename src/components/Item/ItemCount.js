import { useState } from 'react';


const ItemCount = ({data}) => {

    const [contador,setContador] = useState(1)




    const addNumber = () => {
        if(data>contador){ 
        setContador(contador + 1)
        }
    }
    const deleteNumber = () => {
        if( contador!==0)
        setContador(contador - 1)
    }
    return( 
        
        <>
            <button onClick={deleteNumber}> - </button>
            <p>{contador}</p>
            <button onClick={addNumber}> + </button>
        </>


    )
} 


export default ItemCount