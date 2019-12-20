import React from 'react';
import Gasto from './Gasto';

const ListaGastos = ({ gastos }) => {
    return (
        <ul className="gastos-realizados">
            {gastos.map(
                gasto => 
                    <Gasto
                        key={gasto.id}
                        gasto={gasto}
                        />
            )}
        </ul>
    );
};

export default ListaGastos;