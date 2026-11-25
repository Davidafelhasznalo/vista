const Bemutatkozas = () => {
    return (
        <section className="w-full px-6 lg:px-12">
            <div className="border-t py-12">
                <div className="grid gap-6 md:grid-cols-12">

                    <div className="md:col-span-5">
                        <p className="label">01 / Bemutatkozás</p>
                        <h2 className="text-3xl font-bold">Mi az a VISTA?</h2>
                    </div>
                    <div className="md:col-span-7">
                        <h3 className="mb-4 text-2xl font-medium">A flottád. Egy helyen. Átláthatóan.</h3>
                        <p className="mb-6 text-muted">
                            A VISTA (Vehicle Inventory, Service, Tracking & Administration)
                            egy webalapú flottakezelő alkalmazás. Eddig a szervizelés, a tankolás
                            és a fuvarok nyomon követése papíron vagy több, különálló szoftverben
                            zajlott. A VISTA ezeket egy egységes, egyszerű felületbe hozza,
                            bárhonnan, bármikor elérhetően.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Bemutatkozas