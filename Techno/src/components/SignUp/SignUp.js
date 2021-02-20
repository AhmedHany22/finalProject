
import { useState } from "react";

import "./SignUp.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {

  let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [registerForm, setRegisterForm] = useState({ email: "", password: "" });
  const [registerErrors, setRegisterErrors] = useState({emailErrors: null,passwordErrors: null });
  const handleFormChange = (e) => {
    if (e.target.name === "email") {
      setRegisterForm({
        ...registerForm,
        email: e.target.value,
      });
      setRegisterErrors({
        ...registerErrors,
        emailErrors: e.target.value.length === 0 ? "this field is mandatory" : !re.test(e.target.value)
        ? "You have entered an invalid email address!" : null,
      });
    } else {
      setRegisterForm({
        ...registerForm,
        password: e.target.value,
      });
      setRegisterErrors({
        ...registerErrors,
        passwordErrors: e.target.value.length === 0 ? "this field is mandatory" : e.target.value.length < 8
        ? "password must be greater than 8 " : null,
      });
    }
  };
  const handleSubmit = () => {
    const { email, password } = registerForm;
    setRegisterErrors({
      emailErrors: email.length > 0 ? null : "this field is mandatory",
      passwordErrors: password.length > 0 ? null : "this field is mandatory",
    });
  };

  return (
    <>
      <div className="container-fluid bgd mb-0">
        <div className="signup-form mb-0">
          <form action="/examples/actions/confirmation.php" method="post">
            <h2>Sign Up</h2>
            <p>Please fill in this form to create an account!</p>
            <hr></hr>
            <div className="form-group">
              <div className="row">
                <div className="col">
                  <input type="text" className="form-control" name="first_name" placeholder="First Name" required="required"/>
                </div>
                <div className="col">
                  <input type="text" className="form-control" name="last_name" placeholder="Last Name" required="required"/>
                </div>
              </div>
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                required="required"
                classNameName={`form-control mt-2
					${registerErrors.emailErrors ? "border-danger" : ""}`}
                value={registerForm.email}
                onChange={handleFormChange}
              />
              <small classNameName="text-danger mt-2">
                {registerErrors.emailErrors}
              </small>
              <br></br>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                required="required"
                classNameName={`form-control mt-2 ${
                  registerErrors.passwordErrors ? "border-danger" : ""
                }`}
                value={registerForm.password}
                onChange={handleFormChange}
              />
              <small classNameName="text-danger mt-2">
                {registerErrors.passwordErrors}
              </small>
              <br></br>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="confirm_password"
                placeholder="Confirm Password"
                required="required"
              />
            </div>
            <div className="form-group">
              <label className="form-check-label">
                <input type="checkbox" required="required" classNameName="mr-2" />I
                accept the <a href="#">Terms of Use</a> &amp;
                <a href="#">Privacy Policy</a>
              </label>
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                onClick={handleSubmit}
              >
                Sign Up
              </button>
            </div>
            <div className="hint-text">
              Already have an account?
              <a href="/signin" className="text-decoration-none text-primary">
                Login here
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
