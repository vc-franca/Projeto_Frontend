export default function Footer() {
    return (
        <footer className="pt-3 d-flex flex-column justify-content-center align-items-center gap-5 bg-dark text-white">

            <section>
                <button className="btn" style={{ backgroundColor: "purple" }}><a href="/rvclub" style={{ color: "white" }} className="list-none">Entre no RV Club!</a></button>
            </section>

            <section className="w-100 d-flex justify-content-center gap-5 border-bottom">
                <div><a href="/" className="programacao">Programação</a></div>
                <div><a href="/suasessao" className="suaSessao">Sua Sessão</a></div>
                <div><a href="/snackbar" className="snacks">Snacks</a></div>
            </section>

            <div>
                <p>© 2025 Cine RV</p>
            </div>
        </footer>
    );
}
