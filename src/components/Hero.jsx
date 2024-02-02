import { Dropdown } from 'react-bootstrap'

const Hero = () => {
  return (
    <>
      <div className="container-fluid px-4 pt-3">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4 text-white">TV Shows</h2>
            <div className="btn-group" role="group">
              <div className="dropdown ms-4 mt-1">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">Genres</Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
          <div>
            <i className="bi bi-grid icons"></i>
            <i className="bi bi-grid-3x3 icons"></i>
          </div>
        </div>
      </div>
    </>
  )
}
export default Hero
