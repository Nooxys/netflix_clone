import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import Hero from './components/Hero'
import MyRow from './components/MyRow'

function App() {
  return (
    <>
      <header>
        <MyHeader />
      </header>
      <main>
        <Hero />
        <MyRow name="Trending Now" filmName="Star Wars" />
        <MyRow name="Watch it Again" filmName="The Lord Of The Rings" />
        <MyRow name="New Releases" filmName="Harry Potter" />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  )
}

export default App
