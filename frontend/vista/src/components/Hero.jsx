import classes from './Hero.module.css'

const Hero = () => {
    return (
        <section className="container-fluid py-5">
            <div className="row align-items-center g-5">
                <div className="col-md-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">
                        A flottád.<br />Egy helyen.<br />Átláthatóan.
                    </h1>

                    <p className="text-body-secondary mb-4">
                        A VISTA kis- és középvállalkozásoknak segít átláthatóvá tenni a
                        járműparkot: szerviz, tankolás, foglalás és hibabejelentés egyetlen
                        webes felületen.
                    </p>

                    <p className="label">Flottakezelés, egy kicsit szabadabban.</p>
                </div>

                <div className="col-md-6">
                    <div className={`position-relative overflow-hidden rounded-4 ${classes.kep}`}>
                        <img src="/images/auto.jpeg" alt="" className="w-100 h-100 object-fit-cover"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero