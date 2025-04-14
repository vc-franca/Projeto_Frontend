"use client";
import './suasessao.css';

export default function SuaSessao() {
  const perguntas = [
    {
      id: "pergunta1",
      titulo: "🎬 Como faço para assistir um filme?",
      resposta: "Basta clicar no filme desejado e pressionar o botão 'Assistir'.",
    },
    {
      id: "pergunta2",
      titulo: "💰 Preciso pagar para usar o site?",
      resposta: "Não! O acesso aos filmes é totalmente gratuito.",
    },
    {
      id: "pergunta3",
      titulo: "📝 Os filmes têm legenda?",
      resposta: "Sim, a maioria dos filmes possui legendas em português.",
    },
    {
      id: "pergunta4",
      titulo: "📱 Posso assistir no celular?",
      resposta: "Sim! O site é totalmente responsivo e funciona bem em qualquer dispositivo.",
    },
    {
      id: "pergunta5",
      titulo: "⏳ Os filmes ficam disponíveis por tempo limitado?",
      resposta: "Não. Os filmes ficam disponíveis enquanto estiverem em nosso catálogo.",
    },
    {
      id: "pergunta6",
      titulo: "🔍 Como encontro um filme específico?",
      resposta: "Use a barra de busca no topo da página para procurar pelo nome do filme.",
    },
  ];







  return (
    <div className="container faq-container py-5">


  
<div className="faq-imagens mb-4 text-center">
<br></br>
      <br></br>

  <img src="/img_home/suasessao.png" alt="Imagem 1" className="faq-img mx-2" />
</div>


      <br></br>
      <br></br>
      <br></br>
      <h1 className="text-center mb-5 display-5">PERGUNTAS FREQUENTES</h1>

      <div className="accordion accordion-flush" id="faqAccordion">
        {perguntas.map((pergunta, index) => (
          <div className="accordion-item bg-dark border-light" key={pergunta.id}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed faq-btn bg-dark text-light fw-bold fs-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
              >
                {pergunta.titulo}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body text-light fs-6">
                {pergunta.resposta}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
