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
        <section className="bg-forest py-12 text-white">
            <div className="w-full px-6 lg:px-12">
                <p className="label text-vista-lime">02 / Miért VISTA?</p>
                <h2 className="mb-6 text-3xl font-bold">A kezedben az irányítás.</h2>
                <div className="grid gap-4 md:grid-cols-3">
                    {kartyak.map((k) => (
                        <div key={k.szam} className="rounded-lg bg-white/10 p-6">
                            <div className="flex justify-between">
                                <span className="text-sm text-white/50">{k.szam}</span>
                            </div>
                            <h3 className="mb-2 mt-12 text-base font-semibold">{k.cim}</h3>
                            <p className="text-sm text-white/50">{k.szoveg}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MiertVista