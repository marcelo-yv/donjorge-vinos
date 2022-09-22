import React from 'react';
import Form from './Form';
import Productos from './Productos';
import Secciones from './Secciones';


const Navbar = () => {
    const listaDesplegable = ["Vinos Tintos", "Vinos Blancos", "Espumantes y Aperitivos", "Cervezas", "Accesorios y Regalos"]
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">DON JORGE - Tienda de Vinos</a>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav me-auto">
                            <Secciones />
                            <Productos lista = {listaDesplegable} />
                        </ul>
                        <Form busqueda="Buscar Productos"/>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
