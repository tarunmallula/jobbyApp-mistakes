import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {AiFillHome} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              className="nav-bar-website-logo"
              alt="website logo"
            />
          </Link>
          <ul className="nav-mobile-btn-container">
            <li className="nav-mobile-list-item">
              <Link to="/">
                <button
                  aria-label="Save"
                  type="button"
                  className="nav-mobile-btn"
                >
                  <AiFillHome className="nav-mobile-icon" />
                </button>
              </Link>
            </li>
            <li className="nav-mobile-list-item">
              <Link to="/jobs">
                <button
                  aria-label="Save"
                  type="button"
                  className="nav-mobile-btn"
                >
                  <BsBriefcaseFill className="nav-mobile-icon" />
                </button>
              </Link>
            </li>
            <li className="nav-mobile-list-item">
              <button
                aria-label="Save"
                type="button"
                className="nav-mobile-btn"
                onClick={onClickLogout}
              >
                <FiLogOut className="nav-mobile-icon" />
              </button>
            </li>
          </ul>
        </div>
        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              className="nav-bar-website-logo"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/jobs" className="nav-link">
                Jobs
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
