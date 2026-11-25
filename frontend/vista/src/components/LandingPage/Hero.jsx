const Hero = () => {
    return (
        <section className="w-full px-6 py-12 lg:px-12">
            <div className="grid items-center gap-12 md:grid-cols-2">
                <div>
                    <h1 className="mb-4 text-4xl font-bold leading-none md:text-5xl">
                        A flottád.<br />Egy helyen.<br />Átláthatóan.
                    </h1>

                    <p className="mb-6 text-muted">
                        A VISTA kis- és középvállalkozásoknak segít átláthatóvá tenni a
                        járműparkot: szerviz, tankolás, foglalás és hibabejelentés egyetlen
                        webes felületen.
                    </p>

                    <p className="label">Flottakezelés, egy kicsit szabadabban.</p>
                </div>

                <div>
                    <div className="relative h-[300px] overflow-hidden rounded-2xl md:h-[440px]">
                        <img src="/images/LandingPage/auto.jpeg" alt="" className="size-full object-cover"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
