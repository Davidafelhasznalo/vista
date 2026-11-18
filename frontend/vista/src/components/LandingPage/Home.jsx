import Hero from './Hero'
import Bemutatkozas from './Bemutatkozas'
import MiertVista from './MiertVista'
import Funkciok from './Funkciok'
import Csapat from './Csapat'

const Home = () => {
    return (
        <main className="oldal-belep">
            <Hero />
            <Bemutatkozas />
            <MiertVista />
            <Funkciok />
            <Csapat />
        </main>
    )
}

export default Home