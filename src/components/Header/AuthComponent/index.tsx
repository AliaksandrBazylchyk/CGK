import React, {useEffect, useState} from "react";
import "./styles.scss"

const AuthComponent = ({...props}) => {


  return (
    <div className="eclipse_screen">
      {
        <div className="auth_form">
          <div className="exit_button">
            <button onClick={() => props.stateChanger()}> X</button>
          </div>

          <div className="form_handler">
            <form>
              <div className="form_group">
                {props.logType === "Register" &&
                <>
                    <input type="text" className="form_field" placeholder="Nickname" name="Nickname" required/>
                    <input type="text" className="form_field" placeholder="Email" name="Email" required/>
                </>
                }
                <input type="text" className="form_field" placeholder="Login" name="Login" required/>
                <input type="password" className="form_field password_button" placeholder="Password" name="Password"
                       required/>

                <button
                  className="slide"
                >
                  {props.logType}
                </button>
              </div>
            </form>
          </div>
        </div>
      }
    </div>
  )
}

export default AuthComponent;