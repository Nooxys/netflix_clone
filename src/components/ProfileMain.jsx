import kids from '../assets/kids_icon.png'
import { Dropdown } from 'react-bootstrap'

const ProfileMain = () => {
  return (
    <>
      <main className="container">
        <div className="row">
          <div className="col-12 col-md-6 mx-auto">
            <h1 className="mt-5 text-start border-bottom border-secondary pb-1 display-1 fw-normal text-white">
              Edit Profile
            </h1>
          </div>
        </div>
        <div className="row d-flex flex-column flex-md-row">
          <div className="col-12 col-md-6 mx-auto d-flex">
            <div className="row">
              <div className="col-12 col-xl-3 mt-3 me-3">
                <img src={kids} alt="icon" width="160" className="ms-3" />
              </div>
              <div className="col-8 mt-3">
                <p className="bg-secondary ps-3 ms-3 py-2 mb-3 fs-5">
                  Strive Student
                </p>
                <p className="fs-5 text-white text-opacity-50 mt-5 mb-1 ms-3">
                  Language:
                </p>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic" className="ms-3">
                    English
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Italian</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Japanese</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Korean</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <hr className="ms-3 my-4" />
                <p className="fs-5 text-white text-opacity-50 mb-1 ms-3">
                  Maturity Settings:
                </p>
                <span className="badge bg-secondary fs-6 ms-3 my-2 fw-normal">
                  ALL MATURITY RATINGS
                </span>
                <p className="ms-3 mt-2 mb-2 text-white">
                  Show titles of
                  <span className="text-white fw-bold mx-1">
                    all maturity ratings
                  </span>
                  for this profile.
                </p>
                <button
                  className="btn btn-rules text-nf-grey rounded-0 border border-1 text-opacity-50 ms-3 px-4"
                  type="button"
                  aria-expanded="false"
                >
                  <p className="text-center text-white text-opacity-50 m-0 fs-6">
                    E D I T
                  </p>
                </button>
                <hr className="ms-3 my-4" />
                <p className="fs-5 text-white text-opacity-50 mb-1 ms-3">
                  Autoplay controls
                </p>
                <div>
                  <input
                    className="form-check-input input-size rounded-0 border border-light bg-secondary ms-3"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label ms-3 text-white"
                    htmlFor="flexCheckDefault"
                  >
                    Autoplay next episode in a series on all devices.
                  </label>
                </div>
                <input
                  className="form-check-input input-size rounded-0 border border-light bg-secondary ms-3"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label ms-3 text-white"
                  htmlFor="flexCheckDefault"
                >
                  Autoplay previews while browsing on all devices.
                </label>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
export default ProfileMain
