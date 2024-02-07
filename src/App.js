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
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TVShows from './components/TVShows'
import Details from './components/Details'
function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <MyHeader />
        </header>
        <main>
          <Routes>
            <Route element={<Details />} path="/Details/:movieID" />
            <Route element={<TVShows />} path="/TVShows" />
            {/* <Route element={<NotFound />} path="*" /> */}
          </Routes>
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
      </BrowserRouter>
    </>
  )
}

export default App
