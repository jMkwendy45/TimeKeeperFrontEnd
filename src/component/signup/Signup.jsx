import './signup.css'

const SignUp = () =>{
    const initialState ={
        "firstName":"",
         "lastName":"",
         "email":"",
          "password":""
    }
    return(
        <div className="signup-main-contain">
            <div className="createacct-container">
            <div className="creat-txt">
                <h2>Create new account</h2>
            </div>

                <div className="main-cont">
            <form>
                <div>
                    <label htmlFor="">Enter full name </label>
                </div>
                <div className="full-name-container">
                    <input name="firstName" placeholder="Enter first name"/>
                    <input id="lstnm" name="lastName" placeholder="Enter last name" />
                </div>
                <div>
                    <label htmlFor="">Enter email address </label>
                </div>
                <div className="email-cont">
                    <input name="" placeholder="Enter first email"/>
                </div>
                <div>
                    <label htmlFor="">create password </label>
                </div>
                <div className="psswrdtxt">
                    <input name="" placeholder="create a password"/>
                </div>
                <div className="crtbutton">
                    <button>Create account</button>
                </div>
            </form>
                    <div className="alredysign">
                        <p id="alrdtxt">Already a member?</p>
                        <p id="sign-txt">Sign in</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SignUp