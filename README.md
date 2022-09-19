# TIENDA SALEM VINTAGE

## Descripcion:
Tienda virtual - E-Commerce de ropa vintage. Realizada para presentacion de proyecto final del curso React JS.

## ¿Que se puede hacer?
En la misma se puede seleccionar productos, buscar productos por categorias, ver detalles de los mismos, agregar al carrito y finalmente concretar mediante un formulario la compra.
La App esta viculado a Firebase para la base de datos (Podemos a traves del firestore encontrar la coleccion de productos y las ordenes de compra)

## Muestra:
![image](https://github.com/daviddcordoba/React-JS-SalemVintage/blob/master/gifcoder.gif)

## Herramientas/Dependecias utilizadas:
* React 
* React-Router-DOM
* Bootstrap 
* Firebase 
* Toastify
* Material Icons
* Reactstrap
* Sass

## Partes de la APP:
* App.js:  En el se encuentran todas las rutas de la aplicacion, se encarga de linkear segun corresponda

* Navbar: En esta carpeta encontramos los archivos Navbar.js donde se encuentra la barra de navegacion principal y CartWidget donde se navegara al carrito de compras

* Item: Encontraremos Item.js (encargado de la presentacion de los productos)

* ItemDetailContainer: En esta carpeta encontramos los componentes ItemlistDetail.js (encargado de la presentacion del detalle-contenedor), ItemDetail.js (encargado de la presentacion de los detalles de los productos)


* ItemListContainer : ItemListContainer.js ( encargado de la parte funcional-componente contenedor), ItemList.js (encargador la presentacion de los productos)

* Cart:  Se encuentran los componentes donde van a parar los productos seleccionados para la futura compra. Se detalla precio total y cantidad de productos seleccionados, tambien se encuentra el formulario donde se ingresan los datos del comprador para enviar a la base de datos.
* Context: Se encuentra CartContext.js utilizado para pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel.

## Pasos para instalar el sitio:
1. git clone https://github.com/daviddcordoba/React-JS-SalemVintage
2. cd salemvintage
3. npm install
4. npm start
