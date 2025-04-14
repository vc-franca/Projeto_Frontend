"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import './page.css';

export default function Home() {
  // Dados dos filmes com classificação indicativa
  const filmes = [
    {
      id: 1,
      titulo: "UM FILME MINECRAFT",
      ano: 2025,
      diretor: "ared Hess",
      descricao: "No filme Minecraft, um grupo é transportado para o Overworld e precisa sobreviver e enfrentar inimigos para voltar para casa.",
      imagem: "/filmes/minecraft.webp",
      classificacao: "/faixa/10.jpg"
    },
    {
      id: 2,
      titulo: "NOVOCAINE: À PROVA DA DOR",
      ano: 2025,
      diretor: "Dan Berk e Robert Olsen.",
      descricao: "Após um assalto a banco, um homem que não sente dor usa sua condição para resgatar uma colega sequestrada.",
      imagem: "/filmes/novocaine.webp",
      classificacao: "/faixa/18.png"
    },
    {
      id: 3,
      titulo: "BRANCA DE NEVE (2025)",
      ano: 2025,
      diretor: "Marc Webb",
      descricao: "Branca de Neve foge da cruel Rainha Má e encontra novos aliados na floresta para enfrentar seus perigosos planos.",
      imagem: "/filmes/brancadeneve.webp",
      classificacao: "/faixa/10.jpg"
    },
    {
      id: 4,
      titulo: "BRANCA DE NEVE (2025)",
      ano: 2025,
      diretor: "Marc Webb",
      descricao: "Branca de Neve foge da cruel Rainha Má e encontra novos aliados na floresta para enfrentar seus perigosos planos.",
      imagem: "/filmes/brancadeneve.webp",
      classificacao: "/faixa/10.jpg"
    },
    {
      id: 5,
      titulo: "BRANCA DE NEVE (2025)",
      ano: 2025,
      diretor: "Marc Webb",
      descricao: "Branca de Neve foge da cruel Rainha Má e encontra novos aliados na floresta para enfrentar seus perigosos planos.",
      imagem: "/filmes/brancadeneve.webp",
      classificacao: "/faixa/10.jpg"
    },
    {
      id: 6,
      titulo: "BRANCA DE NEVE (2025)",
      ano: 2025,
      diretor: "Marc Webb",
      descricao: "Branca de Neve foge da cruel Rainha Má e encontra novos aliados na floresta para enfrentar seus perigosos planos.",
      imagem: "/filmes/brancadeneve.webp",
      classificacao: "/faixa/10.jpg"
    },
    {
      id: 7,
      titulo: "BRANCA DE NEVE (2025)",
      ano: 2025,
      diretor: "Marc Webb",
      descricao: "Branca de Neve foge da cruel Rainha Má e encontra novos aliados na floresta para enfrentar seus perigosos planos.",
      imagem: "/filmes/brancadeneve.webp",
      classificacao: "/faixa/10.jpg"
    },
    {
      id: 8,
      titulo: "BRANCA DE NEVE (2025)",
      ano: 2025,
      diretor: "Marc Webb",
      descricao: "Branca de Neve foge da cruel Rainha Má e encontra novos aliados na floresta para enfrentar seus perigosos planos.",
      imagem: "/filmes/brancadeneve.webp",
      classificacao: "/faixa/10.jpg"
    }


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
          <div className="carousel-item">
            <Image 
              src="/img_home/flowbanner.png" 
              width={1600} 
              height={600} 
              alt="Banner 3" 
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

      <br></br>

      {/* Seção dos Filmes */}
      <div className="filmes-section">
        <h2 className="text-center mb-5 display-5">FILMES EM DESTAQUE</h2>
        <div className="filmes-grid">
          {filmes.map((filme) => (
            <FilmeCard key={filme.id} filme={filme} />
          ))}
        </div>
      </div>

      {/* Nova Seção Curtanocinerv */}
      <div className="curtanocinerv">
        <h2 className="text-center mb-5 display-5">CURTA NO CINE RV </h2>
        <div className="curtanocinerv-grid">
          <div className="curtanocinerv-box">
            <Image src="/img_home/pipoca.jpg" width={500} height={500} alt="Imagem 1" className="curtanocinerv-img" />
          </div>
          <div className="curtanocinerv-box">
            <Image src="/img_home/pipoca.jpg" width={500} height={500} alt="Imagem 2" className="curtanocinerv-img" />
          </div>
          <div className="curtanocinerv-box">
            <Image src="/img_home/pipoca.jpg" width={500} height={500} alt="Imagem 3" className="curtanocinerv-img" />
          </div>
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
