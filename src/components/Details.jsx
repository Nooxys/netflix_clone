import { useEffect } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { useParams } from 'react-router-dom'

const Details = (props) => {
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
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const params = useParams()

  useEffect(() => {
    myFetch()
  })

  return (
    <Container>
      <Row className="justify-content-center ">
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
export default Details
