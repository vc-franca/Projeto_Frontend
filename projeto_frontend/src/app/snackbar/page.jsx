'use client';
import snacks from '../../data/snacks';
import combos from '../../data/combos';
import snacksEspeciais from '../../data/snacksEspeciais';
import Counter from '../../components/Counter/Counter';
// ../../../public/snack_especial1.png

export default function Snackbar() {
    return (

        <div className="bg-black text-white d-flex justify-content-center pb-5 pt-5" style={{ minHeight: "100vh" }}>
            <main className="w-75 d-flex flex-column" style={{ gap: "70px" }}>

                {/* COMBOS */}
                <section className="d-flex flex-column align-items-center">
                    <h2>Combos</h2>

                    <div className="row d-flex justify-content-center gap-5 ps-5 pe-5">
                        {combos.map((combo) => {
                            return (
                                <div key={combo.id} className="col p-3 bg-dark bg-gradient w-165 d-flex flex-column justify-content-center align-items-center border border-dark rounded-4 border-1">
                                    <img src={combo.img} alt={combo.name} className="rounded-4" style={{ width: "165px" }} />
                                    <p className="d-flex flex-column justify-content-center">{combo.desc}</p>
                                    <p>R$ {combo.preco.toFixed(2)}</p>
                                    <div>{combo.name}</div>

                                    <Counter />
                                </div>
                            )
                        })}
                    </div>
                </section>

                {/* SNACKS */}
                <section className="d-flex flex-column align-items-center">
                    <h2>Ache seu snack ideal</h2>

                    <div className="row d-flex justify-content-center gap-5 ps-5 pe-5">
                        {snacks.map((snack) => {
                            return (
                                <div key={snack.id} className="col p-3 bg-dark bg-gradient w-165 d-flex flex-column justify-content-center align-items-center border border-dark rounded-4 border-1">
                                    <img src={snack.img} alt={snack.name} className="rounded-4" style={{ width: "165px" }} />
                                    <p className="d-flex flex-column justify-content-center">{snack.desc}</p>
                                    <p>R$ {snack.preco.toFixed(2)}</p>
                                    <div>{snack.name}</div>

                                    <Counter />
                                </div>
                            )
                        })}
                    </div>
                </section>

                {/* SNACKS ESPECIAIS*/}
                <section className="d-flex flex-column align-items-center">
                    <h2>Combos Especiais</h2>

                    <div className="row d-flex justify-content-center gap-5 ps-5 pe-5">
                        {snacksEspeciais.map((snackEsp) => {
                            return (
                                <div key={snackEsp.id} className="col p-3 bg-dark bg-gradient w-165 d-flex flex-column justify-content-center align-items-center border border-dark rounded-4 border-1">
                                    <img src={snackEsp.img} alt={snackEsp.name} className="rounded-4" style={{ width: "165px" }} />
                                    <p className="d-flex flex-column justify-content-center">{snackEsp.desc}</p>
                                    <p>R$ {snackEsp.preco.toFixed(2)}</p>
                                    <div>{snackEsp.name}</div>

                                    <Counter />
                                </div>
                            )
                        })}
                    </div>
                </section>
            </main>
        </div>
    );
}
