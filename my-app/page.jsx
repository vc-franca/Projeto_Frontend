"use client";
import { useState } from "react";
import './cardapio.css';

export default function Cardapio() {
    const produtos = [
        {
            id: 1,
            nome: "Big Mac",
            preco: 25.90,
            descricao: "Dois hambúrgueres, alface, queijo, molho especial, cebola e picles no pão com gergelim.",
            imagem: "/img/big-mac.png" 
        },
        {
            id: 2,
            nome: "McChicken",
            preco: 18.50,
            descricao: "Um suculento filé de frango empanado, alface e maionese no pão com gergelim.",
            imagem: "/img/mcchicken.png"
        },
        {
            id: 3,
            nome: "Batata Frita Média",
            preco: 9.90,
            descricao: "Batatas fritas crocantes e douradas.",
            imagem: "/img/batata-frita.png"
        },
        {
            id: 4,
            nome: "McFlurry Oreo",
            preco: 12.90,
            descricao: "Sorvete de baunilha com pedaços de biscoito Oreo.",
            imagem: "/img/mcflurry.jfif"
        },
        {
            id: 5,
            nome: "Cheddar McMelt",
            preco: 23.90,
            descricao: "Um hambúrguer, cheddar e muita cebola caramelizada.",
            imagem: "/img/chedarmcmelt.png"
        },
        {
            id: 6,
            nome: "Milk-Shake de Chocolate",
            preco: 17.90,
            descricao: "Um milk-shake de chocolate da Copenhaguen.",
            imagem: "/img/milkshake.png"
        },
       
    ];

    return (
        <div className="cardapio-container">
            {/* Banner Full-Screen */}
            <div className="banner">
                <h2>Cardápio McDonald's</h2>
            </div>

            {/* Lista de Produtos */}
            <div className="produtos-grid">
                {produtos.map((produto) => (
                    <ProdutoCard key={produto.id} produto={produto} />
                ))}
            </div>
        </div>
    );
}

function ProdutoCard({ produto }) {
    const [contador, setContador] = useState(0);

    const handleAcrescentar = () => {
        if (contador >= 5) {
            alert("Não é possível adicionar mais de 5!");
            setContador(5);
        } else {
            setContador(contador + 1);
        }
    };

    const handleDecrementar = () => {
        if (contador === 0) {
            alert(`Não é possivel adicionar -1 ${produto.nome}`);
            setContador(0);
        } else {
            setContador(contador - 1);
        }
    };

    return (
        <div className="produto-card">
            <img src={produto.imagem} alt={produto.nome} className="produto-imagem" />
            <h2 className="produto-nome">{produto.nome}</h2>
            <p className="produto-preco">R$ {produto.preco.toFixed(2)}</p>
            <p className="produto-descricao">{produto.descricao}</p>
            
            {/* Contador */}
            <div className="contador">
                <button type="button" onClick={handleDecrementar}> - </button>
                <span>{contador}</span>
                <button type="button" onClick={handleAcrescentar}> + </button>
            </div>
        </div>
    );
}