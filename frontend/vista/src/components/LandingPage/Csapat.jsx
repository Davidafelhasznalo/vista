const fejlesztok = [
    { szam: '01', nev: 'Kányai Márk' },
    { szam: '02', nev: 'Sveiczer Dávid' },
]

const Csapat = () => {
    return (
        <section className="bg-surface-alt py-12">
            <div className="w-full px-6 lg:px-12">
                <div className="grid gap-12 md:grid-cols-2">

                    <div>
                        <p className="label">04 / A csapat</p>
                        <h2 className="text-3xl font-bold">Két fejlesztő, egy cél.</h2>
                        <p className="mt-4 text-muted">
                            Két fejlesztő, egy cél: egyszerűbbé tenni a járműpark kezelését.
                            Kányai Márk és Sveiczer Dávid projektje a Veszprémi Szakképzési
                            Centrum Ipari Technikumban.
                        </p>
                    </div>

                    <div>
                        {fejlesztok.map((f) => (
                            <div key={f.szam} className="flex gap-6 border-b py-4">
                                <span className="pt-1 text-sm text-muted">{f.szam}</span>
                                <div>
                                    <strong className="text-xl">{f.nev}</strong>
                                    <p className="text-sm text-muted">Fejlesztő</p>
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