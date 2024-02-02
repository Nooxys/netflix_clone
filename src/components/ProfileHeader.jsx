import logo from '../assets/logo.png'

const ProfileHeader = () => {
  return (
    <>
      <span className="d-flex justify-content-center py-5">
        <img
          src="https://cdn.pixabay.com/photo/2015/12/12/08/50/polar-1089266_1280.png"
          alt="polar_bear"
          width={300}
          height={400}
        />
      </span>
      <header className="container-fluid pt-5">
        <a className="navbar-brand" href="/#">
          <img src={logo} width={100} height={55} alt="logo" />
        </a>
      </header>
    </>
  )
}

export default ProfileHeader
