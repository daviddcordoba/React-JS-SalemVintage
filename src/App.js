import './App.css';

import NavBar from './components/navbar/NavBar';

import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Nosotros from './components/pages/Nosotros';
import Cart from './components/Cart/Cart';
import Contact from './components/pages/Contact';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemListDetail from './components/ItemDetailContainer/ItemListDetail';



function App() {
  return (
    <BrowserRouter>
    <div > 
      <div className="navegador">
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}></Route>
          <Route path='/nosotros' element={<Nosotros/>}></Route>
          <Route path='/contacto' element={<Contact/>}></Route>
          <Route path='/productos' element={<ItemListContainer/>} />
          <Route path='/categoria/:categoryName' element={<ItemListContainer/>} />
          <Route path='/productos/:id' element={<ItemListDetail/>} />
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='*' element= {<h1>Error 404 - Página no encontrada</h1>}></Route>
        </Routes>
      </div>
      

    </div>
    </BrowserRouter>
    
  );
}

export default App;
