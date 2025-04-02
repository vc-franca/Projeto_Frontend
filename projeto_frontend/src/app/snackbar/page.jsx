export default function Snackbar() {

    const snacks = [
        {
            id: 1,
            nome: 'pipoca',
            preco: 25.50,
            desc: 'Pipoca cremosa com coberturas opcionais',
            img: '/pipoca.jfif',
        },
        {
            id: 2,
            nome: 'pipoca',
            preco: 25.50,
            desc: 'Pipoca cremosa com coberturas opcionais',
            img: '/pipoca.jfif',
        },
        {
            id: 3,
            nome: 'pipoca',
            preco: 25.50,
            desc: 'Pipoca cremosa com coberturas opcionais',
            img: '/pipoca.jfif',
        },
        {
            id: 4,
            nome: 'pipoca',
            preco: 25.50,
            desc: 'Pipoca cremosa com coberturas opcionais',
            img: '/pipoca.jfif',
        },
        {
            id: 5,
            nome: 'pipoca',
            preco: 25.50,
            desc: 'Pipoca cremosa com coberturas opcionais',
            img: '/pipoca.jfif',
        },
        {
            id: 6,
            nome: 'pipoca',
            preco: 25.50,
            desc: 'Pipoca cremosa com coberturas opcionais',
            img: '/pipoca.jfif',
        },
    ];

    const combos = [
        {
            id: 1,
            nome: 'pipoca',
            preco: 25.50,
            desc: 'Pipoca cremosa com coberturas opcionais',
            img: '/pipoca.jfif',
        },
    ];

    return (
        <div className="bg-black text-white" style={{ minHeight: "100vh" }}>
            <section>
                <h2>Combos Especiais</h2>

                <div>

                </div>
            </section>
            <section>
                <h2>Ache seu snack ideal</h2>
                <div className="row mr-3 d-flex justify-content-center" style={{ marginLeft: "2%", gap: "0.3" }}>
                    {snacks.map((snack) => (
                        <div key={snack.id} className="col w-180">
                            <img src={snack.img} alt={snack.name} className="rounded-4" style={{ width: "165px" }} />
                            <p>{snack.desc}</p>
                            <div>{snack.name}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}