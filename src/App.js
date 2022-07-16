import './App.css';

import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div> 


    <div className="navegador">
      <NavBar />
    </div>
    <section> 
    <ItemListContainer titulo="Productos"/>
    </section>
    </div>
  );
}

export default App;
