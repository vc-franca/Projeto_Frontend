import "./Header.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="container">
          <ul className="nav-list d-flex flex-wrap justify-content-center align-items-center">
            <li><a href="/" className="nav-link">Home</a></li>
            <li><a href="/planos" className="nav-link">Planos</a></li>
            <li><a href="/snackbar" className="nav-link">Snackbar</a></li>
            <li><a href="/suasessao" className="nav-link">Sua sessão</a></li>
      
          </ul>
        </nav>
      </header>
    </>
  );
}