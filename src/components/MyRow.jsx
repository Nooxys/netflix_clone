import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'
import { Alert } from 'react-bootstrap'

const MyRow = (props) => {
  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const myFetch = (ID) => {
    fetch('http://www.omdbapi.com/?apikey=82c3f3e8&s=' + ID)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nel recupero dei commenti')
        }
      })
      .then((films) => {
        console.log(films)

        setFilms(films.Search)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
        setError(true)
      })
  }

  useEffect(() => {
    myFetch(props.filmName)
  }, [])

  return (
    <>
      <Container fluid className="px-4">
        {error && (
          <Alert variant="danger" className="text-center w-50 mx-auto fs-5">
            Warning! Failed to load data, please if the error persist contact
            us! <i className="bi bi-emoji-frown"></i>
          </Alert>
        )}

        {/* ^^^^^^ ALERT PER ERRORE  NEL CARICAMENTO DATI ^^^^^*/}

        <h4 className="text-white">{props.name}</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 pb-4 justify-content-center ">
          {loading && <Spinner animation="border" variant="danger"></Spinner>}

          {/* ^^^^^^^^^^ IMPOSTARE 3G LENTO DALLA NETWORK TAB PER VEDERE i 3 SPINNER CARICARE  ^^^^^^^^ */}

          {films.length > 6
            ? films.slice(0, 6).map((film) => {
                return (
                  <div className="col mb-2 text-center px-2 " key={film.imdbID}>
                    <img
                      className="w-100"
                      src={film.Poster}
                      alt={film.Title}
                      height={400}
                    />
                  </div>
                )
              })
            : films.map((film) => {
                return (
                  <div
                    className="col mb-2 text-center px-2  "
                    key={film.imdbID}
                  >
                    <img
                      className="w-100"
                      src={film.Poster}
                      alt={film.Title}
                      height={400}
                    />
                  </div>
                )
              })}
        </div>
      </Container>
    </>
  )
}

export default MyRow
