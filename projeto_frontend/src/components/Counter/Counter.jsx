'use client';
import { useState } from 'react';

export default function Counter() {
    const [contador, setContador] = useState(0);

    const handleMais = () => {
        (contador >= 3) ? setContador(3) : setContador(contador + 1);
    }

    const handleMenos = () => {
        (contador <= 0) ? setContador(0) : setContador(contador - 1);
    }

    return (
        <>
            {/* CONTADORES */}
            <div className="d-flex gap-3">
                <button className="btn" onClick={handleMenos} style={{ backgroundColor: "purple", color: "white" }}>-</button>
                <span>{contador}</span>
                <button className="btn" onClick={handleMais} style={{ backgroundColor: "purple", color: "white" }}>+</button>
            </div>
        </>
    );

}