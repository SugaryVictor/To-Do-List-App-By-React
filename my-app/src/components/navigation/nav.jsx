import './nav.scss';

const Navigation = () => {
    return (
        <nav className="header">
          <div className="nav">
            <div className="container">
              <div className="row">
                <nav className="nav__calendar-items">
                  <div className="nav__left">
                    <div className="nav__calendar-icon">
                      <div className="nav__month">May</div>
                      <div className="nav__day">23</div>
                    </div>
                    <div className="nav__list-name h1">Today</div>
                  </div>
                  <div className="nav__right">
                    <ul className="nav__btns menu">
                      <li className="nav__list-btn">
                        <button>
                          <svg width="27" height="17" viewBox="0 0 27 17" xmlns="http://www.w3.org/2000/svg">
                            <rect x="23.0881" y="0.618517" width="4.34871" height="17.8448" rx="1.925" transform="rotate(45 23.0881 0.618517)" fill="#C4C4C4" stroke="#C4C4C4" strokeWidth="0.15"></rect>
                            <rect x="0.926867" y="3.69324" width="4.34871" height="17.8448" rx="1.925" transform="rotate(-45 0.926867 3.69324)" fill="#C4C4C4" stroke="#C4C4C4" strokeWidth="0.15"></rect>
                          </svg>
                        </button>
                        <ul className="nav__list">
                          <li className="nav__lists-text"><a href="#">Today</a></li>
                          <li className="nav__lists-text"><a href="#">Tomorrow</a></li>
                          <li className="nav__lists-text"><a href="#">Projects</a></li>
                        </ul>
                      </li>
                      <li className="nav__filter-btn">
                        <button>
                          <svg width="43" height="12" viewBox="0 0 43 12" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="6.0915" cy="6.23285" rx="5.77009" ry="5.76666" fill="#C4C4C4"></ellipse>
                            <ellipse cx="21.4785" cy="6.23285" rx="5.77009" ry="5.76666" fill="#C4C4C4"></ellipse>
                            <ellipse cx="36.8653" cy="6.23285" rx="5.77009" ry="5.76666" fill="#C4C4C4"></ellipse>
                          </svg>
                        </button>
                        <ul className="nav__list">
                          <li className="nav__lists-text"><a href="#">Completed</a></li>
                          <li className="nav__lists-text"><a href="#">In Progress</a></li>
                          <li className="nav__lists-text"><a href="#">Removed</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </nav>
    )
}

export default Navigation;