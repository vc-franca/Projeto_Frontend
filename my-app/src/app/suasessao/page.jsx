"use client";
import { useRef } from "react";
import './suasessao.css'


export default function suasessao() {
  const refs = {
    pergunta1: useRef(null),
    pergunta2: useRef(null),
    pergunta3: useRef(null),
  };

  const scrollTo = (ref) => {
    if (refs[ref]?.current) {
      refs[ref].current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Perguntas Frequentes</h1>

      <div className="row mb-5">
        <div className="col-12 col-md-6 offset-md-3 d-grid gap-3">
          <button onClick={() => scrollTo("pergunta1")} className="btn btn-outline-secondary text-start">
            Como faço para assistir um filme?
          </button>
          <button onClick={() => scrollTo("pergunta2")} className="btn btn-outline-secondary text-start">
            Preciso pagar para usar o site?
          </button>
          <button onClick={() => scrollTo("pergunta3")} className="btn btn-outline-secondary text-start">
            Os filmes têm legenda?
          </button>
        </div>
      </div>

      <div className="row gy-4">
        <div ref={refs.pergunta1} className="col-12 col-md-8 offset-md-2 faq-resposta p-4 bg-light rounded shadow-sm">
          <h4>Como faço para assistir um filme?</h4>
          <p>Basta clicar no filme desejado e pressionar o botão "Assistir".</p>
        </div>

        <div ref={refs.pergunta2} className="col-12 col-md-8 offset-md-2 faq-resposta p-4 bg-light rounded shadow-sm">
          <h4>Preciso pagar para usar o site?</h4>
          <p>Não! O acesso aos filmes é totalmente gratuito.</p>
        </div>

        <div ref={refs.pergunta3} className="col-12 col-md-8 offset-md-2 faq-resposta p-4 bg-light rounded shadow-sm">
          <h4>Os filmes têm legenda?</h4>
          <p>Sim, a maioria dos filmes possui legendas em português.</p>
        </div>
      </div>
    </div>
  );
}
