import assinaturas from '../../data/assinaturas';

export default function Rvclub() {
    return (   
        <div className="bg-black text-white d-flex justify-content-center" style={{ minHeight: "100vh" }}>

            <main className="w-75 d-flex flex-column" style={{ gap: "70px" }}>

                <section className="d-flex justify-content-center">

                    <div className="row d-flex justify-content-center gap-5 ps-5 pe-5">
                        {assinaturas.map((as) => {
                            return (
                                <div key={as.id}>
                                    <div>
                                        <p>{as.nome}</p>
                                        <p>{as.desc}</p>
                                        <p>R$ {as.preco}</p>
                                        <ul>
                                            {as.beneficios.map((b, index) => {
                                                return (
                                                    <li key={index}>{b}</li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </main>
        </div>
    );
}
