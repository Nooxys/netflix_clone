import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import Hero from './components/Hero'
function App() {
  return (
    <>
      <header>
        <MyHeader />
      </header>
      <main>
        <Hero />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  )
}

export default App
