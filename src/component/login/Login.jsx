import './login.css'
const Login =()=>{

    return(
        <div className="login-main">
            <div className="login-container">
                <div className="login-txt">
                    <h2>Login</h2>
                </div>
                    <div className="lg-txt-container">
                        <div className="email-label">
                            <label htmlFor="">Enter email address </label>
                        </div>
                        <div className="email-txt">
                            <input name="" placeholder="Enter first email"/>
                        </div>
                        <div className="pswd-lbl">
                            <label htmlFor="">create password </label>
                        </div>
                        <div  className="pswd-t">
                            <input name="" placeholder="Create a password"/>
                        </div>
                        <div className="lgn-btn">
                            <button>login</button>
                        </div>

                    </div>
                <div className="dontsign">
                    <p id="donttxt">Don't have an account?</p>
                    <p id="dont-txt">Sign up</p>
                </div>

            </div>
        </div>

    )



}

export default Login