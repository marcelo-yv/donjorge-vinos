import React from 'react';
import Oferta1 from './oferta1';
import Oferta2 from './oferta2';
import Oferta3 from './oferta3';
import Oferta4 from './oferta4';

const Contenidoprincipal = () => {
    const ofertas = ["oferta1", "oferta2", "oferta3"]
    return (
        <>
            <div className='cardOfertas'>
                <Oferta1/>
                <Oferta2/>
                <Oferta3/>
                <Oferta4/>
            </div>
        </>
    );
}

export default Contenidoprincipal;
