// A hat kártya adata
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
        <section className="container-fluid py-5">
            <p className="label">03 / Funkciók</p>
            <h2 className="fw-bold">Minden, ami mozgásban tart.</h2>
            <p className="small text-body-secondary mt-2 mb-4">A mindennapi feladatoktól a nagyobb döntésekig.</p>

            <div className="row g-3">
                {funkciok.map((f) => (
                    <div key={f.cim} className="col-sm-6 col-lg-4">
                        <div className="bg-body-secondary border rounded-3 p-3 h-100">
                            <h3 className="fs-6 fw-semibold mb-2">{f.cim}</h3>
                            <p className="small text-body-secondary">{f.szoveg}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Funkciok