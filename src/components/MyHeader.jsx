import logo from '../assets/logo.png'
import { Link, useLocation } from 'react-router-dom'

const MyHeader = () => {
  const location = useLocation()

  return (
    <>
      <nav className="navbar navbar-expand-lg " data-bs-theme="dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={logo} width={100} height={55} alt="logo" />
          </Link>
          <div
            className="navbar-collapse collapse show"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={
                    location.pathname === '/'
                      ? 'nav-link active fw-bold'
                      : 'nav-link fw-bold'
                  }
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    location.pathname === '/TVShows'
                      ? 'nav-link active fw-bold'
                      : 'nav-link fw-bold'
                  }
                  to="/TVShows"
                >
                  TVShows
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    location.pathname === '/Movies'
                      ? 'nav-link active fw-bold'
                      : 'nav-link fw-bold'
                  }
                  to="/Movies"
                >
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    location.pathname === '/RecentlyAdded'
                      ? 'nav-link active fw-bold'
                      : 'nav-link fw-bold'
                  }
                  to="/RecentlyAdded"
                >
                  Recently Added
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    location.pathname === '/MyList'
                      ? 'nav-link active fw-bold'
                      : 'nav-link fw-bold'
                  }
                  to="/MyList"
                >
                  My List
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center my-4 my-lg-0">
              <i className="bi bi-search icons"></i>
              <div id="kids" className="fw-bold">
                KIDS
              </div>
              <i className="bi bi-bell icons"></i>
              <i className="bi bi-person-circle icons"></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
export default MyHeader
