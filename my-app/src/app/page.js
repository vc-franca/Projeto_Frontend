"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import './page.css';

export default function Home() {
  // Dados dos filmes com classificação indicativa
  const filmes = [
    {
      id: 1,
      titulo: "O Poderoso Chefão",
      ano: 1972,
      diretor: "Francis Ford Coppola",
      descricao: "A saga da família Corleone, uma das mais poderosas famílias da máfia italiana.",
      imagem: "/img/poderoso-chefao.jpg",
      classificacao: "/img/classificacao-18.png" // Adicione os caminhos das imagens de classificação
    },
    {
      id: 2,
      titulo: "Interestelar",
      ano: 2014,
      diretor: "Christopher Nolan",
      descricao: "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço.",
      imagem: "/img/interestelar.jpg",
      classificacao: "/img/classificacao-12.png"
    },
    {
      id: 3,
      titulo: "Clube da Luta",
      ano: 1999,
      diretor: "David Fincher",
      descricao: "Um homem deprimido forma um clube de luta clandestino como terapia alternativa.",
      imagem: "/img/clube-luta.jpg",
      classificacao: "/img/classificacao-18.png"
    },
    {
      id: 4,
      titulo: "O Senhor dos Anéis: O Retorno do Rei",
      ano: 2003,
      diretor: "Peter Jackson",
      descricao: "Conclusão da jornada de Frodo para destruir o Um Anel.",
      imagem: "/img/senhor-aneis.jpg",
      classificacao: "/img/classificacao-12.png"
    },
    {
      id: 5,
      titulo: "Parasita",
      ano: 2019,
      diretor: "Bong Joon-ho",
      descricao: "Uma família pobre infiltra-se na casa de uma família rica.",
      imagem: "/img/parasita.jpg",
      classificacao: "/img/classificacao-16.png"
    },
    {
      id: 6,
      titulo: "Cidade de Deus",
      ano: 2002,
      diretor: "Fernando Meirelles",
      descricao: "A vida nas favelas do Rio de Janeiro através dos olhos de dois jovens.",
      imagem: "/img/cidade-deus.jpg",
      classificacao: "/img/classificacao-18.png"
    },
    {
      id: 7,
      titulo: "O Poderoso Chefão",
      ano: 1972,
      diretor: "Francis Ford Coppola",
      descricao: "A saga da família Corleone, uma das mais poderosas famílias da máfia italiana.",
      imagem: "/img/poderoso-chefao.jpg",
      classificacao: "/img/classificacao-18.png" // Adicione os caminhos das imagens de classificação
    },
    {
      id: 8,
      titulo: "O Poderoso Chefão",
      ano: 1972,
      diretor: "Francis Ford Coppola",
      descricao: "A saga da família Corleone, uma das mais poderosas famílias da máfia italiana.",
      imagem: "/img/poderoso-chefao.jpg",
      classificacao: "/img/classificacao-18.png" // Adicione os caminhos das imagens de classificação
    },
  
  ];

  return (
    <main className="home-container">
      {/* Seção do Carrossel */}
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>


      <div id="carouselExample" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image 
              src="/img_home/carrosel.jpg" 
              width={1600} 
              height={600} 
              alt="Banner 1" 
              className="d-block w-100 carousel-img" 
              priority
            />
          </div>
          <div className="carousel-item">
            <Image 
              src="/img_home/novocainebanner.jpg" 
              width={1600} 
              height={600} 
              alt="Banner 2" 
              className="d-block w-100 carousel-img" 
            />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      {/* Seção dos Filmes */}
      <div className="filmes-section">
        <h2 className="section-title">Filmes em Destaque</h2>
        
        <div className="filmes-grid">
          {filmes.map((filme) => (
            <FilmeCard key={filme.id} filme={filme} />
          ))}
        </div>
      </div>
    </main>
  );
}

// Componente para o card do filme
function FilmeCard({ filme }) {
  const [assistirMaisTarde, setAssistirMaisTarde] = useState(false);

  const toggleAssistirMaisTarde = () => {
    setAssistirMaisTarde(!assistirMaisTarde);
  };

  return (
    <div className="filme-card">
      <div className="filme-imagem-container">
        <Image 
          src={filme.imagem} 
          width={300} 
          height={450} 
          alt={filme.titulo} 
          className="filme-imagem"
        />
        <div className="classificacao-indicativa">
          <Image 
            src={filme.classificacao} 
            width={40} 
            height={40} 
            alt="Classificação indicativa"
          />
        </div>
      </div>
      
      <div className="filme-info">
        <h3>{filme.titulo}</h3>
        <p className="filme-ano-diretor">{filme.ano} • {filme.diretor}</p>
        <p className="filme-descricao">{filme.descricao}</p>
        
        <button 
          onClick={toggleAssistirMaisTarde} 
          className={`assistir-btn ${assistirMaisTarde ? 'ativo' : ''}`}
        >
          {assistirMaisTarde ? '✓ Na sua lista' : '+ Assistir mais tarde'}
        </button>
      </div>
    </div>
  );
}