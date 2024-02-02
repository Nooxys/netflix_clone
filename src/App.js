import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import Hero from './components/Hero'
import MyRow from './components/MyRow'
import ProfileHeader from './components/ProfileHeader'
import ProfileMain from './components/ProfileMain'
import ProfileFooter from './components/ProfileFooter'
import Credits from './components/Credits'

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
        <MyRow
          name="Because You Watched: ' Halloween '"
          filmName="The Conjuring"
        />
        <MyRow name="Extra for You" filmName="V For Vengeance" />
      </main>
      <footer>
        <MyFooter />
      </footer>
      {/* ---------------------------- vvvvvvvv Pagina Profile vvvvvvvv */}
      <div id="easter_egg">
        <ProfileHeader />
        <ProfileMain />
        <ProfileFooter />

        {/* Dato che ero " Out of Time " e non avevo la Settings Page, ho fatto una piccola Sezioncina! */}

        <Credits />
      </div>
    </>
  )
}

export default App
