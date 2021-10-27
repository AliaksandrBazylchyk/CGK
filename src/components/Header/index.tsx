import React, {useState} from "react";
import "./styles.scss";
import miniLogo from "./logo.png";
import {Link} from "react-router-dom";
import AuthComponent from "./AuthComponent";

const Header = () => {

  const isAuthorizated = true;

  const stateChanger = () => {
    setIsOpen(false)
  }

  const [isOpen, setIsOpen] = useState(false);
  const [logType, setLogType] = useState("");

  const infoButtons = [
    {
      name: "КОНТАКТЫ",
      link: "/contacts",
    },
    {
      name: "ПРАВИЛА",
      link: "/rules",
    },
    {
      name: "ПРАВА",
      link: "/rights",
    },
  ]

  return (

    <div className="header_handler">
      {
        isOpen && <AuthComponent logType={logType} stateChanger={stateChanger}/>
      }
      <div className="header">
        <Link to="/" className="header_logo">
          <img className="logo" src={miniLogo} alt="Sova"/>
          <h1 className="h1">ЧГК</h1>
        </Link>


        <div className="infoButtons">
          {
            infoButtons.map((button) => (
                <Link className="header_button" to={button.link} key={button.name}>
                  {button.name}
                </Link>
              )
            )
          }
        </div>
        <div className="active_buttons">
          {!isAuthorizated ? <>
            <button
              className="register_button"
              onClick={() => (
                setIsOpen(true), setLogType("Register"), console.log(isOpen, logType)
              )}
            >
              REGISTER
            </button>
            <button
              className="login_button"
              onClick={() => (
                setIsOpen(true), setLogType("login")
              )}
            >
              LOGIN
            </button>
          </> : <>
            <button
              className="profile_button"
            >
              PROFILE
            </button>
            <button
              className="nickname_button"
            >
              nickname
            </button>
          </>
          }
        </div>
      </div>

    </div>
  )
}

export default Header;