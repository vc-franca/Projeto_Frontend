import './suasessao.css';

export default function SuaSessao() {
  const perguntas = [
    {
      id: "pergunta1",
      titulo: "🎬 Como posso assistir aos filmes disponíveis?",
      resposta: "Basta escolher o filme que deseja assistir e clicar no botão 'Assistir Mais Tarde'.",
    },
    {
      id: "pergunta2",
      titulo: "💰 Preciso pagar para acessar o conteúdo?",
      resposta: "Sim, temos todas as opções de ingresso no site .",
    },
    {
      id: "pergunta3",
      titulo: "📝 Os filmes têm legendas?",
      resposta: "Sim, a maioria dos filmes possui legendas em português.",
    },
    {
      id: "pergunta4",
      titulo: "📱 O site funciona bem em dispositivos móveis?",
      resposta: "Sim! O site é totalmente responsivo e pode ser acessado no celular ou tablet.",
    },
    {
      id: "pergunta5",
      titulo: "⏳ Os filmes ficam disponíveis por quanto tempo?",
      resposta: "Os filmes estão disponíveis por tempo indeterminado enquanto permanecerem no catálogo.",
    },
    {
      id: "pergunta6",
      titulo: "🔍 Como assino o planos ?",
      resposta: "Você clica na aba 'planos' e lá terá os planos para o usúario assinar",
    },
  ];

  return (
    <div className="container faq-container py-5">
      
      <br></br>
      <br></br>
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
