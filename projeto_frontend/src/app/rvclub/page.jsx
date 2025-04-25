'use client';
import { useState } from 'react';
import assinaturas from '../../data/assinaturas';

export default function Rvclub() {
    const [assinados, setAssinados] = useState([]);

    const cores = {
        brown: '#A0522D',
        dark: '#C0C0C0',
        yellow: '#FFD700',
    };

    const handleClick = (id) => {
        if (!assinados.includes(id)) {
            setAssinados([...assinados, id]);
        }
    };

    return (
        <div className="bg-black text-white d-flex justify-content-center pb-5 pt-5" style={{ minHeight: "100vh" }}>
            <main className="w-75 d-flex flex-column justify-content-around" style={{ gap: "70px" }}>
                <section className="d-flex justify-content-center">
                    <div className="d-flex justify-content-center gap-5 ps-5 pe-5 flex-wrap">
                        {assinaturas.map((ass) => {
                            const isAssinado = assinados.includes(ass.id);

                            return (
                                <div
                                    key={ass.id}
                                    className="p-4 w-165 d-flex flex-column rounded-4 shadow card-hover"
                                    style={{
                                        backgroundColor: cores[ass.cor],
                                        color: ass.cor === 'yellow' ? '#000' : '#fff',
                                        minWidth: '300px',
                                        transition: '0.3s ease',
                                    }}
                                >
                                    <div className="d-flex flex-column justify-content-center align-items-center text-center gap-3">
                                        <span className="badge bg-dark text-uppercase">{ass.nome}</span>
                                        <p className="w-75 border-bottom fw-light">{ass.desc}</p>
                                        <h2 className="w-75 border-bottom">R$ {ass.preco.toFixed(2)}</h2>
                                        <ul className="w-75 list-unstyled text-start">
                                            {ass.beneficios.map((b, index) => (
                                                <li key={index}>• {b}</li>
                                            ))}
                                        </ul>
                                        <button
                                            className="btn btn-outline-light mt-3"
                                            onClick={() => handleClick(ass.id)}
                                            disabled={isAssinado}
                                        >
                                            {isAssinado ? 'Assinado ✅' : 'Assinar'}
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </main>
        </div>
    );
}
