'use client';
import { useState } from 'react';

export default function Snackbar() {
    const [contador, setContador] = useState(0);

    const handleMais = () => {
        (contador >= 3) ? setContador(3) : setContador(contador + 1);
    }

    const handleMenos = () => {
        (contador <= 0) ? setContador(0) : setContador(contador - 1);
    }

    const snacks = [
        {
            id: 1,
            nome: 'pipoca',
            preco: 25.50,
            desc: 'Pipoca cremosa com coberturas opcionais',
            img: '/pipoca.jfif',
        },
        {
            id: 2,
            nome: 'pipoca',
            preco: 25.50,
            desc: 'Pipoca cremosa com coberturas opcionais',
            img: '/pipoca.jfif',
        },
        {
            id: 3,
            nome: 'pipoca',
            preco: 25.50,
            desc: 'Pipoca cremosa com coberturas opcionais',
            img: '/pipoca.jfif',
        },
        {
            id: 4,
            nome: 'pipoca',
            preco: 25.50,
            desc: 'Pipoca cremosa com coberturas opcionais',
            img: '/pipoca.jfif',
        },
        {
            id: 5,
            nome: 'pipoca',
            preco: 25.50,
            desc: 'Pipoca cremosa com coberturas opcionais',
            img: '/pipoca.jfif',
        },
        {
            id: 6,
            nome: 'pipoca',
            preco: 25.50,
            desc: 'Pipoca cremosa com coberturas opcionais',
            img: '/pipoca.jfif',
        },
    ];

    const combos = [
        {
            id: 1,
            nome: 'pipoca e refri',
            preco: 25.50,
            desc: 'Pipoca cremosa com coberturas opcionais',
            img: '/pipoca.jfif',
        },
        {
            id: 2,
            nome: 'pipoca e refri',
            preco: 25.50,
            desc: 'Pipoca cremosa com coberturas opcionais',
            img: '/pipoca.jfif',
        },
        {
            id: 3,
            nome: 'pipoca e refri',
            preco: 25.50,
            desc: 'Pipoca cremosa com coberturas opcionais',
            img: '/pipoca.jfif',
        },
        {
            id: 4,
            nome: 'pipoca e refri',
            preco: 25.50,
            desc: 'Pipoca cremosa com coberturas opcionais',
            img: '/pipoca.jfif',
        },
    ];

    return (
        <div className="bg-black text-white" style={{ minHeight: "100vh" }}>
            <section>
                <h2>Combos Especiais</h2>

                <div>

                </div>
            </section>
            <section>
                <h2>Ache seu snack ideal</h2>

                {/* SNACK CARD */}
                <div className="row d-flex justify-content-center gap-5 ps-5 pe-5">
                    {snacks.map((snack) => (
                        <div key={snack.id} className="col p-3 bg-dark bg-gradient w-165 d-flex flex-column justify-content-center align-items-center border border-dark rounded-4 border-1">
                            <img src={snack.img} alt={snack.name} className="rounded-4" style={{ width: "165px" }} />
                            <p className="d-flex flex-column justify-content-center">{snack.desc}</p>
                            <p>R$ {snack.preco}</p>
                            <div>{snack.name}</div>

                            {/* CONTADOR */}
                            <div className="d-flex gap-3">
                                <button className="btn" onClick={handleMenos} style={{ backgroundColor: "purple", color: "white" }}>-</button>
                                <span>{contador}</span>
                                <button className="btn" onClick={handleMais} style={{ backgroundColor: "purple", color: "white" }}>+</button>
                            </div>

                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}