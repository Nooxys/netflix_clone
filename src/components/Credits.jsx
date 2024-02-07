/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/iframe-has-title */
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

const Credits = () => {
  return (
    <>
      <Container className="py-5">
        <Row>
          <Col className="text-white my-4 text-center fs-5 ">
            Made With Passion by Ciro, while listening to my favorite music!{' '}
            <i className="bi bi-music-note"></i>
            <p>
              Here's the playlist I listened to while working! Enjoy{' '}
              <i className="bi bi-music-player"></i>
            </p>
          </Col>
        </Row>
        <Row>
          {/* // eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <Col id="frame">
            {/* // eslint-disable-next-line jsx-a11y/iframe-has-title */}
            <iframe
              src="https://open.spotify.com/embed/playlist/7mFmifzeZsU2qHAsZhnnTO?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Credits
