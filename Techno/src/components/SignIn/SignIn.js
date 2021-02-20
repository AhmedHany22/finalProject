
import {useState} from 'react';

import "./SignIn.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SignIn = () => {

  let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [registerForm, setRegisterForm] = useState({ email: "", password: ""});
  const [registerErrors, setRegisterErrors] = useState({ emailErrors: null, passwordErrors: null});
  const handleFormChange = (e) => {
    if (e.target.name === "email") {
      setRegisterForm({
        ...registerForm,
        email: e.target.value,
      });
      setRegisterErrors({
        ...registerErrors,
        emailErrors:
          e.target.value.length === 0 ? "this field is mandatory" : !re.test(e.target.value)
          ? "You have entered an invalid email address!" : null,
      });
    } else {
      setRegisterForm({
        ...registerForm,
        password: e.target.value,
      });
      setRegisterErrors({
        ...registerErrors,
        passwordErrors:
          e.target.value.length === 0 ? "this field is mandatory" : e.target.value.length < 8
          ? "password must be greater than 8 " : null,
      });
    }
  };
  const handleSubmit = () => {
    console.log(registerForm);
    const { email, password } = registerForm;
    setRegisterErrors({
      emailErrors: email.length > 0 ? null : "this field is mandatory",
      passwordErrors: password.length > 0 ? null : "this field is mandatory",
    });
  };

  return (
    <>
      <div classNameName="bodyLogin m-0">
        <div classNameName="row">

          <div classNameName="login bg-white ">
            <h1>Login</h1>
            <form>
              <div classNameName="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" classNameName="form-control" placeholder="email id" id="email" classNameNameName={`form-control mt-2 ${registerErrors.emailErrors ? "border-danger" : ""}`}
                value={registerForm.email} onChange={handleFormChange}/>
                <small classNameNameName="text-danger mt-2">{registerErrors.emailErrors}</small>
              </div>
              <div classNameName="form-group">
                <label for="pwd">Password</label>
                <input type="password" classNameName="form-control" placeholder="password" id="pwd"
                  classNameNameName={`form-control mt-2 ${registerErrors.passwordErrors ? "border-danger" : ""}`}
                  value={registerForm.password} onChange={handleFormChange}/>
                <small classNameNameName="text-danger mt-2">{registerErrors.passwordErrors}</small>
              </div>
              <div classNameName="form-group form-check">
                <label classNameName="form-check-label">
                  <input classNameName="form-check-input" type="checkbox"/>Remember me
                </label>
              </div>
              <button type="submit" classNameName="btn btn-primary" onClick={handleSubmit}>Sign In</button>
            </form>
            <p><a href=""> Forgot your password ?</a></p>
          </div>
        </div>
      </div>
    </>

  );
};
export default SignIn;