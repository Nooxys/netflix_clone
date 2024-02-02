const ProfileFooter = () => {
  return (
    <>
      <footer className="container">
        <div className="col-md-6 mx-auto pb-5">
          <h1 className="mt-4 mb-4 text-start border-bottom border-secondary pb-1 display-1 fw-normal"></h1>
          <button
            className="btn btn-rules text-nf-grey rounded-0 border border-1 text-opacity-50 ms-3 px-4 bg-white"
            type="button"
            aria-expanded="false"
          >
            <p className="text-center text-black m-0 fs-5 fw-semibold fs-6">
              S A V E
            </p>
          </button>
          <button
            className="btn btn-rules text-nf-grey rounded-0 border border-1 text-opacity-50 ms-3 px-4 ms-md-5"
            type="button"
            aria-expanded="false"
          >
            <p className="text-center text-white m-0 fs-5 fw-semibold text-opacity-50 fs-6">
              C A N C E L
            </p>
          </button>
          <button
            className="btn btn-rules text-nf-grey rounded-0 border border-1 text-opacity-50 ms-3 px-4 mb-4 mt-4 ms-xl-5"
            type="button"
            aria-expanded="false"
          >
            <p className="text-center text-white m-0 fs-5 fw-semibold text-opacity-50 fs-6 ">
              D E L E T E P R O F I L E
            </p>
          </button>
        </div>
      </footer>
    </>
  )
}
export default ProfileFooter
