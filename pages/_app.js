import Header from '../components/sections/Header';
import "../styles/styles.scss"

// Todos los componentes dentro de Pages, pasaran
// por este componente App
function App({ Component, pageProps }) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps}></Component>
    </>
  )
}

export default App;