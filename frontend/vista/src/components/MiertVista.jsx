const kartyak = [
    {
        szam: '01',
        cim: 'Egy rendszer mindenre',
        szoveg: 'Jármű, szerviz, tankolás, foglalás, parkolás, hibabejelentés egy helyen.',
    },
    {
        szam: '02',
        cim: 'Rendezett, biztonságos adatok',
        szoveg: 'Az adatok szerveren tárolódnak, így nem vesznek el és nem sérülnek.',
    },
    {
        szam: '03',
        cim: 'Időt és pénzt spórol',
        szoveg: 'Nincs szkennelés és szoftverváltogatás, a statisztikák pár kattintással megvannak.',
    },
]

const MiertVista = () => {
    return (
        <section className="bg-dark text-white py-5">
            <div className="container-fluid">
                <p className="label text-lime">02 / Miért VISTA?</p>
                <h2 className="fw-bold mb-4">A kezedben az irányítás.</h2>
                <div className="row g-3">
                    {kartyak.map((k) => (
                        <div key={k.szam} className="col-md-4">
                            <div className="bg-white bg-opacity-10 rounded-3 p-4 h-100">
                                <div className="d-flex justify-content-between">
                                    <span className="small text-white-50">{k.szam}</span>
                                </div>
                                <h3 className="fs-6 fw-semibold mt-5 mb-2">{k.cim}</h3>
                                <p className="small text-white-50">{k.szoveg}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MiertVista