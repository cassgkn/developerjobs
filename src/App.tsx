import Header from './components/Cabecalho'
import Hero from './components/Hero'
import Rodape from './components/Rodape'
import ListaVagas from './containers/ListaVagas'
import './global.css'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
      <Rodape />
    </>
  )
}

export default App
