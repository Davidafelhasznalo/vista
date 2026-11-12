const fejlesztok = [
    { szam: '01', nev: 'Kányai Márk' },
    { szam: '02', nev: 'Sveiczer Dávid' },
]

const Csapat = () => {
    return (
        <section className="bg-body-tertiary py-5">
            <div className="container-fluid">
                <div className="row g-5">

                    <div className="col-md-6">
                        <p className="label">04 / A csapat</p>
                        <h2 className="fw-bold">Két fejlesztő, egy cél.</h2>
                        <p className="text-body-secondary mt-3">
                            Két fejlesztő, egy cél: egyszerűbbé tenni a járműpark kezelését.
                            Kányai Márk és Sveiczer Dávid projektje a Veszprémi Szakképzési
                            Centrum Ipari Technikumban.
                        </p>
                    </div>

                    <div className="col-md-6">
                        {fejlesztok.map((f) => (
                            <div key={f.szam} className="d-flex gap-4 py-3 border-bottom">
                                <span className="small text-body-secondary pt-1">{f.szam}</span>
                                <div>
                                    <strong className="fs-5">{f.nev}</strong>
                                    <p className="small text-body-secondary">Fejlesztő</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Csapat