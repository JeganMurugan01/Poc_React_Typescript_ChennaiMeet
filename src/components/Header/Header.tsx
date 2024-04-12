const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          WebSiteName
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Page 1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Page 2
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Page 3
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
