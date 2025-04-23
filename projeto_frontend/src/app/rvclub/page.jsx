import assinaturas from '../../data/assinaturas';

export default function Rvclub() {
    return (   
        <div className="bg-black text-white d-flex justify-content-center" style={{ minHeight: "100vh" }}>

            <main className="w-75 d-flex flex-column justify-content-around" style={{ gap: "70px" }}>

                <section className="d-flex justify-content-center">

                    <div className="d-flex justify-content-center gap-5 ps-5 pe-5">
                        {assinaturas.map((ass) => {
                            return (
                                <div key={ass.id} className="p-3 bg-dark bg-gradient w-165 d-flex flex-column justify-content-center rounded-4">
                                    <div className="d-flex flex-column justify-content-center align-items-center text-center gap-3">
                                        <h3 className="w-75 border-bottom">{ass.nome}</h3>
                                        <p className="w-75 border-bottom">{ass.desc}</p>
                                        <p className="w-75 border-bottom">R$ {ass.preco}</p>
                                        <ul className="w-75 list-unstyled text-start">
                                            {ass.beneficios.map((b, index) => {
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
