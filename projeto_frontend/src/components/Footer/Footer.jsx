export default function Footer() {
    return (
        <footer className="pt-3 d-flex flex-column justify-content-center align-items-center gap-5 bg-dark text-white">

            <section>
                <button className="btn" style={{ backgroundColor: "purple" }}><a href="/club" style={{ color: "white" }} className="list-none">Entre no RV Club!</a></button>
            </section>

            <section className="w-100 d-flex justify-content-center gap-5 border-bottom">
                <div><p>Programação</p></div>
                <div><p>Sua Sessão</p></div>
                <div><p>Snacks</p></div>
            </section>

            <div>
                <p>© 2025 Cine RV</p>
            </div>
        </footer>
    );
}