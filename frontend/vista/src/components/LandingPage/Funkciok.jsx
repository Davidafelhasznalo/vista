const funkciok = [
    { cim: 'Járművek', szoveg: 'A járműpark minden fontos adata egy átlátható, közös nyilvántartásban.' },
    { cim: 'Szerviz és karbantartás', szoveg: 'Kövesd a szervizeléseket és a karbantartásokat, hogy semmi ne maradjon el.' },
    { cim: 'Foglalás', szoveg: 'Tervezd meg a járművek használatát, és lásd egy helyen a foglalásokat.' },
    { cim: 'Tankolás', szoveg: 'Rögzítsd a tankolásokat, és tartsd szemmel a járművek üzemanyagköltségét.' },
    { cim: 'Hibabejelentés', szoveg: 'Jelezd a felmerülő hibákat, hogy időben megkezdődhessen a javítás.' },
    { cim: 'Statisztika', szoveg: 'Tekintsd át a flotta működését és költségeit néhány kattintással.' },
]

const Funkciok = () => {
    return (
        <section className="w-full px-6 py-12 lg:px-12">
            <p className="label">03 / Funkciók</p>
            <h2 className="text-3xl font-bold">Minden, ami mozgásban tart.</h2>
            <p className="mb-6 mt-2 text-sm text-muted">A mindennapi feladatoktól a nagyobb döntésekig.</p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {funkciok.map((f) => (
                    <div key={f.cim} className="rounded-lg border bg-surface p-4">
                        <h3 className="mb-2 text-base font-semibold">{f.cim}</h3>
                        <p className="text-sm text-muted">{f.szoveg}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Funkciok